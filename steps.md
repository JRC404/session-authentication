# What do to

```javascript

// in your terminal:
npm i express express-session

// in your index.js
const express = require('express');
const session = require('express-session');

const app = express();

const {
    PORT = 3000
} = process.env

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
   

```

## What have we done here? 
 
We have installed our express and express-session modules (link below)
Then we have required them inside of our index.js to allow us to use the modules
  
Then we initialise express with const app = express() to allow us to have a clear structure for our application. We will also be adding routes into the project later.

### tl;dr for part one?

1. npm i express express-session
2. require both modules inside of your index.js
3. const app = express();
4. app.listen on desired port. 