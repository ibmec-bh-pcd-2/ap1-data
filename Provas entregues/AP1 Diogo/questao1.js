import linhasOnibusMetropolitanos from data.js;

const AddParada202 {id, parada} {
    for id = 202 {
    parada.some [
        nome: "Nova Parada";
        tipo: "terminal";
        coordenadas: { latitude: -49.919999, longitude: -53.944433 }]}}

const RemoveParada {
    for id = 200{
        parada - parada[0];
    }
}