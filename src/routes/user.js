// CRUD routes for users

'use strict';

const express = require('express');
const { userInterface } = require('../models');

const router = express.Router();

// POST user
router.post('/user', async (req, res, next) => {
  let user = req.body;

  let response = await userInterface.create(user);
  res.status(200).send(response);
});

// GET one user
router.get('/user/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneUser = await animalsInterface.readOne(id);
  res.status(200).send(oneUser);
});