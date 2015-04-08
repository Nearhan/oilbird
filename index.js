var koa = require('koa');
app = koa();

app.use(function *(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function *(next) {
  console.log('this is actually happening first!');
  this.body = 'Hello World';
  yield next;
});


//another response This is how generators work!
app.use(function *() {
    this.body = this.body.toUpperCase();
});

app.listen(3000);
