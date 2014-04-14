casper.start('http://localhost/auth/login/en');

casper.then(function() {
    this.test.assertExists('#login-form', 'login form exists');
});

casper.then(function() {
    this.fill('#login-form', {
        'username':'chris@cxalloy.com',
        'password':'munch72'
    }, true);
});

casper.then(function() {
	this.test.assertExists('nav#global', 'global navbar found');
});

casper.run(function() {
    this.test.done();
});