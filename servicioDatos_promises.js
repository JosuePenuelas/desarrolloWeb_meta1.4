let finDeTransmisionDatos = function (id) {
    console.log('Transferencia', id, 'Terminada');
}

let obtenerDatosDeInternet = function (id, duracion) {
    console.log('Proceso', id, 'Obteniendo datos de Internet');
    return new Promise(resolve => {
        setTimeout(() => {
            finDeTransmisionDatos(id);
            resolve();
        }, duracion);
    });
}

module.exports.getDatos = obtenerDatosDeInternet;