(() => {
    interface addTwoNumbers {
        (a:number,b:number): number //De esta forma se tiene que implementar la funcion
    }

    let sumarFuncion: addTwoNumbers; //definicion donde vamos a meter la funcion

    sumarFuncion = (a:number, b:number) => {
        return a+b
    }
})()