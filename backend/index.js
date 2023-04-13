// ./src/index.js
// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const axios = require('axios');

// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
  
    try{
      const r = await axios.post(
          'https://api.chatengine.io/users/',
          {username: username, secret: username, first_name: username, last_name: username},
          {headers: {"private-key": "6368d53f-c7c0-466e-9560-5c0d706c8e3d" }}
      )
      return res.status(r.status).json(r.data)
    } catch (e) {
        console.log (e)
        return res.status(e.response.status).json(e.response.data)
    }
  });

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});