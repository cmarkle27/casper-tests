var casper = require('casper').create({
    logLevel: "info",              // Only "info" level messages will be logged
    onError: function(self, m) {   // Any "error" level message will be written
        console.log('FATAL:' + m); // on the console output and PhantomJS will
        self.exit();               // terminate
    },
    viewportSize: {
        width: 1024,        // The WebPage instance used by Casper will
        height: 2000         // use these settings
    }
});

casper.start(casper.cli.args[0], function() {
    this.fill('form#login', {
        'username':  'chris@cxalloy.com',
        'password':   'munch72'
    }, true);
});

casper.then(function() {

    this.capture('cxalloy2.png', {
        top: 0,
        left: 0,
        width: 1024,
        height: 2000
    });
});

casper.run(function() {
    this.echo('we are logged in.').exit();
});