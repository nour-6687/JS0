// Use fetch() instead of XMLHttpRequest - Modern, cleaner, and Promise-based
// Use async/await - More readable than callbacks
// Simplify DOM creation - Use innerHTML for cleaner code
// Better error handling - Catch potential errors
// Remove unnecessary setTimeout - It doesn't do anything useful here

// Modern approach using fetch and async/await
async function loadAndDisplayArticles() {
  try {
    // Fetch the JSON file
    const response = await fetch("./threeArticles.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse JSON data
    const mainData = await response.json();
    console.log("Original data:", mainData);

    // Add Section property to each article
    mainData.forEach((article) => {
      article.Section = "All";
    });

    console.log("Updated data:", mainData);
    console.log("JSON string:", JSON.stringify(mainData));

    // Create and display articles
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
  } catch (error) {
    console.error("Error loading articles:", error);
  }
}

// Call the function
loadAndDisplayArticles();
