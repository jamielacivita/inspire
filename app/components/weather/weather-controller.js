(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		//console.log(weather);
		//console.log("type of weather: :",typeof weather)
		//What can you do with this weather object?

		new Vue({
			el: '#weather',
			data:
			{
				//weather: weather,
				weather: 'wx data',
				where: 'WhereData',
				tempK: 'KelvenData',
				tempC: 'CelsusData',
				tempF: 'FahData',
			},
			
			mounted: function(){this.getTemp()},

			methods:
			{
				getName: function()
				{
					//console.log("in weather methods")
					//console.log(typeof this.weather)
					weatherObject = JSON.parse(weather)
					//console.log(typeof weatherObject)
					//console.log(weatherObject['name'])
					this.where = weatherObject['name']
					console.log(this.where)
				},

				getTemp: function()
				{
				console.log("in getTemp")
				weatherObject = JSON.parse(weather)
				this.tempK = weatherObject['main']['temp']	
				this.tempK = this.tempK.toFixed(0)
				this.tempF = (9/5)*(this.tempK-273)+32
				this.tempF = this.tempF.toFixed(0)	
				this.tempC = this.tempK-273
				this.tempC = this.tempC.toFixed(0)
				}
			}
		})

	})
	

	
	
}())
