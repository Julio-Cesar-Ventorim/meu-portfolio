/*
const articles = document.querySelectorAll(".divclass");


btn.forEach(function(clicarbtn) {
    clicarbtn.addEventListener("click", event => {
        articles.forEach(article => article.style.display = "none");
        const articleId = clicarbtn.dataset.articleid;
        document.getElementById(articleId).style.display = "block";
        console.log(event)
    });
});
*/
const pastas = document.querySelectorAll(".divclass");      
const btn = document.querySelectorAll('.botao');

btn.forEach(function(botao) {
    botao.addEventListener("click", event => {
        event.preventDefault()
        if(window.matchMedia("(min-width: 901px)").matches) {
            pastas.forEach(conteudo => conteudo.style.display = "none");
            const pastaId = botao.dataset.secaoid;
            if(pastaId === "home") {
                document.getElementById("homepc").style.display = "block";
            }
            document.getElementById(pastaId).style.display = "block";
            console.log(event)
        } else {
            const secaoId = botao.dataset.secaoid
            const secao = document.getElementById(secaoId)
            secao.scrollIntoView({behavior: "smooth"})
        }

    });
});
