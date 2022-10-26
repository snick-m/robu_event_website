const express = require("express");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const dotenv = require("dotenv");
const apiRouter = require("./api.routes.cjs");

// START POST IMPORT

dotenv.config({
    path: path.join(path.resolve(), '/.env')
});

// import { default as process.env } from "./process.env.js";

const app = express();

const DEV_MODE = process.env.DEV_MODE;
const PORT = DEV_MODE ? process.env.PORT : 80;

app.use(session({
    secret: `${process.env.COOKIE_SECRET}`,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    },
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(path.resolve(), 'dist')));

app.use(cors());

app.use('/api', apiRouter);

if (!DEV_MODE) {
    // console.error("Running in production mode");
    // app.use('/robu_event_demo/', (req, res) => {
    //     console.error(req.path);
    // });
    app.use('/', express.static(path.join(path.resolve(), 'dist')));
    // app.use('/robu_event_demo', (req, res) => {
    //     res.send("Success")
    // });
    // app.use('/', (req, res) => {
    //     res.sendFile(path.resolve(path.resolve(), 'dist/index.html'));
    // });
}
// app.use('*', (req, res) => {
//     res.sendFile(path.resolve(path.resolve(), 'dist/index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server is up at port http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error(err);
});

// END POST IMPORT

module.exports = app;