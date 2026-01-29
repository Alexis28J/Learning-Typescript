let pippo = 1;

//let pippo: number = 1;  :number è corretto ma NON necessario

//pippo = 'pluto'; errore pippo può essere solo numero

let pluto: string;  //va bene dichiarare una variabile senza inizializzarla MA si deve mettere il tipo

pluto = 'cane di pippo'; 

//pluto = null  //scorretto perché pluto essendo stringa NON può essere null

//pluto = 67

let paperino: string | null;  //papperino può essere una stringa o null

paperino = null;

paperino = 'nipote di paperone';


//let topolino: string | number | boolean | null | undefined  //è possibile MA formalmente SCORRETTO

let paperone: 'miliardario' | 'papero' | 'anziano';

paperone = "miliardario";

//paperone = "topo";  paperone è una stringa MA solo un determinato gruppo di stringhe (miliardario, papero, anziano)


enum AnimalType {
  papero, 
  topo, 
  gatto, 
  cane
}

let paperina: AnimalType;  //paperina è di tipo AnimalType, cioè posso solo passarle i valore di AnimalType (è ristretta a un certo numero di valori possibili)

paperina = AnimalType.papero;  //vuol dire 0 cioè il primo valore di AnimalType

let baseArray: number [] = []  //va bene anche se l'array è vuoto

baseArray.push(1);

// baseArray.push(false); non può essere un booleano

//let baseObject = {};  //oggetto vuoto

//baseObject.name = 'andrea';  non va bene 


//se io voglio creare un oggetto e dire cosa contiene devo usare le interfacce

let baseObject = {};

interface Teacher {
name: string;    //se mettessi name? vorrebbe dire che non è necessario avere name
yob: number;
isFemale: boolean;
studentNames: string[];
}

let andrea: Teacher = {   // deve avere le stesse proprietà dichiarate nella interfaccia
  name: "Andrea",
  yob: 1978,
  isFemale: false,
  studentNames: ['Jordy', 'Evelin', 'Salma']
}

console.log(andrea.name);


let student: {name: string; age: number; isFemale?: boolean, marks: number[]};

student = {
  name: 'leo',
  age: 25, 
  //isFemale: false,
  marks: [2, 4, 5]
}

class Student {
  name: string;
  age: number; 
  isFemale: boolean;
  marks: number[] = [];

  constructor(name: string, age: number, isFemale: boolean){
    this.name = name;  //in typescript le proprietà devono essere dichiarate prima di usare this.
    this.age = age;
    this.isFemale = isFemale;  //non è necessario che il constructor abbia tutte le proprietà
  }
}

calculateMean(): Number{
  if (this.marks.length === 0) {
    return - 1;
  }

let sum = 0;

for (let mark of this.marks){
  sum += mark;
}
return sum / this.marks.length;
}

let jordy = new Student('Jordy', 30, false);

console.log(jordy.calculateMean());

jordy.marks.push(7);
jordy.marks.push(9);

console.log(jordy.calculateMean());


const salma = {name: 'salma', isFemale: true, hobby: 'disegno'};  //non c'è problema se hobby non è nella interfaccia Teacher

//se io do un tipo deve avere solo le proprietà di quel tipo
const salma: Teacher = Object.freeze({   //object.freeze rende l'oggetto immutabile
  name: 'selma',
  isFemale: true,
  yob: 2002,
  studentNames: ['leonardo']
});

