require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
// const authenticateUser = require('./middleware/authentication')

// extra security packages
// const helmet = require('helmet')
const cors = require('cors')
// const xss = require('xss-clean')
// const rateLimiter = require('express-rate-limit')

// connectDB
const connectDB = require('./db/connect')

// routers
const router = require('./routes/routes');


// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const { serveFiles, startStreaming } = require('./controllers/streaming');

// app.set('trust proxy',1) // This is required if we use ratelimit in heroku,...
// app.use(rateLimiter({
//   windowMs: 15*60*1000, //15 mins
//   max:100, // limit each IP to 100 request per windowMs
// }))
app.use(express.json());
// app.use(helmet())
app.use(cors())
// app.use(xss())
// extra packages



// routes
app.get('/ping',(req,res)=>[
  res.send('pong')
])
app.use('/api/v1', router);


// For allowing cross origin requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
  next();
});
// For serving the files
app.get("*", serveFiles);



app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    startStreaming();
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();