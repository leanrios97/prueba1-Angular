const usarname:  string | number = 'LeanRios';

const sum = (a: number, b: number) => {
  return a + b ;
}

sum(1, 3);

class Persona {
  age: number;
  lastname: string;

  constructor(age:number, lastname: string) {
    this.age = age;
    this.lastname = lastname;
  }
}

const lean = new Persona(25, 'Rios');
lean.age
