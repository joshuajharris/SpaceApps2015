Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function(){
  this.render('resultsList');
});

Router.route('/result', function(){
  this.render('table');
});
