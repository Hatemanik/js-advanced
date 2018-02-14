var xhr= new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/photos',true);
xhr.timeout=15000;

console.log(xhr);