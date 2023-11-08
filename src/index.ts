let mensaje: string = "Hola Mundo";

mensaje = "Hola Mundo con TS";

console.log(mensaje);

mensaje = "chau mundo";


let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "Velociraptor";
let extintos = true;

function prueba(config: any) {
    console.log("Hola");
    return config
}

let animales: string[] = ["Leon", "Tigre", "Perro", "Gato"];
let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let checks: boolean[] = []
let numeros2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//numeros.map(animal => animal.) // auto completado suguiere metodos de tipo de datos

let tupla: [string[], number] = [['hola','mundo'], 1];

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extraGrande = 'xl'


// PascalCase

enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' };

const remera: Talla = Talla.Chica;
console.log(remera);

const enum LoadingState {Idle, Loading, Success, Error};

const estado: LoadingState = LoadingState.Idle;
console.log(estado);

// objeto
type Direccion = {
    calle: string,
    numero: number,
    pais: string
}

type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla
    direccion: Direccion  
}

const objeto: Persona = { 
    id: 1, 
    nombre: 'Juan', 
    talla: Talla.Chica,
    direccion:{
        calle: "carlos",
        numero: 123,
        pais: "Argentina"
    } 
};

const arr: Persona[] = [];




