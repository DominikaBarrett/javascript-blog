
"use strict";

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('clicked');
  
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  

  /* add class 'active' to the clicked link */
  clickedElement.classList.add('active');

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  
  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}


    const optArticleSelector = '.post';
    const optTitleSelector = '.post-title';
    const optTitleListSelector = '.titles';
    const optArticleTagsSelector = '.post-tags .list';

    const generateTitleLinks = function () {

    /*remove contents of titleList*/
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';


    /*for each article*/
    const articles = document.querySelectorAll(optArticleSelector);
    let html = ''
    for (let article of articles) {
      /*get the article id*/
      const articleId = article.getAttribute('id');

      /*find the title element*/
      const articleElement = article.querySelector(optTitleSelector);
    
      /*get the title from the title element*/
      const articleTitle = articleElement.innerHTML;

      /*create HTML of the link*/
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);

      /* insert link into html variable */
      html = html + linkHTML;
    }

    titleList.innerHTML = html;
  }

generateTitleLinks();

function generateTags() {

/* find all articles */
  const articles = document.querySelectorAll('article');

/* START LOOP: for every article: */
  for (let article of articles) {
  
  /* find tags wrapper */
   
    const titleList = article.querySelector('.wrapper');
    titleList.innerHTML = '';
    
  /* make html variable with empty string */
    let html = '';

  /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');

  /* split tags into array */

  /* START LOOP: for each tag */

  /* generate HTML of the link */

  /* add generated code to html variable */

  /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();
