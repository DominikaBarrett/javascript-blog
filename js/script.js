// document.getElementById('test-button').addEventListener('click', function(){
//   const links = document.querySelectorAll('.titles a');
//   console.log('links:', links);
// });
const titleClickHandler = function(event){
  event.preventDefault();
  clickedElement.
  // ????? nie wiemjak to zapisac
  console.log('Link was clicked!');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}


 /*remove class 'active' from all article links*/
const activeArticles = document.querySelectorAll('.posts');

    for(let activeArticle of activeArticles) {
        activeLink.classList.remove('active');
    }

/* add class 'active' to the clicked link */

 for (let clickedElement of clickedElements){
  clickedElement.classList.add('active');

 }
/* remove class 'active' from all articles */
const activeArticles = document.querySelectorAll('.post titles .active');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}

/* get 'href' attribute from the clicked link */
const clickedElement = document.querySelectorAll('href');
console.log(articleSelector);

/* find the correct article using the selector (value of 'href' attribute) */
 const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

  /* add class 'active' to the correct article */

    targetArticle.classList.add('active');


const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
