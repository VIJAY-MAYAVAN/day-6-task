//1. write a "person" class hold all the details


class Person {
    constructor(firstName, lastName, age, country, city) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  
  console.log(person1)

  // 2. write a class to calculate uber price

  let baseFee = .65
let cities = ["auto nagar", "patamata", "vijayawada", ]
let uberRates = [5, 10, 15]
let customerName = "kumar"
let customerCity = "auto nagar" 
console.log("Welcome", customerName+ ", welcome to the Uber")
function getRate(customerCity) {
    function uberRate(customerCity, i) {
      let total = (uberRates[i]) * baseFee
      return total
    }
    console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
  }
  getRate(customerCity)