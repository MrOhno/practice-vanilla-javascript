const getComments = (callback) => {
  //Make a fake REST API request using XMLHttpRequest Object in JS.

  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("Could not fetch data", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/comments");
  request.send();
};

getComments((err, data) => {
  console.log("callback fired.");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
