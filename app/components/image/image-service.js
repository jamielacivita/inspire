function ImageService() {
	var url = 'https://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);

	this.getImage = function (callWhenDone) {
		// ^^^^^^^ How do you use this?
		return $.get(apiUrl, function (res) {
			res = JSON.parse(res)

			return callWhenDone(res)
		})
	}
}
