var musicname;
var soft_type;
var page = 1;

function search() {
	let url = " http://127.0.0.1:8000/interface/api/getMusic?"

	$("#aplayer-list").css("display", "none")
	$(".m-load2").css("display", "")
	$(".music-audio").empty()

	musicname = $("#music-name").val()
	if(musicname == "") {
		return
	}
	page = 1
	soft_type = $("input[type='radio']:checked").val();
	$.get(url, {
		"name": musicname,
		"type": soft_type,
		"page": page,
	}, function(data) {
		$("ol").empty()
		data = data['data']
		if(data.length == 0) {
			alert("不好意思，该找不到相关歌曲！")
			$(".m-load2").css("display", "none")

			return
		}
		for(let i = 0; i < data.length; i++) {

			author = data[i]['author']
			title = data[i]['title']
			music_url = data[i]['url']
			img = data[i]['img']
			li_id = page * 11111 + i
			li = "<li class=\"aplayer-list-light\"   id=" + li_id + "     value=" + img + "><span class=\"aplayer-list-title\">" + title + "</span><span class=\"aplayer-list-author\" style=\"float: right;\">" + author + "</span><span class=\"aplayer-url\" value=" + music_url + "></span></li>"
			$("ol").append(li)
			$("#" + li_id).click(function() {
				img = $(this).attr("value")
				author = $(this).children("span.aplayer-list-author").text()
				title = $(this).children("span.aplayer-list-title").text()
				$("#song-img").attr("src", img)
				$("#song-title").text(title)
				$("#author").text(author)
				$(".music-audio").empty()
				music_url = $(this).children("span.aplayer-url").attr("value")
				music_url = window.atob(music_url) //解码

				music_play = "<audio controls autoplay style=\"width: 100%;\"><source src=" + music_url + " type=\"audio/mpeg\"></audio>"
				$(".music-audio").append(music_play)
			})
			if(i == 0) { //第一条自动播放
				$(".music-audio").empty()
				music_url = window.atob(music_url) //解码
				music_play = "<audio controls autoplay style=\"width: 100%;\"><source src=" + music_url + " type=\"audio/mpeg\"></audio>"
				$(".music-audio").append(music_play)
				$("#song-img").attr("src", img)
				$("#song-title").text(title)
				$("#author").text(author)
			}
		}
		page += 1
		$(".m-load2").css("display", "none")

		$("#aplayer-list").css("display", "")

	}, 'json')

}

function choice_file() {
	$("#pdffile").change(function() {

		filepath = $("#pdffile").val()
		$("#text").html(filepath);
	})
	$("#btn").click(function() {
		if(filepath == "") {
			alert("未选择文件")
			return
		} else {
			$(".m-load2").css("display", "")
			var formData = new FormData();
			f = $("#pdffile")[0].files[0]
			formData.append("pdf", f);

			$.ajax({
					url: 'http://127.0.0.1:8000/interface/api/uploadPDF',
					type: 'POST',
					cache: true,
					data: formData,
					processData: false,
					contentType: false
				}).done(function(data) {
					uid = data['id']
					let url = "http://127.0.0.1:8000/interface/api/getDocLink?"
					var code = 0
					var p = 0
					for(let i = 0; i < 10; i++) {
						if(code == 1 & p == 100) {
							break
						}
						sleep(1000)
						$.ajaxSettings.async = false;
						$.get(url, {
							"id": uid
						}, function(data) {
							code = data['code']
							p = data['p']
							if(code == 1 & p == 100) {
								$(".m-load2").css("display", "none")

								$(".down").css("display", "")
//								alert("转换成功")

							}
						}, 'json')
					}
				})
				.fail(function(res) {});

		}
	})

}

function sleep(n) {
	var start = new Date().getTime();
	while(true) {
		if(new Date().getTime() - start > n) {
			break;
		}
	}
}