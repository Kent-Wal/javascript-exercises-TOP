const findTheOldest = function (people) {
    let oldest = 0;
    let oldestIndex;

    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath == undefined) {
            const date = new Date();
            people[i].yearOfDeath = date.getFullYear();
        }

        let age = people[i].yearOfDeath - people[i].yearOfBirth;

        if (oldest < age) {
            oldest = age;
            oldestIndex = i;
        } 
    }

    return people[oldestIndex];
}
// Do not edit below this line
module.exports = findTheOldest;
