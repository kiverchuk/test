// let worker1 = new Worker("Maria", 'Lisevici', 12, 160); 
// console.log(worker1.name); 
// console.log(worker1.surname);
// console.log(worker1.hourRate);
// console.log(worker1.hours); 
// console.log(worker1.getSalary()); 

// let worker2 = new Worker("Mihai", 'Crihan', 8, 200); 
// console.log(worker2.name);
// console.log(worker2.surname);
// console.log(worker2.hourRate); 
// console.log(worker2.hours); 
// console.log(worker2.getSalary());

// console.log((worker1.getSalary()>worker2.getSalary()?
//     worker1.name+" salariu mai mare cu: "+ (worker1.getSalary()-worker2.getSalary()):
//     worker2.name+" salariu mai mare cu: "+ (worker2.getSalary()-worker1.getSalary())
// ))

// var worker = new Worker("Ion", 'Creangă', 10, 176); console.log(worker.getName()); // afișează Ion 
// console.log(worker.getSurname()); // afișează Creangă 
// console.log(worker.getRate()); // afișează 10 
// console.log(worker.getHours()); // afișează 176 
// console.log(worker.getSalary()); //afișează 1760 = 10*176
// worker.increaseSalary(2); //mărește hourRate cu 2
// console.log(worker.getSalary()); //afișează 2112 = 12*176
// worker.setTax(18); //setează impozitul pe salariu la 18%
// console.log(worker.getSalaryNetto()); 

var workers = [3];
workers[0] = new Worker("Ion", 'Creangă', 10, 176);
workers[1] = new Worker("Michai", 'Crihan', 8, 200);
workers[2] = new Worker("Maria", 'Lisevici', 12, 157);
for(let i =     0; i < workers.length; i++){
    console.log(workers[i].getName());
    console.log(workers[i].getSurname());
    console.log(workers[i].getRate());
    console.log(workers[i].getHours());
    console.log(workers[i].getSalary());
    workers[i].increaseSalary(2);
    console.log(workers[i].getSalary());
    workers[i].setTax(18);
    console.log(workers[i].getSalaryNetto()); 
}