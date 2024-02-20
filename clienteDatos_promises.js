const Servicio = require("./servicioDatos_promises");

async function procesoDatos() {
    try {
        await Servicio.getDatos(1, 3000);
        await Servicio.getDatos(2, 500);
        await Servicio.getDatos(3, 4000);
        await Servicio.getDatos(4, 700);
        await Servicio.getDatos(5, 3500);
    } catch (error) {
        console.error(error);
    }
}

procesoDatos().then(() => {
    console.log('Todos los datos han sido obtenidos exitosamente.');
})
.catch((error) => {
    console.error('Ocurrió un error adicional:', error);
});
