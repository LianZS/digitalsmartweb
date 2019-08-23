function search() {
	let musicname = $("#music-name").val()
	if(musicname==""){
		return 
	}
	let url =" http://127.0.0.1:8000/interface/api/getMusic?"
	soft_type = $("input[type='radio']:checked").val();
	$.get(url,{
		"name":musicname,
		"type":soft_type
	},function(data){
		data =data['data']
		for(let i=0;i<data.length;i++){
			author = data[i]['author']
			title =data[i]['title']
			url =data[i]['url']
			li ="<li class=\"aplayer-list-light\"><span class=\"aplayer-list-title\">"+title+"</span><span class=\"aplayer-list-author\" style=\"float: right;\">"+author+"</span><span class=\"aplayer-url\" value="+url+"></span></li>"
			$("ol").append(li)
		}
	},'json')
	


}