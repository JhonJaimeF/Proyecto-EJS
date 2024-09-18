const fs = require('fs');

// Cargar el archivo JSON
const data = fs.readFileSync('./departments.json', 'utf-8');
const jsonData = JSON.parse(data);

// Mapeando los datos
const department = jsonData.map(item => {
  return {
    code: item.code,
    name: item.name 
  };
});

module.exports = department