const should = require('should');
const chaiHttp = require('chai-http');
const chai = require('chai');
const expect = chai.expect;
const axios = require('axios');

const baseUrl = 'http://localhost:3000/api'

chai.use(chaiHttp);

describe('Testing the BovControl API', () => {

    // to this test runs the user below should be created first
    // const response = await axios.post(`${baseUrl}/authenticate`, {
    //     email: 'test@hotmail.com',
    //     password: 'test'
    // });

    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNGVhY2I2ZDE4ZmZjNmVkYjhlNmNiOCIsImlhdCI6MTU4MjMwMDU0NywiZXhwIjoxNTgyMzg2OTQ3fQ.GOWSgzN-B3N6rcxlae7QH0vYAtfMt8A0_qUMFBMXJAk";

    it('GET all animals test', (done) => {
        chai.request(baseUrl)
            .get('/animals')
            .set('Authorization', token)
            .end((err, res) => {

                res.status.should.be.equal(200);
                res.body.should.have.property('docs')
                done();
            });
    });

    it('POST animal test', (done) => {
        chai.request(baseUrl)
            .post('/animals')
            .set('Authorization', token)
            .end((err, res) => {

                res.status.should.be.equal(200);
                
                done();
            });
    });
});