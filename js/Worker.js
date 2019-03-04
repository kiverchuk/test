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
};