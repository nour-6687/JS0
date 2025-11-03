const req = new XMLHttpRequest();
req.open("GET", "./threeArticles.json");

req.onload = function () {
  if (this.status === 200) {
    const mainData = JSON.parse(this.responseText);
    console.log("Original data:", this.responseText);

    // Add Section property
    mainData.forEach((article) => (article.Section = "All"));

    console.log("Updated data:", JSON.stringify(mainData));

    // Display articles
    const dataDiv = document.createElement("div");
    dataDiv.id = "data";

    dataDiv.innerHTML = mainData
      .map(
        (item) => `
      <div>
        <h2>${item.Title}</h2>
        <p>${item.Content}</p>
        <p>Author: ${item.Author}</p>
        <p>Category: ${item.Category}</p>
      </div>
    `,
      )
      .join("");

    document.body.append(dataDiv);
    console.log("Data Loaded");
  }
};

req.onerror = function () {
  console.error("Request failed");
};

req.send();
