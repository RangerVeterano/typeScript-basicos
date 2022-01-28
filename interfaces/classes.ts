(() => {

    interface Xmen {
        nombre: string;
        nombreReal: string;
        poderMutante(id: number): string
    }

    interface Human {
        edad: number;
    }

    //Para que la clase mutante coga los datos de Xmen tiene que implementar la interfaz Xmen, no la extiende porque Xmen no es una clase sino que es una interfaz 
    //Podemos hacer que se implementen 2 interfaces
    class Mutante implements Xmen, Human {

        constructor(
            public edad: number,
            public nombre: string,
            public nombreReal: string,
        ) { }

        poderMutante(id: number): string {
            return this.nombre + ' ' + this.nombreReal
        }
    }

})()