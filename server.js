const path = require('path');
const express = require('express');
const cors = require('cors')
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const utils = require('./utils');

app.use(cors())


app.get('/search', (req, res) => {

  var contentName = req.query.contentName;

  console.log(contentName);

  const tmdb = require('tmdbv3').init('8c4f4c3b9d42e5d70e672109541f7759');

  tmdb.search.movie(contentName,1, (err ,tmdbRes) => {

    res.status(200).send(utils.filterSearchResultsForTitleOnly(tmdbRes.results,contentName));

    });
  
  });

  app.get('/ismovieexists', (req, res) => {

    var contentName = req.query.contentName;
  
    console.log(contentName);
  
    const tmdb = require('tmdbv3').init('8c4f4c3b9d42e5d70e672109541f7759');
  
    tmdb.search.movie(contentName,1, (err ,tmdbRes) => {
  

      res.status(200).send(utils.filterSearchResultsForTitleOnlyExact(tmdbRes.results,contentName));
  
      });
    
    });






app.listen(port, () => {
  console.log('Server is up!');
});
