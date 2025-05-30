

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age
const persons = [
    {name : 'Hans', age : 31},
    {name : 'Greta', age : 33},
    {name : 'Harry', age : 24},
    {name : 'Gertrud', age : 44},
    {name : 'Sten', age : 22},
]

const aboveThirty = persons => {
for (let person of persons) {
    if (person.age > 30) {
        console.log(person.name)
        }
    }
}
aboveThirty(persons);
// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument


}
uppg8();

module.exports = { uppg8 };