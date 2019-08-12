function Comment(pid){
	this.url="http://127.0.0.1:8000/attractions/api/getComment?"
	$.get(this.url,{"pid":pid},function(data,state){
		comments=data['comment']
		for(let i=0;i<comments.length;i++){
			item=comments[i]
			commentuser=item['commentuser']
			comment=item["comment"]
			commenttime=item['commenttime']
			commentlike=item['commentlike']
			commentElement ="<div class='chat-widget-left'>"+comment+"</div>"
			$("#comment").append(commentElement)
			src='assets/img/user2.png'
			infoElement="<div class='chat-widget-name-left'><img class='media-object img-circle img-left-chat' src="+src+" /><h4> "+commentuser+"</h4><h5>评价时间："+commenttime+"</h5></div><hr />"
						$("#comment").append(infoElement)

		}
	},'json')
}
