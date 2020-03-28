
"use strict";

const optArticleSelector = '.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';
const optArticleAuthorSelector = '.post-author';
const optTagsListSelector = '.tags.list';
const optCloudClassCount = 5;
const optCloudClassPrefix = 'tag-size-';







const titleClickHandler = function(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('clicked !!!!', event);
  
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
    console.log('Active Link', activeLink);
  }
  

  /* add class 'active' to the clicked link */
  clickedElement.classList.add('active');

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
    console.log('active article', activeArticle);
  }
  
  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log('clicked', articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(optArticleSelector + articleSelector);
  console.log('target Article', targetArticle);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
  console.log('target article', targetArticle);

};



function generateTitleLinks(customSelector = ' ') {

  /*remove contents of titleList*/
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';


  /*for each article*/
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  let html = '';
  for (let article of articles) {
    console.log('article', article);

    /*get the article id*/
    const articleId = article.getAttribute('id');
    console.log('article id', articleId);

    /*find the title element*/
    // const articleElement = article.querySelector(optTitleSelector);

    /*get the title from the title element*/
    // const articleTitle = articleElement.innerHTML;
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;


    /*create HTML of the link*/
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    /* insert link into html variable */
    html = html + linkHTML;

  }

  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
    console.log('link', link);
  }

}


generateTitleLinks();

function calculateTagsParams(tags) {
  const params = { min: 999999, max: 0 };

  for (let tag in tags) {
    console.log(tag + ' is used ' + tags[tag] + ' times');
    console.log('params', params);

    if (tags[tag] > params.max) {
      params.max = tags[tag];
    }
    if (tags[tag] < params.min) {
      params.min = tags[tag];
    }
  }
  return params;
}

function calculateTagClass(count, params) {
  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor(percentage * (optCloudClassCount - 1) + 1);

  return optCloudClassPrefix + classNumber;
}

function generateTags() {
  /* [NEW] create a new variable allTags with an empty array */
  let allTags = {};


  //* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('articles', articles);

  //* START LOOP: for every article: */
  for (let article of articles) {
    console.log('article', article);

    //* find tags wrapper */
    const TagList = article.querySelector(optArticleTagsSelector);
    TagList.innerHTML = '';
    console.log('tag list', TagList);

    //* make html variable with empty string */
    let html = '';
    
    //* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log('get tags',articleTags);

    //* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log('articleTagsArray', articleTagsArray);

    //* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      console.log('tag', tag);

      //* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      console.log('linkHTML', linkHTML);
      

      //* add generated code to html variable */
      html = html + linkHTML + ' ';
  

      //* [NEW] check if this link is NOT already in allTags */
      if (!allTags[tag]) {
        /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
        console.log('all tags', allTags);
      }
    
    /* END LOOP: for each tag */
    }
    //* insert HTML of all the links into the tags wrapper */

    TagList.innerHTML = html;
    console.log('tag list', TagList);

    //* END LOOP: for every article: */
  }
  //* [NEW] find list of tags in right column */
  const tagiList = document.querySelector(optTagsListSelector);
  console.log('tagi List', tagiList);


  //* [NEW] create variable for all links HTML code */
  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams:', tagsParams);
  let allTagsHTML = '';

  /* [NEW] START LOOP: for each tag in allTags: */
  for (let tag in allTags) {

    /* [NEW] generate code of a link and add it to allTagsHTML */
    allTagsHTML += '<li><a class ="' + calculateTagClass(allTags[tag], tagsParams) + '" href="#tag-' + tag + '">' + tag + ' ' + '(' + allTags[tag] + ')' + '</a></li>';
  
    console.log('all Tags:', allTagsHTML);

    /* [NEW] END LOOP: for each tag in allTags: */
  }
  /*[NEW] add HTML from allTagsHTML to tagList */
  tagiList.innerHTML = allTagsHTML;
}

generateTags();




function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  // /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('clickedelement', clickedElement);

  //* make a new constant "tag" and extract tag from the "href" constant * /
  const tag = href.replace('#tag-', '');
  console.log('tag', tag);

  /* find all tag links with class active */
  const otherTags = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log('other tags', otherTags);

  /* START LOOP: for each active tag link */
  for (let otherTag of otherTags) {

    /* remove class active */
    otherTag.classList.remove('active');

    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  clickedElement.classList.add('active');

  //* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
  
}


