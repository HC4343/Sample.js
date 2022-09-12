const person = {
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "John", lastName: "Doe"
};

let x = person.fullName.call(person2);
console.log(x);

// CALL METHOD EXAMPLE:

const member = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const member1 = { 
    firstName: "Ali",
    lastName: "Takoz"
}
const member2 = {
    firstName: "Osman",
    lastName: "Kaya"
}
let xy = member.fullName.call(member1);
console.log(xy);

// CALL METHOD EXAMPLE 2:
const passenger = {
    fullName: function(city, country){
        return this.firstName + " " + this.lastName + " " + city + "/" + country;
    
} 
};

const passenger1 = {
    firstName: "Kamil",
    lastName: "Yildizkaya",

};

let as = passenger.fullName.call(passenger1, "NYC", "USA");
console.log(as);

// BIND METHOD EXAMPLE:

const employee = {
    firstName: "Aslan",
    lastName: "Deveci",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

const employee2 = {
    firstName: "John", 
    lastName: "Doe",
};

let xl = employee.fullName.bind(employee2);
console.log(xl);

let bs = "a,b,c,d";  
const sb = bs.split(","); //SPLIT method is used to create ARRAY
console.log(sb);

  

  
  