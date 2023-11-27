//1,2,3

class Circle
{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
        console.log(`radius : ${radius}`);
        console.log(color);
    }
}
var a=new Circle(1);
var b=new Circle(1,"red");



//getradius

class Circle
{
    constructor(radius)
    {
        this.radius=radius;
        
    }
    getRadius()
    {
      console.log( `${this.radius}`);
    }
}
var a=new Circle(1);
a.getRadius();



//setradius
class Circle
{
    constructor(radius)
    {
        this.radius=radius;
        
    }
   set rad(modifiedRadius)
    {
        this.radius=modifiedRadius;
    }
}
var a=new Circle(1);
a.rad= 6
console.log(a.radius)


//getcolor
class Circle
{
    constructor(color)
    {
        this.color=color;
        
    }
   getcolor()
   {
    console.log(`${this.color}`);
   }
}
var a=new Circle("red");
a.getcolor();


//setcolor
class Circle
{
    constructor(color)
    {
        this.color=color;
        
    }
   set Col(modifiedColor)
    {
        this.color=modifiedColor;
    }
}
var a=new Circle("Red");
a.Col= "blue"
console.log(a.color)


//getarea
class Circle
{
    constructor(radius)
    {
        this.radius=radius;
        
    }
    getArea()
    {
        console.log(`${this.radius* 3.14 * this.radius}`);
    }
}
var a=new Circle(2);
a.getArea()



// to string
class Circle {
    constructor(arr)
     {
        this.arr = arr;
        const arrAsString = arr.toString();
        console.log(arrAsString);
    }
}
var a = 1;
var b = 2;
var c = 3;
var circleInstance = new Circle([a, b, c]);



