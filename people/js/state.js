function ScenceState(pid){
	 this.url="http://scenicmonitor.top/attractions/api/getState?"
	 $.get(this.url,{"pid":pid},function(data,state){
	 	item=data['state']
	 	coststate=item['coststate']
	 	environmentstate=item['environmentstate']
	 	trafficstate=item['trafficstate']
	 	weatherstate=item['weatherstate']
	 	$("#traffic").text(trafficstate)
	 	$("#weather").text(weatherstate)
	 	$("#cost").text(coststate)
	 	$("#environment").text(environmentstate)
	 	
	 	
	 	
	 },'json')
}
