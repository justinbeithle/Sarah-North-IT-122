async function logJSONData() {

    const response = await fetch("https://dog-api.kinduff.com/api/facts?number=10"); // 10 is just the number of facts it'll fetch

    const jsonData = await response.json(); // request is usually in JSON format

    console.log(jsonData);

  }

  logJSONData(); // calling the function 