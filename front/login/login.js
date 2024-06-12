async function handleSubmit(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let data = {email,senha};
    
    let response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })

    let result = await response.json();

    if (result.success) {
        alert("Bora")
        // direciona para pagina de login
        // window.location("../login/index.html")

    } else {
        alert("Nao deu");
    }
}