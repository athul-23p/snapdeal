const app = require('./index');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const connect = require('./configs/db');

app.listen(PORT,async() => {
     try {
       console.log(`listening on port ${PORT}`);
       await connect();
       console.log('connectd to mongodb');
     } catch (err) {
       console.log(err);
     }
})