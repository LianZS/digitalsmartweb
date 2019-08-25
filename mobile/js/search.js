function search() {
	let appname = $("#appname").val()
	if(appname==""){
		return 
	}
	
	href =$("#search-href").attr('href')+"?keyword="+appname
	$("#search-href").attr("href",href)
	$("#search-href")[0].click()


}