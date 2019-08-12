function Comment(pid) {
	this.url = "http://127.0.0.1:8000/attractions/api/getComment?"
	var img_url = "http://127.0.0.1:8000/media/"
	$.get(this.url, {
		"pid": pid
	}, function(data, state) {
		comments = data['comment']
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
	this.url="http://127.0.0.1:8000/attractions/api/getCommentRate?"
	$.get(this.url,{"pid":pid},function(data){
		comment=data['comment']
		
		new CommentRadar(idname,comment)
	},"json")
}

