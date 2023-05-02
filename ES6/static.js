class Company{
    static company = 'Apple';
    static numberOfEmployees = 10000;
    static getCompanyInfo(name){
        return `${name} works in ${this.company}`;
    }
    static getTotalEmployees(){
        //calling static method in class
        return `Total number of emloyees in ${this.getCompanyName()} are ${this.numberOfEmployees}`;
    }
    static getCompanyName(){
        return this.company;
    }
}

class Aishwarya extends Company{
    constructor(){
        super();
        //calling static methods and fields in constructor
        console.log('Inside constructor', Aishwarya.name);//Inside constructor Aishwarya
    }
    static name = 'Aishwarya';
    static getInfo(){
        return super.getCompanyInfo(this.name);//calling static method of Parent class
    }
}

//calling static field on Parent class
console.log(Company.company);
//calling static method of Parent class
console.log(Company.getTotalEmployees());
console.log(Company.getCompanyInfo());
//calling static field on Derived class
console.log(Aishwarya.getInfo());
//calling static method of Derived class
console.log(Aishwarya.name);

const obj = new Aishwarya();