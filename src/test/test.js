const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Animals', () => {



    describe('GET Animals', () => {
        it('Testing GET all the animals', (done) => {
            chai.request('http://localhost:3000')
                .get('/api/animals')
                .set('Authorization': '' )
        });
    });

});