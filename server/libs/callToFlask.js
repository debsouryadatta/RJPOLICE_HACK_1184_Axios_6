const { default: axios } = require("axios");

const callToFlask = async (req, res) => {
        try {
            console.log('calling flask');
            const response = await axios.get('https://a0a9-103-23-239-125.ngrok-free.app/fetch', {
                headers: 'ngrok-skip-browser-warning',
            });
            callToFlask();
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
}


module.exports = {
    callToFlask
}