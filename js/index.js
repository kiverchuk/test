let worker1 = new Worker("Maria", 'Lisevici', 12, 160); 
console.log(worker1.name); 
console.log(worker1.surname);
console.log(worker1.hourRate);
console.log(worker1.hours); 
console.log(worker1.getSalary()); 

let worker2 = new Worker("Mihai", 'Crihan', 8, 200); 
console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.hourRate); 
console.log(worker2.hours); 
console.log(worker2.getSalary());

console.log((worker1.getSalary()>worker2.getSalary()?
    worker1.name+" salariu mai mare cu: "+ (worker1.getSalary()-worker2.getSalary()):
    worker2.name+" salariu mai mare cu: "+ (worker2.getSalary()-worker1.getSalary())
))