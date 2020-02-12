// hämta in mocha och chai
const mocha = require('mocha')
const chai = require('chai')

// hämta ut expect från chai, för att slippa skriva chai.expect hela tiden, 
//räcker då bara med att skriva expect
const expect = chai.expect
const { calculateAge } = require('../src/app')


// alla test definieras innuti en describe('', ()=>{})

describe('Testing app for calculating your age if you enter your year of birth', () => {

    it('Should tell your age', () => {
        const yearOfBirth = 1987
        const age = calculateAge(yearOfBirth) // statement

        expect(age).to.be.equal(33)
        expect(calculateAge(2000)).to.be.equal(20)
        expect(calculateAge(0)).to.be.equal(2020)
        expect(calculateAge(1500)).to.be.equal(520)
    })

    it('Should not be able to calculate age with a year of birth later than current year', () => {
        // Setup - förbereder lite inför testet, väljer värden som är lämpliga till vårat test
        const yearOfBirth = 3000

        // Simulate - Här simmulerar vi att vi använder vår app.js, vi kallar på den funktion som vi vill testa
        const age = calculateAge(yearOfBirth)

        // Assert - Här kontrollerar vi resultatet av testet, gick det bra eller inte?
        expect(age).to.be.undefined

    })

    it('Should tell your age in dog years if youre a dog', () => {
        // Set
        const yearOfBirth = 2019
        const dogYearsPerHumanYear = 7
        // Sim
        const dogAge = calculateAge(yearOfBirth, 'dog')
        // Ass
        expect(dogAge).to.be.equal(dogYearsPerHumanYear)
        expect(dogAge).to.be.equal(7)

    })
})