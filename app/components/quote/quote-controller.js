(function () {
	
	var quoteService = new QuoteService();

	quoteService.getQuote(function(quote) {

		qm = new Vue({
			el: '#quote',
			data: {
				quote: quote,
				quoteText: '',
				quoteAuthor: '',
				showText: true
			},
			mounted: function(){this.parseQuoteData(quote)},
			methods:
			{
				parseQuoteData(quote)
				{
					quoteObject = JSON.parse(quote)
					this.quoteText = quoteObject['quote']
					this.quoteAuthor = quoteObject['author']
				}
			}
		})

	})


} ())
