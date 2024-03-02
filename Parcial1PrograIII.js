//1) concat(): Combina dos arrays en uno nuevo. 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

//2) copyWithin(): Copia una secuencia de elementos dentro del array.
const array = ['a', 'b', 'c', 'd', 'e'];
array.copyWithin(0, 3, 4);
console.log(array); // Output: ['d', 'b', 'c', 'd', 'e']

//3) entries(): Devuelve un objeto iterador que contiene los pares clave/valor para cada índice en el array.
const array = ['a', 'b', 'c'];
const iterator = array.entries();
for (let entry of iterator) {
  console.log(entry);
}
// Output:
// [0, 'a']
// [1, 'b']
// [2, 'c']

//4) every(): Verifica si todos los elementos cumplen con una condición.
const array = [1, 2, 3, 4, 5];
const allGreaterThanZero = array.every(element => element > 0);
console.log(allGreaterThanZero); // Output: true

//5) fill(): Rellena todos los elementos con un valor estático.
const array = new Array(5);
array.fill(0);
console.log(array); // Output: [0, 0, 0, 0, 0]

//6) filter(): Crea un nuevo array con los elementos que pasan una condición.
const array = [1, 2, 3, 4, 5];
const newArray = array.filter(element => element % 2 === 0);
console.log(newArray); // Output: [2, 4]

//7) find(): Encuentra el primer elemento que pasa una condición.
const array = [1, 2, 3, 4, 5];
const foundElement = array.find(element => element > 3);
console.log(foundElement); // Output: 4

//8) findIndex(): Encuentra el índice del primer elemento que pasa una condición.
const array = [1, 2, 3, 4, 5];
const foundIndex = array.findIndex(element => element > 3);
console.log(foundIndex); // Output: 3

//9) flat(): Aplana un array de arrays.
const array = [1, 2, [3, 4, [5, 6]]];
const newArray = array.flat(2);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

//10) flatMap(): Mapea cada elemento y aplana el resultado en un nuevo array.
const array = [1, 2, 3];
const newArray = array.flatMap(x => [x, x * 2]);
console.log(newArray); // Output: [1, 2, 2, 4, 3, 6]

//11) forEach(): Ejecuta una función por cada elemento del array.
const array = [1, 2, 3];
array.forEach(element => console.log(element));
// Output:
// 1
// 2
// 3

//12) includes(): Verifica si un array incluye un valor.
const array = [1, 2, 3];
const includesTwo = array.includes(2);
console.log(includesTwo); // Output: true

//13) indexOf(): Devuelve el índice de la primera ocurrencia de un valor.
const array = [1, 2, 3, 4, 5];
const index = array.indexOf(3);
console.log(index); // Output: 2

//14) join(): Une todos los elementos del array en una cadena.
const array = ['Hello', 'world', '!'];
const joinedString = array.join(' ');
console.log(joinedString); // Output: 'Hello world !'

//15) keys(): Devuelve un iterador con las claves del array.
const array = ['a', 'b', 'c'];
const iterator = array.keys();
for (let key of iterator) {
  console.log(key);
}
// Output:
// 0
// 1
// 2

//16) lastIndexOf(): Devuelve el último índice de un valor en el array.
const array = [1, 2, 3, 4, 5, 3];
const lastIndex = array.lastIndexOf(3);
console.log(lastIndex); // Output: 5

//17) map(): Crea un nuevo array con los resultados de una función.
const array = [1, 2, 3];
const newArray = array.map(element => element * 2);
console.log(newArray); // Output: [2, 4, 6]

//18) pop(): Elimina el último elemento y lo devuelve.
const array = [1, 2, 3];
const poppedElement = array.pop();
console.log(poppedElement); // Output: 3

//19) push(): Añade uno o más elementos al final del array.
const array = [1, 2, 3];
array.push(4, 5);
console.log(array); // Output: [1, 2, 3, 4, 5]

//20) reduce(): Reduce el array a un único valor.
const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

//21) reduceRight(): Reduce el array de derecha a izquierda.
const array = [1, 2, 3, 4, 5];
const sum = array.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

//22) reverse(): Invierte el orden de los elementos.
const array = [1, 2, 3];
array.reverse();
console.log(array); // Output: [3, 2, 1]

//23) shift(): Elimina el primer elemento y lo devuelve.
const array = [1, 2, 3];
const shiftedElement = array.shift();
console.log(shiftedElement); // Output: 1

//24) slice(): Devuelve una parte del array como un nuevo array.
const array = [1, 2, 3, 4, 5];
const slicedArray = array.slice(1, 3);
console.log(slicedArray); // Output: [2, 3]

//25) some(): Verifica si al menos un elemento pasa una condición.
const array = [1, 2, 3, 4, 5];
const hasEvenNumber = array.some(element => element % 2 === 0);
console.log(hasEvenNumber); // Output: true

//26) sort(): Ordena los elementos del array.
const array = [3, 1, 2, 5, 4];
array.sort();
console.log(array); // Output: [1, 2, 3, 4, 5]

//27) splice(): Cambia el contenido del array eliminando elementos existentes y/o añadiendo nuevos elementos.
const array = [1, 2, 3, 4, 5];
array.splice(2, 0, 6, 7);
console.log(array); // Output: [1, 2, 6, 7, 3, 4, 5]

//28) toLocaleString(): Devuelve una representación localizada del array.
const array = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const string = array.toLocaleString();
console.log(string); // Output: '1,a,12/21/1997, 2:12:00 PM'

//29) toString(): Devuelve una representación en forma de cadena del array.
const array = [1, 2, 3];
const string = array.toString();
console.log(string); // Output: '1,2,3'

//30) unshift(): Añade uno o más elementos al principio del array.
const array = [1, 2, 3];
array.unshift(4, 5);
console.log(array); // Output: [4, 5, 1, 2, 3]

//31) values(): Devuelve un objeto iterador con los valores del array.
const array = ['a', 'b', 'c'];
const iterator = array.values();
for (let value of iterator) {
  console.log(value);
}
// Output:
// 'a'
// 'b'
// 'c'

//32) Symbol.iterator(): Devuelve un objeto iterador para el array.
const array = ['a', 'b', 'c'];
const iterator = array[Symbol.iterator]();
for (let value of iterator) {
  console.log(value);
}
// Output:
// 'a'
// 'b'
// 'c'


// Segunda parte del Parcial 

//1) Stream: Un stream regular que puede contener cualquier tipo de elementos.
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.stream().forEach(System.out::println);

//2) IntStream, LongStream, DoubleStream: Streams especializados para tipos primitivos int, long, y double, respectivamente.
IntStream.range(1, 5).forEach(System.out::println);

//3) Stream.Builder: Permite construir un stream de manera programática.
Stream.Builder<Integer> builder = Stream.builder();
builder.add(1).add(2).add(3).build().forEach(System.out::println);

//4) StreamSupport.stream: Crea un stream a partir de un Spliterator.
Iterable<Integer> iterable = Arrays.asList(1, 2, 3, 4, 5);
StreamSupport.stream(iterable.spliterator(), false).forEach(System.out::println);

//5) BufferedReader.lines: Crea un stream a partir de las líneas de un BufferedReader.
BufferedReader reader = new BufferedReader(new FileReader("archivo.txt"));
reader.lines().forEach(System.out::println);

//6) Files.lines: Crea un stream a partir de las líneas de un archivo.
Files.lines(Paths.get("archivo.txt")).forEach(System.out::println);





