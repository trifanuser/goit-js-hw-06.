const categories = document.querySelectorAll('ul#categories > li.item');


console.log(`Number of categories: ${categories.length}`);


categories.forEach(category => {

  const categoryTitle = category.querySelector('h2').textContent;
  

  const categoryElements = category.querySelectorAll('ul > li').length;
  

  console.log(`\nCategory: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});