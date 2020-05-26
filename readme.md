1. Clone the repo
2. Ensure the server is running (go into our project directory and run: { nodemon server.js })
3. cd into load_db and run { npm install }
4. If you have haven't run load_server.js, do so now { node load_server.js }
5. Run { node add_to_server.js }
6. Test your db (create a new .js file, and shoot an axios get request to localhost:8000/api/businesses)
    a. add this as your .then block: .then(res => console.log(res.data.Businesses.length)) (This should return 2469)