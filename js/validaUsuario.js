function Login() {
    let user, pass;

    user = document.getElementById("user").value;
    pass = document.getElementById("password").value;

    let resposta = ValidaUsuario(user, pass);


    if (resposta.length > 0) {
        alert(`Acesso Liberado - Usuário: ${resposta[0].nome}!`);
        setTimeout(function() { window.location.href = "index.html", 3000 });
        sessionStorage.setItem('resposta', 'valor');
    } else {
        alert("Dados de Login Inválidos")
    }
}

function ValidaUsuario(user, pass) {

    let usuarios = [{ nome: "Caio Marques", user: "cmarques", pass: "1234" }, { nome: "Paulo Santos", user: "psantos", pass: "4321" }]

    return usuarios.filter(usuario => usuario.user == user && usuario.pass == pass);
}

function setDisabled() {
    var data = sessionStorage.getItem('resposta');

    if (data != null) {
        document.getElementById("login-menu").style.display = "none";
        document.getElementById("logout-menu").style.display = "block";
    } else {
        document.getElementById("login-menu").style.display = "block";
        document.getElementById("logout-menu").style.display = "none";
    }


}

function sair() {
    sessionStorage.clear();
    document.getElementById("login-menu").style.display = "block";
    document.getElementById("logout-menu").style.display = "none";
}