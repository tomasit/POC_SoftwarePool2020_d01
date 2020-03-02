#!/usr/bin/env node
/*
** EPITECH PROJECT, 2020
** hello_world
** File description:
** hello_world
*/

const express = require('express');

const app = express();

function startServer() {
  app.get('/hello', (req, res) => {
    res.send('world');
  });

  app.listen(8080);
}
startServer();
