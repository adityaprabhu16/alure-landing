# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### MY NOTES:
 - Shortcut for creating react template boilerplate code:
 - rafce
 - unsplash.com for royalty free images (copy image address directly.)
 - TODO: Fix the max-min widths for some media queries, especially within Home page route for the <Work /> component.
 - TODO (04/22/2025): Fix the word "Japanese Beetles" so that it has a color gradient".

- General rules for ensuring images resize correctly: 
- 
.blog-content img {
    max-width: 100%; /* Ensures image never exceeds container width */
    height: auto; /* Maintains aspect ratio */
    display: block; /* Removes extra space below image */
    margin: 20px auto; /* Centers image and adds vertical spacing */
    border-radius: 8px; /* Optional: adds rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: adds subtle shadow */
}

- .htaccess file: 
 - Allows client side navigation within the SPA. 
 - It's a server side configuration that works seamlessly with client side routing to avoid 404 errors. 
 - Basically tells the server when to route to a specific page. Since we're using a SPA framework, the server can't exactly following the routes because the folder does not have a defined directory structure. Instead, we allow React Router to handle this navigation for us in the event the server can't navigate to a specific page (e.g. /contact).

Pre Deployment Checks:
 - npm run lint  (check for any errors)
 - npm run tests  (if any tests)
 - Push changes and check on Qa environment (Netlify)
 - If everything looks good:
    - npm run build
    - zip the build directory contents
    - Upload to Hostinger file system
    - Unzip the file