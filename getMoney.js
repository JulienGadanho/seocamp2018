
var casper = require('casper').create();
var x = require('casper').selectXPath;


casper.userAgent('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)');


//visit homepage
casper.start('https://partenaires.amazon.fr/');

//click on login
casper.thenClick(x('//*[@id="a-autoid-0-announce"]'), function() {});

//fill form
casper.then(function() {
    this.evaluate(function () {
        document.getElementById("ap_email").value = "youremail@yourdomain.com";
		document.getElementById("ap_password").value = "yourpassword";
		document.getElementsByTagName('form')[0].submit();
    });
});

//get money
casper.wait(1000, function () {
	var text = casper.fetchText(x("(//div[@class='ac-card-data-content'])[1]"));
    	casper.echo(text.trim().replace("€","").replace(",","."));
});


//run application
casper.run();





