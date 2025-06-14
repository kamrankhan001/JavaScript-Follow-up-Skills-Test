/**
 * mergeComments.js
 * 
 * This script grabs post ID 50 from the JSONPlaceholder API, pulls in all the related comments, and then 
 * combines those comments into the post object under a new key called `comments`. Finally, it logs the 
 * result to the console.
 * 
 * @author Kamran
 * @link https://jsonplaceholder.typicode.com/posts/50
 * @link https://jsonplaceholder.typicode.com/posts/50/comments
 */


const axios = require('axios');

// Fetch post ID 50 and its comments, then merge and log the result.
async function mergePostWithComments() {
  const postUrl = 'https://jsonplaceholder.typicode.com/posts/50';
  const commentsUrl = 'https://jsonplaceholder.typicode.com/posts/50/comments';

  try {
    // Fetch post and comments in parallel
    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(postUrl),
      axios.get(commentsUrl),
    ]);

    const post = postResponse.data;
    const comments = commentsResponse.data;

    // Merge comments into the post object
    post.comments = comments;

    console.log("Merged Post with Comments:");
    console.log(post);

  } catch (error) {
    console.error("Error fetching post or comments:", error.message);
  }
}

// Execute the function
mergePostWithComments();
