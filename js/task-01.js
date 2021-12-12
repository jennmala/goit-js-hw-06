const categoriesEl = document.querySelector('ul#categories');
console.log('Number of categories:', categoriesEl.children.length);

for (let index = 0; index < categoriesEl.children.length; index += 1) {
    console.log('Category:', categoriesEl.querySelectorAll('.item > h2')[index].textContent);
    console.log('Elements:', categoriesEl.querySelectorAll('.item > ul')[index].children.length);
}

