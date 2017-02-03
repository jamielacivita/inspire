(function () {
	//console.log("inside quote controller")

	var qc = this;
	var quoteService = new QuoteService();

	quoteService.getQuote(function(quote) {
		//console.log("Quote in quote controller:", quote);

		new Vue({
			el: '#quote',
			data: {
				quote: quote,
				quoteText: '--Quote Text gotes here',
				quoteAuthor: '--Quote Author goes here--'
			},
			mounted: function(){this.parseQuoteData(quote)},
			methods:
			{
				parseQuoteData(quote)
				{
					quoteObject = JSON.parse(quote)
					console.log("in parseQuoteData with: ", quoteObject)
					console.log("type: ",typeof quoteObject)
					this.quoteText = quoteObject['quote']
					console.log(this.quoteText)
					this.quoteAuthor = quoteObject['author']
				}
			}
		})

	})


} ())
