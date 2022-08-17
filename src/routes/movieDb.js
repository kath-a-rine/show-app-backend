// CRUD routes for The Movie Database API
// front end form passing title
// GET all shows
'use strict';

const express = require('express');
const axios = require('axios');
require('dotenv').config();

// showSchema: title, image, description, genre

const router = express.Router();

//  get all movies
router.get('/moviedb', async (req, res, next) => {
  // let title = req.query.title;
  let title = req.query.title;
  console.log(title);

  // let showObject = {
  //   title: name,
  //   image: `https://www.themoviedb.org/t/p/w440_and_h660_face` + `${showObject.poster_path}`,
  //   description: description,
  //   genre: genre,
  // }

  let allShows = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.MOVIE_API_KEY}&language=en-US&include_adult=false&total_results=20&query=${title}`);
  console.log(`allShows matching ${title}: `, allShows.data.results);
  res.status(200).send(allShows.data.results);
});

module.exports = router;