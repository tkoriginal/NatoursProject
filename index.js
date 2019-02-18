const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const app = express();

  app.use(express.static('public'));
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('index'))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  // .listen(3000,() => console.log('Listening on Port 3000'))
