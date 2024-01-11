const jwt = require('jsonwebtoken');

const loginAdmin = (req, res) => {
    try {
        const {username, password} = req.body;
        if(username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign({username: username}, process.env.JWT_SECRET, {expiresIn: '365d'});
            res.status(200).json({success: true, message: 'Login successful', token: token});
        } else {
            res.status(401).json({success: false, message: 'Invalid credentials'});
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    loginAdmin
}