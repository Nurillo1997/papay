//mongodb stringi securitysi uchun
const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const mongoose = require("mongoose");
<<<<<<< HEAD
mongoose.set('strictQuery', false);
=======
>>>>>>> 38d73c1df59e420741b9e8c9984746da15f0d988

// MongoDB connect

const connectionString = process.env.MONGO_URL;
mongoose.connect(connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, goose) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection succeed");
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = process.env.PORT || 3003;
            server.listen(PORT, function () {
                console.log(`The server is running successfuly on port ${PORT}, http://localhost:${PORT}`);
            });
        }
    }
);