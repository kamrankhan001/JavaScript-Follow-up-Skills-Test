# JSONPlaceholder AJAX Tasks – Reasoning

## Why I Chose Axios (Instead of Fetch)

I went with **Axios** for my AJAX requests for a few key reasons:

1. **Easier Syntax**  
   Axios has a straightforward syntax and takes care of JSON conversion automatically, so you don’t have to call `response.json()` like you do with Fetch.

2. **Improved Error Handling**  
   Axios makes a clear distinction between HTTP errors and network errors, which is super helpful for debugging and showing the right error messages.

3. **Broader Browser Compatibility**  
   Axios works well with older browsers, while Fetch doesn’t support Internet Explorer.

4. **Cool Features Like Interceptors**  
   With Axios, you can intercept requests and responses, manage timeouts, and use cancel tokens, which would require a lot more setup with Fetch.

5. **Familiarity from Frameworks**  
   Having worked with **Vue.js** and **React.js**, where Axios is commonly used, I feel more at ease and efficient using it compared to Fetch.

## Additional Notes

- I opted for **async/await** syntax to enhance readability and maintain consistent error handling across tasks.
- All responses are logged to the console (or displayed on the page in Task 3) to confirm success.