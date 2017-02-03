(function () {
	//console.log("inside quote controller")

	var qc = this;
	var quoteService = new QuoteService();

	quoteService.getQuote(function(quote) {
		//console.log("Quote in quote controller:", quote);

		new Vue({
			el: '#quote',
			data: {
				quote: quote
			}
		})

	})


} ())
