function Cover_Image_reuqest(pid, name) {
	this.url = "http://127.0.0.1:8000/attractions/admin/area_cover"
	var image_url = "http://127.0.0.1:8000/media/"
	$.get(this.url, {
		"pid": pid
	}, function(data, state) {
		href = data['url']['photo']
		
		if(href == "") {
			href="assets/img/none.png"
			newElement = "	<div class='col-xs-12 col-sm-6 col-md-3' id= "+pid+" style='width: 25%;'><h3>"+name+"</h3><div class='card-panel' ><img src=" + href + " style='width: 100%;height:300px' /></div></div>"
			
		} else {
			href=image_url+href
			newElement = "	<div class='col-xs-12 col-sm-6 col-md-3' id= "+pid+"  style='width: 25%;'><h3>"+name+"</h3><div class='card-panel' ><img src=" + href + " style='width: 100%;height:300px' /></div></div>"
			
		}
		$("#page-inner .row").append(newElement)
		p ="#"+pid
		$(p).click(function(){
			href="scencedata.html?area="+name+"&pid="+pid
			$(location).attr('href', href);
		})
		
		
	}, 'json')
	
}