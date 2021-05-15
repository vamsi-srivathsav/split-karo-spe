const app = require('../app');

const request = require('supertest');
const logger = require('../logger/logger_index');
const baseUrl = 'http://localhost:1234';

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjUsImZpcnN0bmFtZSI6ImZpcnN0bmFtZSIsImxhc3RuYW1lIjoibGFzdG5hbWUiLCJlbWFpbCI6ImVtYWlsMUBnbWFpbC5jb20ifSwiaWF0IjoxNjE5NzgyOTkwLCJleHAiOjE2MTk4MDA5OTB9.Zsh_ZrMMiaWFl59WFUEfTEueFA2ngcQ3_t2WrYLeBn4';
let id = 5;

// Signup
describe('\n\n\n\nSignup ::', () => {

    it('Create User Success\n\n', (done) => {
        request(baseUrl)
            .post('/signup')
            .send({
                username: "vamsi4", email: "vamsi4@gmail.com", password: "123456789"
            })
            .end((err, res) => {
                if (res.body.success === 0) {
                    logger.error(err);
                    throw err;
                };
                if (res.body.success === 1) {
                    console.log(res.body);
                    logger.info(res.body);
                };

                done();
            });
    })


    it('Failed to signup \n\n', (done) => {
        request(baseUrl)
            .post('/signup')
            .send({
                username: "vamsi3", email: "vams", password: "123456789"
            })
            .end((err, res) => {
                if (res.body.success === 1) {
                    logger.error(err);
                    throw err;
                };
                if (res.body.success === 0) {
                    console.log(res.body);
                    logger.info(res.body);
                };
                done();
            });
    })

});

// Login
describe('\n\n\n\nLogin test :: ', () => {

    it('should not able log in \n\n', (done) => {
        request(baseUrl)
            .post('/login')
            .send({
                email: 'vamsi@gmail.com',
                password: '876'
            })
            .end((err, res) => {
                if (res.body.success === 1) {
                    logger.error(err);
                    throw err;
                };
                if (res.body.success === 0) {
                    console.log(res.body);
                    logger.info(res.body);
                };
                done();
            });
    })

    it('should be able to login \n\n', (done) => {
        request(baseUrl)
            .post('/login')
            .send({
                email: 'vamsi@gmail.com',
                password: '123456789'
            })
            .end((err, res) => {
                if (res.body.success === 0) {
                    logger.error(err);
                    throw err;
                };
                if (res.body.success === 1) {
                    console.log(res.body);
                    logger.info(res.body);
                    token = res.body.currentUser.token;
                    id = res.body.currentUser.id;
                };
                done();
            });
    })
});
