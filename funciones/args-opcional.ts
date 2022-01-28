(() => {

    //Esto quiere decir que los argumentos son obligatorios
    // Se requieren dos parámetros string, pero con el signo de interrogacion le estamos diciendo que el apellido es opcional, puede que llege puede que no
    const fullName = (firstName: string, lastName?: string):string => {
        return `${firstName} ${lastName || 'sin apellido'}`
    }

    const name = fullName('Ignacio');

    console.log(name);

})()