// class Worker{    
//     constructor(name, surname, hourRate, hours){
//         this.name = name;
//         this.surname = surname;
//         this.hourRate = hourRate;
//         this.hours = hours;
//     }
//     getSalary(){
//         return this.hourRate*this.hours
//     }
// }

class Worker{ 
    constructor(name, surname, hourRate, hours){
        this.name = name;
        this.surname = surname;
        this.hourRate = hourRate;
        this.hours = hours;
        //this.tax = 0;
    }
    getSalaryNetto(){
        return (this.getSalary()-(this.getSalary()*(this.tax/100)));
    }
    getSalary(){
        return this.hourRate*this.hours
    }

    setTax(tax){
        this.tax = tax;
    }

    

    increaseSalary(i){
        this.hourRate += i;
    }

    getName(){
        return this.name;
    }

    getSurname(){
        return this.surname;
    }

    getRate(){
        return this.hourRate;
    }

    getHours(){
        return this.hours;
    }

}