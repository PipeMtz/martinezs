// test/test.js
import chai from 'chai';
const expect = chai.expect;
import {app} from './server.js';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
describe('My Module', function () {
    it('debería sumar dos números correctamente', function () {
        chai.request(app)
            .get('/user')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('name');
                expect(res.body.name).to.equal('john');
            });
        
    });

});