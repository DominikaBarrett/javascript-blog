
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
    const optArticleAuthorSelector = '.post-author'

  function generateTitleLinks(customSelector = '') {

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
    const articleTagsArray = articleTags.split(' ');

    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {

      /* generate HTML of the link */
      const link = document.querySelectorAll('a');
      document.getElementsByTagName('a')

      /* add generated code to html variable */
      html = html + linkHTML;
    /* END LOOP: for each tag */
  }
    /* insert HTML of all the links into the tags wrapper */
  titleList.innerHTML = html;
    /* END LOOP: for every article: */
  }

  generateTags();
}
function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');

  /* find all tag links with class active */
  const otherTags = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each active tag link */
  for (let Tag of otherTags) {
    /* remove class active */
    removeClassActive('a.active[href^="#tag-"]');

    /* END LOOP: for each active tag link */
  }
      /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');

  function addClickListenersToTags() {
  /* find all links to tags */
    const tagLinks = document.querySelectorAll('a[href^="#tag-"]');
  }
  /* START LOOP: for each link */
  for (let tagLink of tagLinks) {
    /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
  }
}

addClickListenersToTags();

function addClickListenersToTags() {
  /* find all links to tags */
  const tagLinks = document.querySelectorAll('a[href^="#tag-"]');
}
/* START LOOP: for each link */
for (let tagLink of tagLinks) {
  /* add tagClickHandler as event listener for that link */
  tagLink.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
}


function generateAuthors() { 
/* find all links to tags */
  function addClickListenersToAuthors() {
/* START LOOP: for each link */
    const AuthorsLinks = document.querySelectorAll('a[href^="#-"]');
  }
    for (let AuthorLink of AuthorsLinks) {
            AuthorsLink.addEventListener('click', AuthorsClickHandler);
      
    }
  }
  function AuthorsClickHandler(event) {
   
      /* prevent default action for this event */
      event.preventDefault();

      /* make new constant named "clickedElement" and give it the value of "this" */
      const clickedElement = this;
      /* make a new constant "href" and read the attribute "href" of the clicked element */
      const href = clickedElement.getAttribute('href');
      /* make a new constant "tag" and extract tag from the "href" constant */
      const author = href.replace('#author-', '');

      /* find all tag links with class active */
      const otherAuthors = document.querySelectorAll('a[href="' + href + '"]');

      /* START LOOP: for each active tag link */
      for (let otherAuthor of otherAuthors) {
        /* remove class active */
        removeClassActive('a.active[href^="#author-"]');

        /* END LOOP: for each active tag link */
      }
      /* execute function "generateTitleLinks" with article selector as argument */
      generateAuthorsLinks('[data-author="' + author + '"]');

      function addClickListenersToAuthors() {
        /* find all links to tags */
        const AuthorLinks = document.querySelectorAll('a[href^="#author-"]');
      }
      /* START LOOP: for each link */
      for (let AuthorLink of AuthorLinks) {
        /* add tagClickHandler as event listener for that link */
        authorLink.addEventListener('click', authorClickHandler);
        /* END LOOP: for each link */
      }
    }

    addClickListenersToAuthors();
  