function Comment(pid) {
	let url = "http://scenicmonitor.top/attractions/api/getComment?"
	var img_url = "http://scenicmonitor.top/media/"
	$.get(url, {
		"pid": pid
	}, function(data, state) {
		comments = data['comment']
		$(".panel-body").empty()
		for(let i = 0; i < comments.length; i++) {
			item = comments[i]
			commentuser = item['commentuser']
			comment = item["comment"]
			commenttime = item['commenttime']
			commentlike = item['commentlike']
			userphoto=item['userphoto']
			commentElement = "<div class='chat-widget-left'>" + comment + "</div>"
			$("#comment").append(commentElement)
			src =img_url+userphoto
			infoElement = "<div class='chat-widget-name-left'><img class='media-object img-circle img-left-chat' style='width:25%' src=" + src + "  /><h4> " + commentuser + "</h4><h5>评价时间：" + commenttime + "</h5></div><hr />"
			$("#comment").append(infoElement)
			
		}
	}, 'json')
}
function CommentRate(pid,idname){
	//评论指数
	let url="http://scenicmonitor.top/attractions/api/getCommentRate?"
	$.get(url,{"pid":pid},function(data){
		comment=data['comment']
		
		new CommentRadar(idname,comment)
	},"json")
}

