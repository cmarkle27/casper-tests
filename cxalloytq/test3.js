casper.start('http://localhost/account/1');

casper.then(function() {
    this.test.assertTextExists('account dashboard', 'account dashboard loaded');
});


/*casper.open('http://some.testserver.com/post.php', {
    method: 'post',
    data:   {
        'title': 'Plop',
        'body':  'Wow.'
    }
});*/

casper.run(function() {
    this.test.done();
});