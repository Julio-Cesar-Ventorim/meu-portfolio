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
       
const btn = document.querySelectorAll('.botao');

btn.forEach(function(botao) {
    botao.addEventListener("click", event => {
        event.preventDefault()
        const secaoId = botao.dataset.secaoid
        const secao = document.getElementById(secaoId)
        secao.scrollIntoView({behavior: "smooth"})
    })
});
