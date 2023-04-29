
const preparativos = [
    {requisito: "pasaporte al dia", valor: true},
    {requisito: "reservas de hotel", valor: false},
    {requisito: "transporte confirmado", valor: true},
    {requisito: "seguro de viaje", valor: true},
    {requisito: "cambio de moneda", valor: false},
]

function listoParaViajar(preparativos) {
    const faltantes = preparativos.filter((preparativo) => !preparativo.valor);
    if (faltantes.length === 0) {
      return "Estás listo para viajar!";
    } else {
      const requisitosFaltantes = faltantes.map((preparativo) => preparativo.requisito).join(", ");
      return `Te faltan los siguientes requisitos: ${requisitosFaltantes}.`;
    }
  }
  
  console.log(listoParaViajar(preparativos));

let aAgregar = {requisito: "vacunas Necesarias", valor: true}
preparativos.push(aAgregar);
console.log(preparativos)
