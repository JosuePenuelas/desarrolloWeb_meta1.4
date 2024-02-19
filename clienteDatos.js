const Servicio = require("./servicioDatos");

Servicio.getDatos(1, 3000, function () {
    Servicio.getDatos(2, 500, function () {
        Servicio.getDatos(3, 4000, function () {
            Servicio.getDatos(4, 700, function () {
                Servicio.getDatos(5, 3500, function () {
                });
            });
        });
    });
});