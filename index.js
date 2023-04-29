
const preparativos = [
    {requisito: "pasaporte al dia", valor: true},
    {requisito: "reservas de hotel", valor: false},
    {requisito: "transporte confirmado", valor: true},
    {requisito: "seguro de viaje", valor: true},
    {requisito: "cambio de moneda", valor: false},
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
let aAgregar = {requisito: "vacunas Necesarias", valor: true}
preparativos.push(aAgregar);
console.log(preparativos)

//Ejercicio 4
//El findIndex actual como el filter, solo que trae el index del elemento
const index = preparativos.findIndex(objeto => objeto.requisito === "seguro de viaje");
preparativos.splice(index, 1);
console.log(preparativos)


//Ejercicio 5
const objetoACambiar = preparativos.find(objeto => objeto.requisito === "transporte confirmado");3
objetoACambiar.valor = false;
console.log(preparativos)

//Ejercicio 6
console.log(listoParaViajar(preparativos));