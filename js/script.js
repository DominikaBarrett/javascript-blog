
"use strict";


// document.getElementById('test-button').addEventListener('click', function(){
//   const links = document.querySelectorAll('.titles a');
//   console.log('links:', links);
// });

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');
  
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }


  /* add class 'active' to the clicked link */


  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.titles a.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }


  /* get 'href' attribute from the clicked link */

  const linkAttribute = clickedElement.getAttribute('href');


  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);


  /* add class 'active' to the correct article */
  for (let targetArticle of targetArticles) {
    targetArticle.classList.add('active');

  }
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}

{
  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';


  function generateTitleLinks(customSelector = ''){
  

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    /* get the article id */
    var html = "";

    for (let article of articles) {

      const articleId = article.getAttribute("id")

    /* find the title element  and get the title from the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      

      /* create HTML of the link */
      const linkHTMLData = { id: articleId, title: articleTitle };
      const linkHTML = articleLink(linkHTMLData);
      console.log(linkHTML);

      /* insert link into titleList */
      html = html + linkHTML;
    }

    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }

  generateTitleLinks();
}


// function generateTags() {
// /* find all articles */
//   const articles = document.querySelectorAll(optArticleSelector);

// /* START LOOP: for every article: */
// for (let article of articles) {

// /* find tags wrapper */
// const tagList = article.querySelector(optArticleTagsSelector);

// /* make html variable with empty string */
// let html = '';

// /* get tags from data-tags attribute */
// const articleTags = article.getAttribute("data-tags");

// /* split tags into array */
// const articleTagsArray = articleTags.split(' ');

// /* START LOOP: for each tag */
// for (let tag of articleTagsArray) {

// /* generate HTML of the link */
// const linkHTMLData = { id: tag, title: tag };
// const linkHTML = templates.tagLink(linkHTMLData);

// /* add generated code to html variable */
// html = html + linkHTML + ' ';

// /* END LOOP: for each tag */
// tagList.innerHTML = html;

//   /* insert HTML of all the links into the tags wrapper */

// /* END LOOP: for every article: */
//   for (let link of links) {
//     link.addEventListener('click', titleClickHandler);
// }

// generateTags()