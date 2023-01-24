# Steps to Full Stack MERN (Ciso's Way)

## Server File, Server Directories and Dependencies
1. In your terminal, navigate to the directory for your project.
2. Create your project directory and `cd` into it.
3. Create your server directory and `cd` into it.
4. Create your server.js file.
5. Create your package.json with `npm init -y`.
6. Install your server dependencies.
   1. express
   2. mongoose
   3. cors
   4. optional: dotenv, colors
   5. optional: nodemon as a dev dependency
7. Create the config, controllers, models, and routes directories.

## Express Server Setup
1. In your server.js file, import express and initialize your express app.
2. Use cors and express.json as middleware for your app.
3. Invoke the `listen()` method on your express app with your chosen port number.
4. Run the server.js file with nodemon and ensure it's up and running on the right port.

## Configure Mongoose Connection
1. Create your config file in your config directory.
2. In your config file, import mongoose.
3. Create your connectDb function. I usually just copy and paste this file from a previous project. The only thing that changes is the name of your database.
4. Don't forget to export the function.
5. In your server.js file, import your connectDb function after your middleware.
6. Invoke your connectDb function.
7. Your server should restart. Make sure it's connected, and that it's the correct database.

## Mongoose Model
1. Create your model file in the models directory.
2. In your model file, import mongoose and create your schema.
3. Register your schema as a mongoose model and export it.

## Controller CRUD Functions
1. Create your controller file in the controllers directory.
2. In your controller file, import your model.
3. Create your CRUD functions:
   1. get all
   2. get one
   3. insert
   4. update
   5. delete
4. Export your CRUD functions.

## API Endpoints
1. Create your routes file in the routes directory.
2. In your routes file, import express.
3. Create your router with `express.Router()`.
4. Import your CRUD functions from your controller file.
5. Use the `route()` method on your router to map your routes to the appropriate CRUD functions. I like to stack these.
6. Routes:
   1. `'/'` - This route maps to two methods: `.get` for your get all CRUD function and `.post` for your create CRUD function.
   2. `'/:id'` - This route maps to three methods: `.get` for your get one, `.put` for your update, and `.delete` for your delete CRUD functions.
7. Export your router.

## Test Your API Endpoints
1. In your server.js file, import your router after the mongoose connection.
2. Configure your app to use the router for your parent API route. Something like: `app.use('/api/records', recordRouter);`
3. Open Postman or Thunder Client and test each endpoint. Troubleshoot if necessary.

## Create Your React App
1. Change directories to your project directory. Create your react app and call it "client." Make sure you're in the right directory when you do this! The client directory should be a sibling of your server directory.
2. Navigate into your client directory with `cd client`.
3. Install your React dependencies:
   1. axios
   2. react-router-dom
4. Start your React app with `npm start`.
5. In your index.js file, import the BrowserRouter component with `import { BrowserRouter } from 'react-router-dom'`.
6. Wrap your `<App />` in a `<BrowserRouter></BrowserRouter>` component.

## Next Steps

**From here, it's largely up to you!** Just remember that you should have either your console or your React DevTools open while you're building the front-end. This is the way I generally like to do things in React:

1. I prefer to create my pages (views) and components as simple skeletal function components that just have a `fieldset` and `legend`, or an `H1` that just shows the name of the component.

2. From there, I go to my App.jsx file and create and test each React route. I'm a big fan of nesting child routes inside of one parent route. If you do this, don't forget to place an Outlet component in the parent!

3. Next, I like to set up my form component and make sure I can create a document in the database. You can check your "get all" API route in Postman to see if it was created.

4. Once I get that working, I go to the "list all" component and get that map function working to show all the objects in the database. Your `useEffect` should have a dependency array. What variable should go into it?

5. Read one comes next. I wrap the object names or titles in the "list all" component in a `Link` and make sure the links are generating correctly in my browser by hovering over each link and checking them.

6. If the links are working correctly, I move on to the "get one" component and get that working. Pull the id out of the route with `useParams` and make the appropriate axios call to your API. This `useEffect` should also have a dependency array. What variable should go into it?

7. Next up is update. You need to grab the correct object out of the database to edit. Use a similar approach as the "get one" component. Reuse your form component if you like. The form should pre-populate with the object's fields.

8. Finally, we implement the delete functionality. Build your buttons in the "list all" component. The button should have an `onClick` that calls a function using the correct id. That function should then place an API call to your delete endpoint. If you need to remove the object from the DOM, refer to the platform for that code.

9. Take everything for a test drive, add any static text you may need.

10. That's it! Well done! You rock!!