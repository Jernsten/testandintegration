//const mocha = require('mocha')
const request = require('supertest')

describe('Using express', () => {
    let server;

    // vad som ska göras innan alla test körs
    // Det är här vi ska hämta servern och initiera
    beforeEach(() => {
        server = require('../src/server')
    })


    // ett test
    it('Should respond to /', (done) => {
        request(server)
            .get('/')
            .expect(200, done)
    })

    // ett annat test
    it('Should do 404 on everything else', (done) => {
        request(server)
            .get('/ensidasomintefinns')
            .expect(404, done)
    })

    // ett tredje test
    it('Should do 200 on /ensidasomfinns', (done) => {
        request(server)
            .get('/ensidasomfinns').expect(200, done)
    })


    // vad som ska göras efter alla test är färdigkörda
    // Det är här vi ska stänga servern
    afterEach(() => {
        server.close()
    })
})