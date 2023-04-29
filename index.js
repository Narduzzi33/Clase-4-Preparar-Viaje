
const preparativos = [
    { requisito: "pasaporte al dia", valor: true },
    { requisito: "reservas de hotel", valor: false },
    { requisito: "transporte confirmado", valor: true },
    { requisito: "seguro de viaje", valor: true },
    { requisito: "cambio de moneda", valor: false },
]

//Ejercicio 2
function listoParaViajar(preparativos) {
    //fitramos los no listos
    const faltantes = preparativos.filter((preparativo) => !preparativo.valor);
    if (faltantes.length === 0) {
        return "Estás listo para viajar!";
    } else {
        //A faltantes le pasamos un map que va a serpara el requisito unicamente y lo unimos con un join para imprimirlo
        const requisitosFaltantes = faltantes.map((preparativo) => preparativo.requisito).join(", ");
        return `Te faltan los siguientes requisitos: ${requisitosFaltantes}.`;
    }
}

console.log(listoParaViajar(preparativos));


//Ejercicio 3
let aAgregar = { requisito: "vacunas Necesarias", valor: true }
preparativos.push(aAgregar);
console.log(preparativos)

//Ejercicio 4
//El findIndex actual como el filter, solo que trae el index del elemento
const index = preparativos.findIndex(objeto => objeto.requisito === "seguro de viaje");
preparativos.splice(index, 1);
console.log(preparativos)


//Ejercicio 5
const objetoACambiar = preparativos.find(objeto => objeto.requisito === "transporte confirmado"); 3
objetoACambiar.valor = false;
console.log(preparativos)

//Ejercicio 6
console.log(listoParaViajar(preparativos));

//Ejercicio7

// Simulamos una api, le agregamos un promise y setTimeOut
const obtenerPreparativosDesdeAPI =
    new Promise((resolve) => {
        setTimeout(() => {
            const preparativos = [
                { requisito: 'pasaporte al dia', valor: true },
                { requisito: 'reservas de hotel', valor: true },
                { requisito: 'transporte confirmado', valor: false },
                { requisito: 'seguro de viaje', valor: true },
                { requisito: 'cambio de moneda', valor: true },
            ];
            resolve(preparativos);
        }, 3000);
    });

//En la funcion tambien agregamos una promesa y un setTimeOut
function listoParaViajarPromise(preparativos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const requisitosFaltantes = preparativos.filter((prep) => !prep.valor).map((prep) => prep.requisito);
            if (requisitosFaltantes.length === 0) {
                resolve('¡Estamos listos para viajar!');
            } else {
                reject(`Aún faltan los siguientes requisitos: ${requisitosFaltantes.join(', ')}`);
            }
        }, 3000);
    });
}


//llammos a la promesa 1 le pasamos los preparativos para llamar a la otra promesa.
obtenerPreparativosDesdeAPI
.then((preparativos) => {
    listoParaViajarPromise(preparativos)
        .then((mensaje) => console.log(mensaje))
        .catch((error) => console.error(error));
});
