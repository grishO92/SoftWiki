import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { logout as apiLogout } from './api/data.js'
import { getUserData } from './utillitiy.js'
import { catalogPage } from './views/catalog.js';
import { loginPage, registerPage } from './views/auth.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { searchPage } from './views/search.js';

const main = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', logout);

setUserNav();

page('/', decorateCtx, homePage);
page('/login', decorateCtx, loginPage);
page('/register', decorateCtx, registerPage);
page('/catalog', decorateCtx, catalogPage);
page('/create', decorateCtx, createPage);
page('/details/:id', decorateCtx, detailsPage);
page('/edit/:id', decorateCtx, editPage);
page('/search', decorateCtx, searchPage);

page.start();

function decorateCtx(ctx, next) {
    ctx.render = (template) => render(template, main);
    ctx.setUserNav = setUserNav();
    ctx.user = getUserData();

    next();
}

function setUserNav() {
    const user = getUserData();
    if (user) {
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}

function logout() {
    apiLogout();
    setUserNav();
    page.redirect('/');
}