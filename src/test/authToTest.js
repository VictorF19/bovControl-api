const https = require('request'); 

module.exports = () => {
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/api/authenticate',
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }
    };
    
    const body = {
        email: 'test@hotmail.com',
        password: 'test'
    };
    
    const postRequest = https.request(options, function(res) {
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });
    
    postRequest.write(body);
    postRequest.end();    
}