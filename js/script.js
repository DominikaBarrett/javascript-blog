
"use strict";


// document.getElementById('test-button').addEventListener('click', function(){
//   const links = document.querySelectorAll('.titles a');
//   console.log('links:', links);
// });


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list'


const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;


  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }


  /* add class 'active' to the clicked link */
  clickedElement.classList.add('active');
 

  /* remove class 'active' from all articles */
 const activeArticles = document.querySelectorAll('.posts .active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }


  /* get 'href' attribute from the clicked link */
const articleSelektor = clickedElement.getAttribute('href');


  /* find the correct article using the selector (value of 'href' attribute) */
const targetArticle = document.querySelector(articleSelektor);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
};


const links = document.querySelectorAll(".titles a");
console.log(links);

  for (let link of links) {
    link.addEventListener("click", titleClickHandler);
  }


  // const optArticleSelector = '.post',
  // optTitleSelector = '.post-title',
  // optTitleListSelector = '.titles',
  // optArticleTagsSelector = '.post-tags .list'

function generateTitleLinks(customSelector = '') {
  

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

      /* for each article */
      const articles = document.querySelectorAll(optArticleSelector + customSelector);

        /* get the article id */
      var html = "";

      for (let article of articles) {

        const articleId = article.getAttribute("id")
      }
        /* find the title element  and get the title from the title element */
        const articleTitle = articles.querySelectorAll(optTitleSelector).innerHTML;

          

      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);

      /* insert link into titleList */
      titleList.insertAdjacentHTML('beforeend', linkHTML);

      titleList.innerHTML = html;
      const links = document.querySelectorAll('.titles a');
      for (let link of links) {
        link.addEventListener('click', titleClickHandler);
      }
  }



generateTitleLinks();