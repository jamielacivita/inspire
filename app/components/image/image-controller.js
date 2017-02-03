(function(){
	
	//Your ImageService is a global constructor function what can you do here if you new it up?
	
	var ic = this;
	var imageService = new ImageService();
	
	imageService.getImage(function(image){
		console.log(image);
		

		new Vue({
			el: '#image',
			data:{
				//image: image
				image: 'url("https://unsplash.com/photos/N_3CHNdliVs")'	
			},
			mounted: function(){this.mountBackground(this.image)},
			methods:
			{
				mountBackground: function(image)
				{
					console.log("in mountBackground with: ", image)

				}
			}
		})

	})

	

















}())
