import { html } from '../../../node_modules/lit-html/lit-html.js';


export const articleTemplate = (article) => html`
<a class="article-preview" href="/details/${article._id}">
    <article>
        <h3>Topic: <span>${article.title}</span></h3>
        <p>Category: <span>${article.category}</span></p>
    </article>
</a>`;

export const recentArticle = (recent) => html`
<article article>
    <h3>${recent.title}</h3>
    <p>${recent.content}</p>
    <a href="/details/${recent._id}" class="btn details-btn">Details</a>
</article>`;