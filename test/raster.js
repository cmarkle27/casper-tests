var page = require('webpage').create(),
    casper = require('casper').create(),
    address, output, size;

if (phantom.args.length < 2 || phantom.args.length > 3) {
    console.log('Usage: rasterize.js URL filename');
    phantom.exit();
} else {
    address = phantom.args[0];
    output = phantom.args[1];
    page.viewportSize = { width: 1200, height: 1024 };
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
        } else {
            window.setTimeout(function () {
                page.render(output);
                //console.log(page.content());

/*                var title = page.evaluate(function (s) {
                    return document.querySelector(s).innerText;
                }, '#container');
                console.log(title);*/

                phantom.exit();
            }, 1000);
        }
    });
}