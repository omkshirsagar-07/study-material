//  apiUrl  : address where data is present
let apiUrl = "https://dummyjson.com/users";

// async : tells the browser it is asynchronous code , that execute at last

async function fetchDataFromServer(api) {

  //  await : it holds the execution of code until we didn't get the output.
  //   todo : wait till we didn't get the response
  let response = await fetch(api);

  //   todo : wait till response is not converted into data completely
  let data = await response.json();
  console.log(data);

  //   todo: iterate or print each user one by one
  data.users.map((user, index) => {
    console.log("user", index, " : ", user);
  });
}

fetchDataFromServer(apiUrl);
