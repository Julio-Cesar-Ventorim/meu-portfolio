const btn = document.querySelectorAll('.botao');
const articles = document.querySelectorAll("articleclass");


btn.forEach(function(btn){
    btn.addEventListener("click", event => {
        articles.forEach(article => article.style.display = "none");
        const articleId = btn.dataset.articleid;
        document.getElementById(articleId).style.display = "block";
        console.log(event)
    });
});
