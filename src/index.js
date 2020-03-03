#!/usr/bin/env node
/*
** EPITECH PROJECT, 2020
** hello_world
** File description:
** hello_world
*/

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
require('dotenv').config();

function startServer() {
  console.log('Ready');
  app.get('/hello', (req, res) => {
    res.send('world');
  });
  app.get('/repeat-my-fixed', (req, res) => {
    res.send('For better and for worst\n');
    res.status(200);
  });
  app.get('/repeat-my-query', (req, res) => {
    const { message } = req.query;
    if (message == null || message.lenght === 0) {
      res.status(400);
      res.send('Bad Request');
    } else {
      res.send(message);
    }
  });
  app.post('/repeat-my-body', (req, res) => {
    const message = req.body;
    if (Object.values(message).length === 0) {
      res.status(400);
      res.send('Bad Request');
    } else {
      res.send(message);
    }
  });
  app.get('/repeat-my-header', (req, res) => {
    const head = req.headers;
    const position = Object.keys(head).indexOf('x-message');
    const elem = Object.values(head)[position];
    if (elem == null || elem === '') {
      res.status(400);
      res.send('Bad Request');
    } else {
      res.send(elem);
    }
  });
  app.get('/repeat-my-cookie', (req, res) => {
    const cookie = req.cookies;
    const elem = Object.values(cookie)[Object.keys(cookie).indexOf('message')];
    if (elem == null || elem === '') {
      res.status(400);
      res.send('Bad Request');
    } else {
      res.send(elem);
    }
  });
  app.get('/repeat-all-my-queries', (req, res) => {
    const message = req.query;
    let tab = [];
      if (message != null) {
        for (let i = 0; Object.values(message)[i] && Object.keys(message)[i]; i += 1) {
          let tab2 = {
            key: Object.keys(message)[i],
            value: Object.values(message)[i],
          };
          tab.push(tab2);
        }
      res.send(tab);
    } else {
      res.status(400);
      res.send('Bad Request');
    }
  });
  app.listen(8080);
}
startServer();
