function Image_reuqest(pid){
	this.url ="http://127.0.0.1:8000/attractions/api/getImage"
	var image_url="http://127.0.0.1:8000/media/"
	$.get(this.url,{"pid":pid},function(data,state){
		urls = data['url']
//		$(".carousel-inner").remove()
		for(let i=0;i<urls.length;i++){
			photo_url = image_url+urls[i].photo
			if(i==0){
				newElemet = "<div class='item active'><img src="+photo_url+" alt=''  /></div>"
			}
			else{
				newElemet = "<div class='item '><img src="+photo_url+" alt=''  /></div>"
			}
				$(".carousel-inner").append(newElemet)
			$.get(photo_url,function(){
				
				
			})
		}
	},'json')
}
