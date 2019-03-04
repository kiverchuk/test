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
    }
    getSalary(){
        return this.hourRate*this.hours
    }

    increaseSalary(i){
        this.hourRate += i;
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.surname = name;
    }

    getSurname(){
        return this.surname;
    }
    setSurname(surname){
        this.surname = surname;
    }

    getRate(){
        return this.hourRate;
    }
    setRate(rate){
        this.hourRate = rate;
    }

    getHours(){
        return this.hours;
    }
    setHours(hours){
        this.hours = hours;
    }
}