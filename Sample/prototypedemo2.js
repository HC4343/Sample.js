// PROTOTYPE WITH FUNCTION...

function worker (){
    this.name = "John";
    this.age = 21;
}

worker.prototype.id = 1233;

stud1 = new worker();
stud1.gender = "male";
console.log(stud1.name, stud1.age, stud1.gender);

stud2 = new worker();
stud2.gender = "female";
console.log(stud2.name, stud2.age, stud2.gender, stud2.id);

// PROTOTYPE WITH CLASS...

class Employee {

    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

Employee.prototype.gender = "male";

obj = new Employee(33, "Edward");
console.log(obj.id, obj.name, obj.gender);

obj2 = new Employee(45, "Adem");
console.log(obj2.id, obj2.name, obj2.gender);

// PROTOTYPE WITH FUNCTION IN A CLASS....

class Student {

    constructor(age, name){
        this.age = age;
        this.name = name;
    }
}

Student.prototype.gender = "female";

Student.prototype.display = function()
{
    console.log(this.age, this.name, this.gender);
}

obj3 = new Student(13, "Hans")
obj3.display();
