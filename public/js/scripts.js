const departmentSelect = document.getElementById('department');
const townsSelect = document.getElementById('towns');
const townsOptions = Array.from(townsSelect.options); // Guardar todas las opciones de ciudades

departmentSelect.addEventListener('change', function() {
  const selectedDepartmentCode = this.value;

  console.log("Código de departamento seleccionado:", selectedDepartmentCode);

  // Limpiar las opciones del select de ciudades
  townsSelect.innerHTML = '<option value="">Seleccione una ciudad</option>';

  // Filtrar las ciudades según el código de departamento seleccionado
  const filteredTowns = townsOptions.filter(option => {
    const departmentAttribute = option.getAttribute('data-department');
    return departmentAttribute === selectedDepartmentCode || option.value === ''; // Incluye el placeholder
  });

  // Añadir las opciones filtradas al select de ciudades
  filteredTowns.forEach(option => townsSelect.appendChild(option));
});


document.querySelector('#btnSend').addEventListener('click', ()=>{

    const idArp= document.querySelector('#idAirplane').value;  
    const nameArp= document.querySelector('#nameAirplane').value;  
    const valueArp= document.querySelector('#valueAirplane').value;  
    const departmentArp= document.querySelector('#department').value;  
    const cityArp= document.querySelector('#towns').value;  
    
    const data= {id:idArp,name:nameArp,value:valueArp,department:departmentArp,city:cityArp};
    
    
    fetch('http://localhost:3000', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then( res => res.json())
    .then( res => fetch("http://localhost:3000"))
    .catch( err => console.log(err))
});