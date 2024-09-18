document.querySelector('#btnDelete').addEventListener('click', ()=>{
    
    let selectValue = document.getElementsByName('airplane')[0].value;

    console.log('Valor seleccionado:', selectValue);
    
    const data= {id:selectValue};
    
    fetch('http://localhost:3000/delete-record', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then( res => {
        if (res.redirected) {
            window.location.href = res.url;
        }
    })
    .catch( err => console.log(err))
});