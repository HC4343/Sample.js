class Shape {

    draw (){
        return "This is a generic shape."
    }
}

class Circle {
    
    draw(){
        return "This is a circle";
    }
}

s = new Shape();
console.log(s.draw());

s = new Circle();
console.log(s.draw());