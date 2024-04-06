const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router=require('./Router/router')
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1',router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
