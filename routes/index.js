const routes = require('express').Router();

const airplane = require('../data/airplane');
const towns = require('../data/towns');
const department = require('../data/department');


//towns.forEach(item => {
//    console.log(`Nombre: ${item.code}, Capacidad: ${item.department}`);
//});

//department.forEach(element => {
//    console.log(`code ${element.code} name ${element.name}`);
//});

routes.get('/', (req, res) => {
    return res.render('index',{'title':'Pagina Inicial','data':airplane})
});

/// NEW-RECORD
routes.get('/new-record', (req, res) => {
    return res.render('new-record', { 'title': 'Agregar Avion','department':department,'towns':towns});
});


routes.post("/new-record", (req, res) => {

    
    const { id, name, value,department,city} = req.body;
    console.log(`se recibiereon id = ${id} name = ${name}, departamento ${department}, ciudad ${city}`);

    const ids = Number(req.body.id);

    //TODO agrega al mapa
    airplane.set(ids, {id:id , name: name, nickname: value,department: department, city: city});

    //Se redirecciona a la ruta ("/"), para actualizar los registros
    console.log("Vamos a redireccionar");
    res.redirect('/');
});

/// DELETE-RECORD

routes.get('/delete-record', (req, res) => {
    return res.render('delete-record', { 'title': 'Eliminar Avion','data':airplane});
});

routes.post('/delete-record', (req, res) => {
    const { id } = req.body;
    const dele = Number(id);
    
    airplane.delete(dele);

    console.log('Redirigiendo a la página principal');
    res.redirect("/");
});






/// FIND-RECORD
routes.get('/find-record', (req, res) => {
    return res.render('find-record', { 'title': 'Ver Informacion','data':airplane});
});
module.exports = routes;
