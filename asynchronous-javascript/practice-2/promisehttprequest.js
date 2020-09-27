const getComments = (resource) => {
  //Make a fake REST API request using XMLHttpRequest Object in JS.

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getComments("resources/step1.json")
  .then((data) => {
    console.log("Promise 1 resolved", data);
    return getComments("resources/step2.json");
  })
  .then((data) => {
    console.log("Promise 2 resolved", data);
    return getComments("resources/step3.json");
  })
  .then((data) => {
    console.log("Promise 3 resolved", data);
  })
  .catch((error) => console.log("Promise rejected:", error));
