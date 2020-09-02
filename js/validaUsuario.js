function Login() {
    let user, pass;

    user = document.getElementById("user").value;
    pass = document.getElementById("password").value;

    let resposta = ValidaUsuario(user, pass);


    if (resposta.length > 0) {
        alert(`Acesso Liberado - Usuário: ${resposta[0].nome}!`);
        setTimeout(function() { window.location.href = "index.html", 3000 });
    } else {
        alert("Dados de Login Inválidos")
    }
}

function ValidaUsuario(user, pass) {

    let usuarios = [{ nome: "Caio Marques", user: "cmarques", pass: "1234" }, { nome: "Paulo Santos", user: "psantos", pass: "4321" }]

    return usuarios.filter(usuario => usuario.user == user && usuario.pass == pass);
}