// Task one
// threeArticles.json file.

// Task two

const req = new XMLHttpRequest();
req.open("GET", "./threeArticles.json");
req.send();

req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log("success");
    // Task two
    console.log(this.responseText);
    setTimeout(() => {
      console.log("Data Loaded");
    }, 0);
    // Task three
    const mainData = JSON.parse(this.responseText);
    for (const iterator of mainData) {
      iterator.Section = "All";
      console.log(iterator);
    }
    const updatedData = JSON.stringify(mainData);
    console.log(updatedData);
    // Task four
    const dataDiv = document.createElement("div");
    dataDiv.id = "data";
    for (const iterator of mainData) {
      const subDiv = document.createElement("div");

      const head = document.createElement("h2");
      head.textContent = iterator.Title;
      subDiv.appendChild(head);

      const content = document.createElement("p");
      content.textContent = iterator.Content;
      subDiv.appendChild(content);

      const authorName = document.createElement("p");
      authorName.textContent = `Author: ${iterator.Author}`;
      subDiv.appendChild(authorName);

      const category = document.createElement("p");
      category.textContent = `Category: ${iterator.Category}`;
      subDiv.appendChild(category);

      dataDiv.appendChild(subDiv);
    }

    document.body.append(dataDiv);
  }
};
