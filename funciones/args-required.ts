(() => {

    //Esto quiere decir que los argumentos son obligatorios
    // Se requieren dos parámetros string
    const fullName = (firstName: string, lastName: string) => {
        return `${firstName} ${lastName}`
    }

    //En este caso ahora el apellido puede aceptar un booleano
    const fullName2 = (firstName: string, lastName: (string| boolean)) => {
        return `${firstName} ${lastName}`
    }

    const fullName3 = (firstName: string, lastName: (string| boolean)) => {
        
        if(!firstName){
            throw new Error('Nombre requerido'); 
        }

        return `${firstName} ${lastName}`
    }



    const name = fullName('Ignacio', 'Bohigues');

    console.log(name);

})()