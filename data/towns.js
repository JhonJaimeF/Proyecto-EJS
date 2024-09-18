const fs = require('fs');

// Cargar el archivo JSON
const data = fs.readFileSync('./towns.json', 'utf-8');
const jsonData = JSON.parse(data);

// Mapeando los datos
const towns = jsonData.map(item => {
  return {
    code: item.code,
    department: item.department,
    name: item.name 
  };
});

module.exports = towns