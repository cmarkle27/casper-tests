casper.start('http://localhost/project/1/people#person-1');

casper.then(function() {
    this.test.assertHttpStatus(200, 'person page loaded');
});

/*casper.then(function() {
    // Click on 1st result link
    this.click('.dropdown-button');
    this.click('.detail-dropdown li:first-child');
});

casper.wait(3000, function() {
    this.echo("I've waited for three seconds.");
    // this.debugHTML();
});

casper.then(function() {

	//casper.waitUntilVisible('#new-person-form', 1000);
    //console.log('button clicked, new location is ' + this.getCurrentUrl());
    if (this.visible('#fancybox-content')) {
        this.echo("fancy");
    } else {
        this.test.fail("I can't see the form");
    }

});*/



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