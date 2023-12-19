require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
// const authenticateUser = require('./middleware/authentication')

// extra security packages
// const helmet = require('helmet')
// const cors = require('cors')
// const xss = require('xss-clean')
// const rateLimiter = require('express-rate-limit')

// connectDB
const connectDB = require('./db/connect')

// routers
const generateLicenseeRouter = require('./routes/generateLicensee')
const getFootagesRouter = require('./routes/getFootages')
const loginAdminRouter = require('./routes/loginAdmin')
const registerCameraRouter = require('./routes/registerCamera')


// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// app.set('trust proxy',1) // This is required if we use ratelimit in heroku,...
// app.use(rateLimiter({
//   windowMs: 15*60*1000, //15 mins
//   max:100, // limit each IP to 100 request per windowMs
// }))
app.use(express.json());
// app.use(helmet())
// app.use(cors())
// app.use(xss())
// extra packages


// routes
app.get('/ping',(req,res)=>[
  res.send('pong')
])
app.use('/api/v1', generateLicenseeRouter)
app.use('/api/v1', getFootagesRouter)
app.use('/api/v1', loginAdminRouter)
app.use('/api/v1', registerCameraRouter)
// app.use('/api/v1/jobs', authenticateUser, jobsRouter)


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();