async function logJSONData() {

    const response = await fetch("https://dog-api.kinduff.com/api/facts?number=5"); // 5 is just the number of facts it'll fetch

    const jsonData = await response.json();

    console.log(jsonData);

  }

  logJSONData(); // calling the function 