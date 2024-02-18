const materias = [
    {clave: "36309", nombre: "Desarrollo de Aplicaciones Web"},
    {clave: "36297", nombre: "Ingeniería de Software"},
    {clave: "36300", nombre: "Formulación y Evaluación de Proyectos"},
    {clave: "36303", nombre: "Taller de Sistema Operativo Unix"},
    {clave: "36282", nombre: "Programación Orientada a Objetos"}
];


function generarCreditos() {
    return Math.floor(Math.random() * (9 - 4) + 4);
}

function generarCalificacion() {
    return Math.floor(Math.random() * 101);
}

function generarFecha() {
    const start = new Date('2021-01-01');
    const end = new Date('2023-06-30');
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generarRegistros(N, registros){
    for (let i=0; i<N; i++) {
        const materia = materias[Math.floor(Math.random() * materias.length)];
        registros.push({clave: materia.clave, creditos: generarCreditos(), nombre: materia.nombre, calificacion: generarCalificacion(), fecha: generarFecha()});
    }
}

N = process.argv[2];
registros = [];

try {
    if (isNaN(N) || N <= 0) {
        throw new Error("\nN debe ser un número entero mayor que cero.");
    }
    
    generarRegistros(N, registros);
    console.log("registros:");
    console.log(registros);

    const fechaLimite = new Date("2023-01-01");
    const filtro = registros.filter((registro) => (registro.calificacion < 50 && registro.fecha > fechaLimite));
    const map = filtro.map(filtro => ({
        clave: filtro.clave,
        calificacion: filtro.calificacion,
        fechaStr: `${filtro.fecha.getDate()}/${filtro.fecha.getMonth() + 1}/${filtro.fecha.getFullYear()}`
    }));
    console.log("\nResultados de la búsqueda con calificacion < 60 y fecha > 2023-01-01:");
    console.log(map);

} catch (error) {
    console.error(error.message);
}