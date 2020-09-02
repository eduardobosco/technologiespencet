function validate() {

    const user = "pencet@pencet.com"
    const pass = "123"

    let inputUser = document.getElementById("email2").value
    let inputPass = document.getElementById("password2").value

    if (inputUser === "" || inputPass === "") {
        mensagem = "Este campo é obrigatório";
    } else if (inputUser == user && inputPass == pass) {
        alert("Acesso Liberado");
        setTimeout(function() { window.location.href = "index.html", 3000 });
    } else {
        mensagem = "Dados Invalidos";
    }
    alert(mensagem);
}