// document.getElementById('test-button').addEventListener('click', function(){
//   const links = document.querySelectorAll('.titles a');
//   console.log('links:', links);
// });
const titleClickHandler = function(event){
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }


  /* [IN PROGRESS] add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */
   const articleSelector = clickedElement.getAttribute('href');
   console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
      console.log(targetArticle);
  /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
  }

    const optArticleSelector ='.post';
    const optTitleSelector = '.post-title';
    const optTitleListSelector = '.titles';

    const generateTitleLinks = function() {

      /*remove contents of titleList*/
    const titleList = document.querySelector(optTitleListSelector);
      titleList.innerHTML = '';

      /*for each article*/
    const articles = document.querySelectorAll(optArticleSelector);

      for(let article of articles) {
          /*get the article id*/
     const articleId = article.getAttribute('id');

          /*find the title element*/
     const articleTitle = article.querySelector(optTitleSelector).innerHTML;

          /*get the title from the title element*/
     const articleTitle = article.querySelectorAll();

          /*create HTML of the link*/
     const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle +'</span></a></li>';
          console.log(linkHTML);

          /*insert link into titleList*/
          titleList.insertAdjacentHTML('beforeend',linkHTML);
      }

      const links = document.querySelectorAll('.titles a');

      for(let link of links) {
          link.addEventListener('click', titleClickHandler);
      }

    }

    generateTitleLinks();

  }
