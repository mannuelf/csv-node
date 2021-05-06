class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arrStrings = new ArrayOfAnything<string>(['a', 'b', 'c']);

const arrNums = new ArrayOfAnything<number>([0, 1, 2, 3, 4]);

/*
 * code duplication can be improved with use of generics
 * */
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// yes
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);
printAnything<number>([1, 2, 3, 4]);

// type inference, dont specifically have to annotate the type,
// but is helpful to have as above.
printAnything([0, 1, 2, 3, 4]);

class House {
  print() {
    console.log('I am a house');
  }
}

class Car {
  print() {
    console.log('I am a car');
  }
}

// interface, contract or contraint
interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);

printHousesOrCars<Car>([new Car()]);
