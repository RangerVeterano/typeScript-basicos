
//* Creo el tipo personalizado de Coche, tiene 4 atributos obligatorios y una función opcional
type Coche = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros:number,
  disparar?: () => void //Hemos dicho que puede tener una funcion que no devuelve nada

}

console.log('Cum')

// Objetos //* los asignamos
const batimovil:Coche = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4
};

//* lo asignamos
const bumblebee:Coche = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar() { // El metodo disparar es opcional
    console.log("Disparando");
  }
};

//* creamos el tipo de villano donde tiene 3 atributos, de los cuales edad puede ser un numero o bien no estar definido
type Villano = {
  nombre:string,
  edad:(number | undefined),
  mutante:boolean
}

console.log('Cum pero más abajo')

// Villanos debe de ser un arreglo de objetos personalizados
//* Nos fijamos que nuestro objeto personalizado es un arrglero de varios villanosm
const villanos:Villano[] = [{
  nombre: "Lex Luthor",
  edad: 54,
  mutante: false
}, {
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
}, {
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

//* cremaos el objeto personalizado para charles
type C ={
  poder:string,
  estatura:number;
}

const charles:C = {
  poder: "psiquico",
  estatura: 1.78
};

//* creamos el objeto personalizado para apocalipsis
type A = {
  lider:boolean;
  miembros:string[];
}

const apocalipsis = {
  lider: true,
  miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
//* Indicamos que mystique puede ser C ó A
let mystique:(C|A);

mystique = charles;
mystique = apocalipsis;
