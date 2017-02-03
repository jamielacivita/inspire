(function(){
	
	//Your ImageService is a global constructor function what can you do here if you new it up?
	
	var ic = this;
	var imageService = new ImageService();
	
	imageService.getImage(function(image){

		new Vue({
			el: '#image',
			data:{
				image: image["url"]
			},
			mounted: function(){this.mountBackground(this.image)},
			methods:
			{
				mountBackground: function(image)
				{
					bodyGrab = document.getElementById("body")
					bodyGrab.style.backgroundImage = "url("+image+")";
				}
			}
		})

	})

	

















}())