function addClickListenersToTags() {
  /* find all links to tags */
  const tagLinks = document.querySelectorAll('a[href^="#tag-"]');
  console.log('tagLinks', tagLinks);
  
  /* START LOOP: for each link */
  for (let tag of tagLinks) {

    //* add tagClickHandler as event listener for that link *//
    tag.addEventListener('click', tagClickHandler);
    console.log('tag', tag);
  
    //* END LOOP: for each link *//
  }
}

addClickListenersToTags();

function generateAuthors() {
  /* [NEW] create a new variable allAuthors with an empty array */
  let allAuthors = {};
  console.log('all authors', allAuthors);


  //* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('articles', articles);

  //* START LOOP: for every article: */
  for (let article of articles) {
    console.log('article', article);

    //* find authors wrapper */
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    console.log('author wrapper', authorWrapper);

    // //* make html variable with empty string */
    let html = '';

    // //* get author from data-author attribute */
    const articleAuthor = article.getAttribute('data-author');
    console.log('get data author', articleAuthor);

    // //* generate HTML of the link */
    const linkHTML = '<li><a href="#author-' + articleAuthor + '">' + articleAuthor + '</a></li>';
    authorWrapper.innerHTML = linkHTML;

    console.log('linkHTML', linkHTML);

    //* add generated code to html variable */
    html = html + linkHTML;
    console.log('html', html);
    

    //* [NEW] check if this link is NOT already in allAuthors */
    if (!allAuthors[articleAuthor]) {
      allAuthors[articleAuthor] = 1;
    } else {
      allAuthors[articleAuthor]++;
     
    }
    console.log('all authors', allAuthors);
  }

  //* [NEW] find list of authors in right column */
  const authorWrapper = document.querySelector('.authors');
  console.log('author wrapper', authorWrapper);
  

  // //* [NEW] create variable for all links HTML code */
  const tagsParams = calculateTagsParams(allAuthors);
  console.log('tagsParams:', tagsParams);
  let allAuthorsHTML = '';

  /* [NEW] START LOOP: for each author in allAuthors: */
  for (let author in allAuthors) {

    /* [NEW] generate code of a link and add it to allTagsHTML */
    allAuthorsHTML += '<li><a class ="' + calculateTagClass(allAuthors[author], tagsParams) + '" href="#author-' + author + '">' + author + ' ' + '(' + allAuthors[author] + ')' + '</a></li>';
  }
  
  console.log('all authors:', allAuthorsHTML);


  /*[NEW] add HTML from allAuthorsHTML to authorList */
  authorWrapper.innerHTML = allAuthorsHTML;
  console.log('author wrapper', authorWrapper);
}

generateAuthors();



function authorClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;

  const href = clickedElement.getAttribute('href');
  console.log('clickedelement', clickedElement);


  const author = href.replace('#author-', '');
  console.log('author', author);

  const activeLinks = document.querySelectorAll('a.active[href^="#author-"]');

  for (let activeLink of activeLinks) {

    activeLink.classList.remove('active');
  }

  const authorLinks = document.querySelectorAll('a[href="' + href + '"]');

  for (let authorLink of authorLinks) {
    authorLink.classList.add('active');
  }
  generateTitleLinks('[data-author="' + author + '"]');
}

function addClickListenersToAuthors() {

  /* find all links to  */
  const links = document.querySelectorAll('.post-author a');

  /* START LOOP: for each link */
  for (let link of links) {

    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', authorClickHandler);
    console.log('link', link);

    /* END LOOP: for each link */
  }
}
addClickListenersToAuthors();

function addClickListenersToAuthorsList() {
  /* find all links to authors */
  const authorLinks = document.querySelectorAll('a[href^="#author-"]');

  /* START LOOP: for each link */
  for (let authorLink of authorLinks) {

    /* add tagClickHandler as event listener for that link */
    authorLink.addEventListener('click', authorClickHandler);
    
    /* END LOOP: for each link */
  }
}
addClickListenersToAuthorsList();
