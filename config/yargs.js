const descripcion = {
    demand : true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado: {
            dedault: 'true',
            alias: 'c',
            desc: 'Marca como completada o pendiente la tarea'
        }
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}