class Person
{
    constructor(firstname,lastname,gender,age,Nationality,Qualification,dateOfBirth)
    {
       this.firstname=firstname;
       this.lastname=lastname;
       this.gender=gender;
       this.age=age;
       this.Nationality=Nationality;
       this.Qualification=Qualification;
       this.dateOfBirth=dateOfBirth;
    }
    getdetails()
    {
        return `Details are
        First name is    : ${this.firstname}
        Last name is     : ${this.lastname}
        Gender is        : ${this.gender}
        Age of ${this.firstname} is  : ${this.age}
        Nationality is   : ${this.Nationality}
        Qualification is : ${this.Qualification}
        Date of birth of ${this.firstname} is: ${this.dateOfBirth}`

    }
}

var a=new Person("Swathi","Muneeswaran","Female",22,"Indian","B.E-ECE","25/05/2002");
console.log(a.getdetails());