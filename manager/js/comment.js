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
	var tr_count=0;
	$.get(this.url, {
		"pid": pid
	}, function(data) {
		comments = data['comment']
		len = comments.length
		var j = 0;
		for(let i = 0; i < len; i++) {
			item = comments[i]
			adjectives = item['adjectives']
			rate = item['rate']
			pk=item['pk']
			//flag属性0标识未修改过，1表示修改过
			tr = "<tr  pk="+pk+" class='collection-item' id='tr" + i + "'><td flag=\"0\" class='collection-item' id='comment-key" + i + "'>" + adjectives + "</td><td flag=\"0\" class=' collection-item' id='comment-grade" + i + "'>" + rate + "</td> <td style='text-align:right;'><a style='padding-right: 20%;'><li  class='fa fa-minus-circle fa-2x' id='del" + i + "'></li></a><a><li class='fa fa-edit fa-2x' id='edit" + i + "'></li></a></td></tr>"
			$("#comment-rate").append(tr)
			j = i;
			$('#edit' + i).click(function() {
				var keyword = document.getElementById("comment-key" + i).setAttribute("contenteditable", "true");
				document.getElementById("comment-key" + i).focus()
				var grade = document.getElementById("comment-grade" + i).setAttribute("contenteditable", "true");
			});
			$('#del' + i).click(function() {
				tr_count-=1
				$("#tr" + i).remove()
			})
			tr_count+=1
		}
		$("#add-tr").click(function() {
			if(tr_count>=10){
				alert("最大只能拥有十条数据")
				return
			}
			j += 1;
			tr_count+=1

			let i=j;
			tr="<tr class=\"collection-item\" id=\"tr"+j+"\"><td flag=\"0\" class=\"collection-item\" id=\"comment-key"+j+"\"></td><td flag=\"0\" class=\"collection-item\" id=\"comment-grade"+j+"\"></td> <td style=\"text-align:right;\"><a style=\"padding-right: 20%;\"><li class=\"fa fa-minus-circle fa-2x\" id=\"del"+j+"\"></li></a><a><li class=\"fa fa-edit fa-2x\" id=\"edit"+j+"\"></li></a></td></tr>"
			$("#comment-rate").append(tr)
			$('#edit' + i).click(function() {
				var keyword = document.getElementById("comment-key" + i).setAttribute("contenteditable", "true");
				document.getElementById("comment-key" + i).focus()
				var grade = document.getElementById("comment-grade" + i).setAttribute("contenteditable", "true");
			});
			$("#del"+i).click(function() {
				tr_count-=1
				$("#tr" + i).remove()
			});
		});
		$("#send").click(function(){
			
		})
	}, "json")
}