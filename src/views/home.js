import { html } from '../../node_modules/lit-html/lit-html.js'
import { getRecentArticles } from '../api/data.js';
import { recentArticle } from "./common/article.js"


const homeTemplate = (articles) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    <section class="recent js">
        <h2>JavaScript</h2>
        ${articles.map(recentArticle)[0] || html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent csharp">
        <h2>C#</h2>
        ${articles.map(recentArticle)[1] || html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent java">
        <h2>Java</h2>
        ${articles.map(recentArticle)[2] || html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
    <section class="recent python">
        <h2>Python</h2>
        ${articles.map(recentArticle)[3] || html`<h3 class="no-articles">No articles yet</h3>`}
    </section>`;

export async function homePage(ctx) {
    const articles = await getRecentArticles();

    ctx.render(homeTemplate(articles));
}