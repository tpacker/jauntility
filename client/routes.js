// Router.map(function() {
	// this.route('activities');
	// this.route('tasks');
	// this.route('people');
	// this.route('/post_:postId/comment_:commentId', function() {
		// console.log('post: ' + this.params.postId + ', comment: ' + this.params.commentId);
	// });
	// this.route('home', {
		// path: '/'
	// });
// });


//Router.route('/post/:_id', function () 
Router.route('/', function ()
{
	// use the template named ApplicationLayout for our layout
	this.layout('ApplicationLayout');
	
	// {{> yield}}
	this.render('Home', {to: 'content'});
	
	this.render('PageHeader', {to: 'header'});
	
	// render the PageFooter template into the yield region named "footer"
	// {{> yield "footer"}}
	this.render('PageFooter', {to: 'footer'});
});


Router.route('/Home', function () 
{
	// use the template named ApplicationLayout for our layout
	this.layout('ApplicationLayout');
	
	// {{> yield "content"}}
	this.render('Home', {to: 'content'});
	
	// render the PageFooter template into the yield region named "footer"
	// {{> yield "header"}}
	this.render('PageHeader', {to: 'header'});
	
	// render the PageFooter template into the yield region named "footer"
	// {{> yield "footer"}}
	this.render('PageFooter', {to: 'footer'});
});


Router.route('/Tasks', function () 
{
	// use the template named ApplicationLayout for our layout
	this.layout('ApplicationLayout');
	
	// render the Tasks template into the yield region named "tasks"
	// {{> yield "content"}}
	this.render('Tasks', {to: 'content'});
	
	// render the PageFooter template into the yield region named "footer"
	// {{> yield "header"}}
	this.render('PageHeader', {to: 'header'});
	
	// render the PageFooter template into the yield region named "footer"
	// {{> yield "footer"}}
	this.render('PageFooter', {to: 'footer'});
});


Router.route('/Activities', function () 
{
	// use the template named ApplicationLayout for our layout
	this.layout('ApplicationLayout');
	
	// {{> yield "content"}}
	this.render('Activities', {to: 'content'});
	
	// render the PageFooter template into the yield region named "footer"
	// {{> yield "header"}}
	this.render('PageHeader', {to: 'header'});
	
	// render the PageFooter template into the yield region named "footer"
	// {{> yield "footer"}}
	this.render('PageFooter', {to: 'footer'});
});


Router.route('/People', function () 
{
	// use the template named ApplicationLayout for our layout
	this.layout('ApplicationLayout');
	
	// {{> yield "content"}}
	this.render('People', {to: 'content'});
	
	// render the PageFooter template into the yield region named "footer"
	// {{> yield "header"}}
	this.render('PageHeader', {to: 'header'});
	
	// render the PageFooter template into the yield region named "footer"
	// {{> yield "footer"}}
	this.render('PageFooter', {to: 'footer'});
});

