let finDeTransmisionDatos = function (id) {
    console.log('Transferencia', id, 'Terminada');
}

let obtenerDatosDeInternet = function (id, duracion) {
    console.log('Proceso', id, 'Obteniendo datos de Internet');
    setTimeout(finDeTransmisionDatos, duracion, id);
}

module.exports.getDatos = obtenerDatosDeInternet;