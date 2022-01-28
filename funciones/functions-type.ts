(() => {

    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;

    let myFunction;
    // let myFunction: (y:number, x:number) => number;
    // let myFunction: (y:string) => string;
    // let myFunction: () => string;

    // myFunction = 10;
    // console.log(myFunction)

    //? Estamos guardando la funcion dentro de la variable myFunction
    myFunction = addNumbers
    console.log(myFunction(1, 2))

    myFunction = greet
    console.log(myFunction('Ignacio'))

    myFunction = saveTheWorld
    console.log(myFunction())

})()