let finDeTransmisionDatos = function (id, callback) {
    console.log('Transferencia', id, 'Terminada');
    callback();
}

let obtenerDatosDeInternet = function (id, duracion, callback) {
    console.log('Proceso', id, 'Obteniendo datos de Internet');
    setTimeout(finDeTransmisionDatos, duracion, id, callback);
}

module.exports.getDatos = obtenerDatosDeInternet;