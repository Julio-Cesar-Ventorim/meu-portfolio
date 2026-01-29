const btn = document.querySelectorAll('.botao');
const articles = document.querySelectorAll(".divclass");


btn.forEach(function(clicarbtn) {
    clicarbtn.addEventListener("click", event => {
        articles.forEach(article => article.style.display = "none");
        const articleId = clicarbtn.dataset.articleid;
        document.getElementById(articleId).style.display = "block";
        console.log(event)
    });
});
