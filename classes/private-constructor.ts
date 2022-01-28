(() => {

    //Esta clase es como un tecnica de programacion llamda singleton, que basicamente crea una instancia de una clase que es unica y cuando se llama aparace la misma clase todo el rato
    class Apocalipsis {

        static instancia: Apocalipsis

        private constructor(
            public nombre: string
        ) { }

        static llamarApocalipsis(): Apocalipsis {

            //el ! es para ver si la instancia existe
            if (!Apocalipsis.instancia) {
                Apocalipsis.instancia = new Apocalipsis('Soy apocalipsis el único')
            }

            return Apocalipsis.instancia
        }

        cambiarNombre(nv:string):void {
            this.nombre = nv
        }
    }

    const apocalipsis1 = Apocalipsis.llamarApocalipsis();
    const apocalipsis2 = Apocalipsis.llamarApocalipsis();
    const apocalipsis3 = Apocalipsis.llamarApocalipsis();

    apocalipsis1.cambiarNombre('Eres una mierda') 

    // const apocalipsis = new Apocalipsis('Esto no tiene nada de sentido');
    // console.log(apocalipsis1, apocalipsis2, apocalipsis3)

})()