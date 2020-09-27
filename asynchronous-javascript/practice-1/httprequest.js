//Make a fake REST API request using XMLHttpRequest Object in JS.

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4) {
    console.log(request, request.responseText);
  }
});

request.open('GET','https://jsonplaceholder.typicode.com/comments');
request.send(); 