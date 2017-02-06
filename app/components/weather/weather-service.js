function WeatherService() {
	var url = 'http://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
	var apiUrl = url + encodeURIComponent(url2);

	//console.log(apiUrl)
	this.getWeather = function (callWhenDone) {

		$.get(apiUrl, function (res) {
			localStorage.setItem('weather', JSON.stringify(res))
			callWhenDone(res);
		})
	}
}
