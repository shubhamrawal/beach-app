const express = require("express");
const routes = require("./routes/index");

const app = express();
const port = process.env.PORT || 8080;

// require("./models/db");

app.use(express.json());

app.use("/", routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.8.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/7.8.0/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
