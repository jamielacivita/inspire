function ClockService(){
	this.getNameText =  function(){
		var t = localStorage.getItem('nameText');
		if(t){
			console.log('Clock Name Data:', JSON.parse(t))
			return JSON.parse(t)
		}
        console.log('Clock Name Data:');
		return '';
	}
	
	this.saveNameText =  function(nameText){
		localStorage.setItem('nameText', JSON.stringify(nameText));
		console.log('Todo Data Saved:', nameText);
	}
}