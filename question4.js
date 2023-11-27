class Uber
{
    constructor(name,startpoint,endpoint,kilometer_travelled)
    {
        this.name=name;
        this.startpoint=startpoint;
        this.endpoint=endpoint;
        this.kilometer_travelled=kilometer_travelled;
    }
    getamount()
    {
        console.log(`Calculated Kilometers is : ${this.kilometer_travelled}`)
        console.log(`Amount for Travelling from ${this.startpoint} to ${this.endpoint} is rupees ${this.kilometer_travelled*10} `)
    }
}
var a=new Uber("Swathi","ponnapuram","Usha theatre","14km" );
a.getamount();