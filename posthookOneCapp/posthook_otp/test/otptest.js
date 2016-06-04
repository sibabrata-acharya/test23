var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = require('chai').expect;
var request = require('supertest');

/**
 * Test Suites
 */
describe('OTP Test Cases', function () {
    // Start the server before the test case with delay of 1second to instantiate the routers

    describe('Method POST', function () {
        it('should be able to Generate OTP', function (done) {
            request("http://localhost:3000")
                .post("/generate")
                .send({})
                .set('Accept', 'application/json')
                .expect(200)
                .end(function (err, res) {
                    done();
                });


        });
    });


    describe('Method POST', function () {
        it('should be able to validate OTP', function (done) {
            request("http://localhost:3000")
                .post('/validate')
                .send({"otpCode": "0503", "otpKey": "49b4bd6b652c105a4e0aee9e22d17f70e41f74ade8ca4651e42da21ef2df02f4"})
                .expect(200)
                .end(function (err, res) {
                    done();
                });
        });
    });
});


