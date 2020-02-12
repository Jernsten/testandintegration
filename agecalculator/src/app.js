function calculateAge(yearOfBirth, dog) {

    const thisYear = new Date().getFullYear()
    let age = thisYear - yearOfBirth
    const dogYears = 7

    if (age < 0)
        return undefined

    if (dog)
        age *= dogYears

    return age
}

module.exports = { calculateAge }