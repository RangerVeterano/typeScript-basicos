(() => {

    //Esto quiere decir que los argumentos son obligatorios
    //Se requieren dos parámetros string, pero el segundo string es opcional, se puede mandar o bien no
    //Luego tenemos un tercer args que es un booleano que tiene un valor por defecto (a menos que le digamos lo contrario)
    const fullName = (firstName: string, lastName?: string, upper: boolean = false) => {

        if (upper) { // si upper es true se pasa a todo mayusculas
            return `${firstName} ${lastName || 'sin apellido'}`.toUpperCase()
        } else { // si no, no hace nada
            return `${firstName} ${lastName || 'sin apellido'}`
        }

    }

    const name = fullName('Ignacio', 'Bohigues',true);

    console.log(name);

})()