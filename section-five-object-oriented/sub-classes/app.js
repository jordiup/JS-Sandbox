class Person {
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `Hello there ${this.firstName}`;
  }
}

// Customer extends person (customer is a subclass of person)
class Customer extends Person {
  constructor(firstName,lastName,phone,membership){
    // Calls the parent class constructor, used in ReactJS
    super(firstName,lastName);

    this.phone = phone;
    this.membership = membership;
  }

  // Can even write static methods
  static getMembershipCost(){
    return 500;
  }
}

const john = new Customer('John', 'Smith', '555-555-555');
console.log(john);
// note that it wont work the other way around, cant call static method on Person, only Customer 
console.log(Customer.getMembershipCost());
