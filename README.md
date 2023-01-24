Steps to Full Stack MERN (Ciso's Way)
Server File, Server Directories and Dependencies
In your terminal, navigate to the directory for your project.
Create your project directory and cd into it.
Create your server directory and cd into it.
Create your server.js file.
Create your package.json with npm init -y.
Install your server dependencies.
express
mongoose
cors
optional: dotenv, colors
optional: nodemon as a dev dependency
Create the config, controllers, models, and routes directories.
Express Server Setup
In your server.js file, import express and initialize your express app.
Use cors and express.json as middleware for your app.
Invoke the listen() method on your express app with your chosen port number.
Run the server.js file with nodemon and ensure it's up and running on the right port.
Configure Mongoose Connection
Create your config file in your config directory.
In your config file, import mongoose.
Create your connectDb function. I usually just copy and paste this file from a previous project. The only thing that changes is the name of your database.
Don't forget to export the function.
In your server.js file, import your connectDb function after your middleware.
Invoke your connectDb function.
Your server should restart. Make sure it's connected, and that it's the correct database.
Mongoose Model
Create your model file in the models directory.
In your model file, import mongoose and create your schema.
Register your schema as a mongoose model and export it.
Controller CRUD Functions
Create your controller file in the controllers directory.
In your controller file, import your model.
Create your CRUD functions:
get all
get one
insert
update
delete
Export your CRUD functions.
API Endpoints
Create your routes file in the routes directory.
In your routes file, import express.
Create your router with express.Router().
Import your CRUD functions from your controller file.
Use the route() method on your router to map your routes to the appropriate CRUD functions. I like to stack these.
Routes:
'/' - This route maps to two methods: .get for your get all CRUD function and .post for your create CRUD function.
'/:id' - This route maps to three methods: .get for your get one, .put for your update, and .delete for your delete CRUD functions.
Export your router.
Test Your API Endpoints
In your server.js file, import your router after the mongoose connection.
Configure your app to use the router for your parent API route. Something like: app.use('/api/records', recordRouter);
Open Postman or Thunder Client and test each endpoint. Troubleshoot if necessary.
Create Your React App
Change directories to your project directory. Create your react app and call it "client." Make sure you're in the right directory when you do this! The client directory should be a sibling of your server directory.
Navigate into your client directory with cd client.
Install your React dependencies:
axios
react-router-dom
Start your React app with npm start.
In your index.js file, import the BrowserRouter component with import { BrowserRouter } from 'react-router-dom'.
Wrap your <App /> in a <BrowserRouter></BrowserRouter> component.
Next Steps
From here, it's largely up to you! Just remember that you should have either your console or your React DevTools open while you're building the front-end. This is the way I generally like to do things in React:

I prefer to create my pages (views) and components as simple skeletal function components that just have a fieldset and legend, or an H1 that just shows the name of the component.

From there, I go to my App.jsx file and create and test each React route. I'm a big fan of nesting child routes inside of one parent route. If you do this, don't forget to place an Outlet component in the parent!

Next, I like to set up my form component and make sure I can create a document in the database. You can check your "get all" API route in Postman to see if it was created.

Once I get that working, I go to the "list all" component and get that map function working to show all the objects in the database. Your useEffect should have a dependency array. What variable should go into it?

Read one comes next. I wrap the object names or titles in the "list all" component in a Link and make sure the links are generating correctly in my browser by hovering over each link and checking them.

If the links are working correctly, I move on to the "get one" component and get that working. Pull the id out of the route with useParams and make the appropriate axios call to your API. This useEffect should also have a dependency array. What variable should go into it?

Next up is update. You need to grab the correct object out of the database to edit. Use a similar approach as the "get one" component. Reuse your form component if you like. The form should pre-populate with the object's fields.

Finally, we implement the delete functionality. Build your buttons in the "list all" component. The button should have an onClick that calls a function using the correct id. That function should then place an API call to your delete endpoint. If you need to remove the object from the DOM, refer to the platform for that code.

Take everything for a test drive, add any static text you may need.

That's it! Well done! You rock!!
