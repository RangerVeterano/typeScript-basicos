(() => {

    //inicializamos la clase Avenger
    class Avenger {

        constructor(
            public nombre: string,
            public nombreReal: string,
        ) {

            console.log('Constructor avenger llamado!!!')
        }

        /*
        La diferencia entre private y protected es:
        Private: solo es posible acceder a estos atributos desde la propia clase
        Protected: solo es posible acceder a estos atributos desde la pripia clase y de las clases que lo extiendan 
        */

        protected getNombreCompleto() {
            return `${this.nombre} ${this.nombreReal} `
        }
    }

    //Inicializamos la clase xmen que extiende de avenger
    class xmen extends Avenger {

        //Aqui decidimos un poco el orden de los parámetros
        constructor(
            nombre: string,
            nombreReal: string,
            public isMutant: boolean,
        ) {
            super(nombre, nombreReal); //Se tiene que ser la primera linea siempre
            console.log('Constructor xmen llamado!!!')
        }

        //Getter para el nombre completo
        get nombreCompleto(): string {
            return `${this.nombre} - ${this.nombreReal}`
        }

        //Setter para el nombre del xmen
        set nombreCompleto(nuevoNombre: string) {

            if (nuevoNombre.length < 3) {
                throw new Error('El mensaje tiene que ser mayor de 3 letras')
            }

            this.nombre = nuevoNombre;
        }

        getNombreCompletoDesdeXmen(): void {
            console.log(super.getNombreCompleto())
        }
    }

    /*
    Cuando ejectuamos esta linea podemos ver que se ha llamado el constructor de la clase avenger,
    esto es debido a que la clase xmen no tiene constructor y TypeScript nos ha pillado el del avenger por defecto.
    */
    // const wolverine = new xmen('Wolverine', 'Logan', true);

    //En typescript
    // console.log(wolverine.nombreCompleto); comentado para que no suene
    // wolverine.nombreCompleto = 'igi'; //Le cambiamos el nombre a nuestro objeto
    // console.log(wolverine.nombreCompleto); comentado para que no suene
    //wolverine.getNombreCompletoDesdeXmen();

})()
