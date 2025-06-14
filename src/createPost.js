/**
 * createPost.js
 * 
 * This script utilizes Axios to send a POST request aimed at creating a new post 
 * with the JSONPlaceholder API. It also features a custom key called `excerpt`, 
 * which is derived from the `body`.
 * 
 * @author Kamran
 * @link https://jsonplaceholder.typicode.com/posts
 */

const axios = require('axios');

// Create a new post
async function createPost() {
  const postData = {
    userId: 1,
    title: "My First Post",
    body: "This is the content of the post used for testing JSONPlaceholder API.",
  };

  // Add excerpt
  postData.excerpt = postData.body.substring(0, 20);

  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
    console.log("Post created successfully:");
    console.log(response.data);
  } catch (error) {
    console.error("Error creating post:", error.message);
  }
}

// Call the function
createPost();
