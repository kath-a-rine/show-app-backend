'use strict';

const express = require('express');
const { userInterface } = require('../models');
const bcrypt = require('bcrypt');
let basicAuth = require('../middleware/basicAuth')
// let auth = require('basic-auth');
// let user = auth(req)
const router = express.Router();


router.post('/signup', async (req, res) => {

  try {
    let { email, password } = req.body;
    let encryptedPassword = await bcrypt.hash(password, 10);
    const record = await userInterface.create({
      email,
      password: encryptedPassword,
    });
    console.log(encryptedPassword);
    res.status(201).json(record);
  } catch (e) {
    res.status(403).send('Error Creating User');
  }
});

router.post('/signin', basicAuth, (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(403).send('Invalid Login');
  }
});

module.exports = router;