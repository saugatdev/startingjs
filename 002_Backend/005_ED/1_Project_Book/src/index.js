import express from "express"; // Importing express module
import connection from "./models/index.js"; // Importing the database connection from the models
import bookRoute from "./routes/bookRoute.js";
import "dotenv/config";

const app = express(); // Creating an instance of express
app.use(express.json()); // Corrected usage
app.use(express.urlencoded({ extended: false })); // Corrected usage

// Setting up a simple route for the root URL
app.get("/", (req, res) => {
    res.send("Backend is Working"); // Sending a response to the client
});

app.use("/book", bookRoute); // Using the book route

// Starting the server on port 8000
app.listen(process.env.PORT, async () => {
    console.log(`Server Started on port ${process.env.PORT}`);

    try {
        await connection.authenticate(); // Authenticating the database connection
        await connection.sync();
        console.log("Connected to DB");
    } catch (err) {
        console.error("Error connecting to DB:", err); // Logging any error that occurs during connection
    }
});
