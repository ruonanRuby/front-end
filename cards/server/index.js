const Koa = require('koa');             //http middleware framework for NodeJs 
const router = require('koa-router')();   // route middleware 
const logger = require('koa-logger');   // development style logger middleware 
const koaBody = require('koa-body');    // parse http request body
const cors = require('@koa/cors');       // node-cors 
const path = require('path');
const utils = require('./utils');
const app = new Koa();

let posts = [];
const postFile = path.join(__dirname, './posts.json');

app.use(cors());
app.use(logger());
app.use(koaBody()); 
app.use(router.routes());

router.get('/', list) 
    .get('/post/:id', show)
    .post('/post', create);

function list(ctx) {
    ctx.body = { posts: posts };
}

async function show(ctx) {
    const id = ctx.params.id;
    const post = posts[id];
    ctx.body = { post: post };
}

async function create(ctx) {
  const post = ctx.request.body;
  post.created_at = new Date();
  post.id = posts.length;
  try {
    console.log("write in here");
    posts.push(post);
    const data = await utils.writeJSON(postFile, posts);
    ctx.body = data;
  } catch(e) {
    console.error(e);
    posts.pop();
    ctx.body = e;
  }
}

app.listen(8000, 'localhost', async () => {
  try {
    const data = await utils.readJSON(postFile);
    posts = data;
    console.log("file read successfully");
  } catch (err) {
    console.error (err);
  }
});