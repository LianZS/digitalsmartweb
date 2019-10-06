var task;

function nextpage() {

	let url = " http://scenicmonitor.top/interface/api/getMusic?";
	$(".aplayer-more").click(function() {
		$(".m-load2").css("display", "");
		$.get(url, {
			"name": musicname,
			"type": soft_type,
			"page": page,
		}, function(result) {
			result = result['result'];
			if(result == "success") {
				task = setInterval("get_music_list()", 2000);

			}

		});
	});
}

function get_music_list() {
	let url = " http://scenicmonitor.top/interface/api/getMusicResult?";
	$.get(url, {
		"name": musicname,
		"type": soft_type,
		"page": page,
	}, function(data) {

		data = data['data'];
		if(data == null) {
			return;
		}
		if(data.length == 0) {
			alert("不好意思，没有了！");
			$(".m-load2").css("display", "none");
			return;
		}

		for(let i = 0; i < data.length; i++) {

			author = data[i]['author'];
			title = data[i]['title'];
			music_url = data[i]['url'];
			img = data[i]['img'];
			li_id = page * 11111 + i;

			li = "<li class=\"aplayer-list-light\"   id=" + li_id + "     value=" + img + "><span class=\"aplayer-list-title\">" + title + "</span><span class=\"aplayer-list-author\" style=\"float: right;\">" + author + "</span><span class=\"aplayer-url\" value=" + music_url + "></span></li>"
			$("ol").append(li);
			$("#" + li_id).click(function() {
				img = $(this).attr("value");
				author = $(this).children("span.aplayer-list-author").text();
				title = $(this).children("span.aplayer-list-title").text();
				$("#song-img").attr("src", img);
				$("#song-title").text(title);
				$("#author").text(author);
				$(".music-audio").empty();
				music_url = $(this).children("span.aplayer-url").attr("value");
				music_url = window.atob(music_url); //解码

				music_play = "<audio controls autoplay style=\"width: 100%;\"><source src=" + music_url + " type=\"audio/mpeg\"></audio>";
				$(".music-audio").append(music_play);
			});
		}
		clearInterval(task);
		$(".m-load2").css("display", "none");

		page += 1;
	}, "json");

}