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
			userphoto = item['userphoto']
			commentElement = "<div class='chat-widget-left'>" + comment + "</div>"
			$("#comment").append(commentElement)
			src = img_url + userphoto
			infoElement = "<div class='chat-widget-name-left'><img class='media-object img-circle img-left-chat' style='width:25%' src=" + src + "  /><h4> " + commentuser + "</h4><h5>评价时间：" + commenttime + "</h5></div><hr />"
			$("#comment").append(infoElement)

		}
	}, 'json')
}

function CommentRate(pid) {
	//评论指数
	this.url = "http://127.0.0.1:8000/attractions/api/getCommentRate?"
	$.get(this.url, {
		"pid": pid
	}, function(data) {
		comments = data['comment']
		len=comments.length
		for(let i = 0; i < len; i++) {
			item = comments[i]
			adjectives = item['adjectives']
			rate = item['rate']
			tr="	<tr class='collection-item'><td class=' collection-item' id=comment-key"+i+">"+adjectives+"</td><td class=' collection-item' id=comment-grade"+i+">"+rate+"</td> <td class='collection-item'><a><li class='fa fa-edit fa-2x' id="+i+"></li></a></td></tr>"
			$("#comment-rate").append(tr)
			$('#'+i).click(function(){
				 var keyword = document.getElementById("comment-key"+i).setAttribute("contenteditable", "true");
				 var grade = document.getElementById("comment-grade"+i).setAttribute("contenteditable", "true");

				
				
			})
		}
	}, "json")
}