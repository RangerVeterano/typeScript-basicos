(() => {

    //Declaramos la interfaz principal arriba del todo y luego las complementarias
    //Tenemos que tener en cuenta que si una clase tiene el método tiene que implementar el método si o si, en el caso de la interface con tener la informacion ya le sirve, es decir como se ve
    interface Client {
        name: string,
        age?: number, //opcional
        direccion : Direccion
        getDirecionCompleta (id:string): void; //Para este caso sabemos que es un metodo que recibe una string pero no devuelve nada
    }

    //Como esta es secundaria no pasa nada
    interface Direccion {
        id: number,
        zip: string,
        ciudad: string
    }

    const cliente: Client = {
        name: 'Ignacio',
        age: 23,
        direccion: {
            id: 125,
            zip: 'ASD SUD',
            ciudad: 'Ottawa'
        },
        getDirecionCompleta(){
            return 'Hola esta es mi dirección'
        }
    }

    const client2: Client = {
        name: 'Melisa',
        age: 30,
        direccion: {
            zip : 'DSA EST',
            ciudad: 'Alcoy',
            id: 456
        },
        getDirecionCompleta(){
            return 'Hola esta es mi dirección'
        }
    }
})()