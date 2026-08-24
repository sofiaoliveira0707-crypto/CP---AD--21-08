function iniciarEstudo() {
    let nome = document.getElementById("nome").value;

    if (nome = "") {
        document.getElementById("mensagem").innerText =
            "Digite seu nome para começar!";
    } else {
        document.getElementById("mensagem").innerText =
            "Bem-vindo(a), " + nome + "! Vamos começar seu estudo bíblico.";
    }
}

function estudarLivro(livro) {
    alert("Você escolheu estudar o livro de " + livro + "!");
}