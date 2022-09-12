function student(){
    this.name = "John";
    this.age = 21;
}

student.prototype.id = 1233;

stud1 = new student();
stud1.gender = "male";
console.log(stud1.name, stud1.age, stud1.gender);

stud2 = new student();
stud2.gender = "female";
console.log(stud2.name, stud2.age, stud2.gender, stud2.id);

