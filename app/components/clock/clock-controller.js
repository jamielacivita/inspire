(function (){
	
	var cc = this;
	var cs = new ClockService();
	setInterval(function(){cm.theClock()},1000)

		cm = new Vue({
			el: '#clock',
			data:
			{
				time: '',
				messageText: '',
				nameText: '',
				showNameText: false,
				showMilitaryTime: false
			},
			
			mounted: function(){this.getName()},
			methods:
			{
				theClock : function()
				{
				    var d = new Date();
					var h = d.getHours()
					var m = d.getMinutes()
						if (m<10){m="0"+m}
					var s = d.getSeconds()
						if (s<10){s="0"+s}

					if (h < 12) {this.messageText = 'Good Morining'}
					else if (h < 18) {this.messageText = 'Good Afternoon'}
					else {this.messageText = 'Good Evening'}

					if (this.nameText.length > 0) {this.messageText += ','}	
						if (!this.showMilitaryTime)
						{
							if (h > 12) {h = h - 12}
						}

					this.time = `${h}:${m}:${s}`;
				},
				setName:function()
				{
					console.log("In set name:")
					this.showNameText = !this.showNameText;
					cs.saveNameText(this.nameText)
					console.log("Name text in local storage: ",cs.getNameText())
				},
				getName:function()
				{
					console.log("In get name:")
					console.log("Name text in local storage: ",cs.getNameText())
					this.nameText = cs.getNameText()
				},
				showMilitary:function()
				{
					console.log("In show military:")
					this.showMilitaryTime = !this.showMilitaryTime

				}
			}
		})

//	})
	

	
	
}())
