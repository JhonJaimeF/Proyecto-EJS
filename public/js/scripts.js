const departmentSelect = document.getElementById('department');
const townsSelect = document.getElementById('towns');
const townsOptions = Array.from(townsSelect.options); // Guardar todas las opciones de ciudades

departmentSelect.addEventListener('change', function() {
  const selectedDepartment = this.value;

  console.log("Departamento seleccionado:", selectedDepartment);

  // Limpiar las opciones del select de ciudades
  townsSelect.innerHTML = '<option value="">Seleccione una ciudad</option>';

  // Filtrar las ciudades según el departamento seleccionado
  const filteredTowns = townsOptions.filter(option => {
    const departmentCode = option.getAttribute('data-department');
    return departmentCode === selectedDepartment || option.value === ''; // Incluye el placeholder
  });

  // Añadir las opciones filtradas al select de ciudades
  filteredTowns.forEach(option => townsSelect.appendChild(option));
});


document.querySelector('#btnSend').addEventListener('click', ()=>{

    const idArp= document.querySelector('#idAirplane').value;  
    const nameArp= document.querySelector('#nameAirplane').value;  
    const valueArp= document.querySelector('#valueAirplane').value;  
    
    const data= {id:idArp,name:nameArp,value:valueArp};
    
    
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