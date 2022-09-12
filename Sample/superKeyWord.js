class Animal {
    constructor(color, age){
        this.color = color;
        this.age = age;
    }

    printColor(){
        console.log(this.color);
    }
    printAge(){
        console.log(this.age);
    }
}

class Dog extends Animal {

    constructor(color, age, food){
        super(color, age);
        this.food = food;
    }

    eating(){
        console.log(this.food);
    }

    display(){
       
        this.printColor();
        this.printAge();
        this.eating();
    }
}

d = new Dog("Black", 11, "Bone");
d.display();