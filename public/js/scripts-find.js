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