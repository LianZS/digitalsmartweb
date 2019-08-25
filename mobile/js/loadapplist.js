function load_app_search_result() {
	let url = "http://scenicmonitor.top/internet/api/app/applist"
	keyword = getParams("keyword")
	$.get(url, {
		"keyword": keyword
	}, function(data) {
		applist = data['applist']
		for(let i = 0; i < applist.length; i++) {
			let app = applist[i]
			let appid = app['id']
			let appname = app['appname']
			let href = "apphabit.html?appid=" + appid + "&appname=" + appname
			let li_element = "	<li  class=\"app-li\" ><a href=" + href + " style=\"font-size: 40px;\">" + appname + "</a></li>"
			$('.applist').append(li_element)
		}
	}, "json")
}

function getParams(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return decodeURI(r[2]);
	return null;

};