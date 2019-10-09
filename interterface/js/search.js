var musicname;
var soft_type;
var page = 1;
var uid = null;
var keyword_data = null;
var t;
var pdf_task;

function SynSearch() {
	let url = " http://scenicmonitor.top/interface/api/getMusic?";

	$("#aplayer-list").css("display", "none");
	$(".m-load2").css("display", "");
	$(".music-audio").empty();
	
	musicname = $("#music-name").val();
	if(musicname == "") {
		return;
	}
	page = 1;
	soft_type = $("input[type='radio']:checked").val();
	$.get(url, {
		"name": musicname,
		"type": soft_type,
		"page": page,
	}, function(result) {
		music_list = result['data'];
		if(music_list.length == 0) {
			alert("不好意思，该找不到相关歌曲！");
			$(".m-load2").css("display", "none");

			return;
		}
		$("ol").empty();

		for(let i = 0; i < music_list.length; i++) {
			author = music_list[i]['author'];
			title = music_list[i]['title'];
			music_url = music_list[i]['url'];
			img = music_list[i]['img'];
			li_id = page * 11111 + i;
			li = "<li class=\"aplayer-list-light\"   id=" + li_id + "     value=" + img + "><span class=\"aplayer-list-title\">" + title + "</span><span class=\"aplayer-list-author\" style=\"float: right;\">" + author + "</span><span class=\"aplayer-url\" value=" + music_url + "></span></li>";
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
				music_url = window.atob(music_url); //解码;

				music_play = "<audio controls autoplay style=\"width: 100%;\"><source src=" + music_url + " type=\"audio/mpeg\"></audio>";
				$(".music-audio").append(music_play);
			})
			if(i == 0) { //第一条自动播放
				$(".music-audio").empty();
				music_url = window.atob(music_url); //解码
				music_play = "<audio controls autoplay style=\"width: 100%;\"><source src=" + music_url + " type=\"audio/mpeg\"></audio>";
				$(".music-audio").append(music_play);
				$("#song-img").attr("src", img);
				$("#song-title").text(title);
				$("#author").text(author);
			}
		}
		page += 1;
		$(".m-load2").css("display", "none");

		$("#aplayer-list").css("display", "");

	}, 'json');
}

function Asysearch() {
	//异步获取音乐
	let url = " http://scenicmonitor.top/interface/api/getMusicAsy?";

	$("#aplayer-list").css("display", "none");
	$(".m-load2").css("display", "");
	$(".music-audio").empty();

	musicname = $("#music-name").val();
	if(musicname == "") {
		return;
	}
	page = 1;
	soft_type = $("input[type='radio']:checked").val();
	$.get(url, {
		"name": musicname,
		"type": soft_type,
		"page": page,
	}, function(result) {
		result = result['result'];
		if(result == "success") {
			t = setInterval("get_music_result_list()", 4000); //获取音乐列表

		}

	}, 'json');

}

function get_music_result_list() {
	let url = " http://scenicmonitor.top/interface/api/getMusicResult?";
	$("ol").empty();
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
			alert("不好意思，该找不到相关歌曲！");
			$(".m-load2").css("display", "none");

			return;
		}

		for(let i = 0; i < data.length; i++) {

			author = data[i]['author'];
			title = data[i]['title'];
			music_url = data[i]['url'];
			img = data[i]['img'];
			li_id = page * 11111 + i;
			li = "<li class=\"aplayer-list-light\"   id=" + li_id + "     value=" + img + "><span class=\"aplayer-list-title\">" + title + "</span><span class=\"aplayer-list-author\" style=\"float: right;\">" + author + "</span><span class=\"aplayer-url\" value=" + music_url + "></span></li>";
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
				music_url = window.atob(music_url); //解码;

				music_play = "<audio controls autoplay style=\"width: 100%;\"><source src=" + music_url + " type=\"audio/mpeg\"></audio>";
				$(".music-audio").append(music_play);
			})
			if(i == 0) { //第一条自动播放
				$(".music-audio").empty();
				music_url = window.atob(music_url); //解码
				music_play = "<audio controls autoplay style=\"width: 100%;\"><source src=" + music_url + " type=\"audio/mpeg\"></audio>";
				$(".music-audio").append(music_play);
				$("#song-img").attr("src", img);
				$("#song-title").text(title);
				$("#author").text(author);
			}
		}
		page += 1;
		$(".m-load2").css("display", "none");

		$("#aplayer-list").css("display", "");
		clearInterval(t);

	});

}

function choice_file() {
	filepath = '';
	$("#pdffile").change(function() {
		filepath = $("#pdffile").val();
		$("#text").html(filepath);
	})
	$("#btn").click(function() {
		if(filepath == "") {
			alert("未选择文件");
			return
		} else {
			$(".down").css("display", "none")

			page_val = $(".page-choice li input[type='radio']:checked").val() //页码选择
			type_val = $(".type-choice li input[type='radio']:checked").val() //文件保存格式
			page_range = $(".page-range").val() //指定的页面
			$(".m-load2").css("display", "")
			var formData = new FormData();
			f = $("#pdffile")[0].files[0]
			down_file_name = f.name.split(".")[0]
			$(".down-file-name").text(down_file_name)
			formData.append("pdf", f);
			formData.append("pagetype", page_val)
			formData.append("type", type_val)
			formData.append("page", page_range)

			$.ajax({
				url: 'http://scenicmonitor.top/interface/api/uploadPDF',
				type: 'POST',
				cache: true,
				data: formData,
				processData: false,
				contentType: false
			}).done(function(data) {
				response_code = parseInt(data['code'])

				if(response_code == 0) {
					alert("文件类型有误");
					$(".m-load2").css("display", "none");

					return
				}
				uid = data['id'];
				$(".uid").val(uid);
				pdf_task = setInterval("get_DocLink()", 5000)

			})

		}
	})

}

function show_input_arae() {
	$(".input-area").css("display", "")
}

function hidden_input_arae() {
	$(".input-area").css("display", "none")
}

function sleep(n) {
	var start = new Date().getTime();
	while(true) {
		if(new Date().getTime() - start > n) {
			break;
		}
	}
}

function parse_url() {
	$(".m-load2").css("display", "");
	let url = "http://scenicmonitor.top/interface/api/analyse?";
	request_url = $("#url").val();
	if(request_url == "") {
		alert("链接不能为空");
		return;
	}
	allowPos = $("input[type='radio']:checked").val()
	$.post(url, {
		"allowPos": allowPos,
		"url": request_url
	}, function(data) {
		code = parseInt(data['code']);

		uid = data['id'];
		if(code == 0) {
			alert("请求失败")
			return
		}
		t = setInterval("get_analyseResult()", 3500);

	}, 'json')
}

function get_analyseResult() {
	let url = "http://scenicmonitor.top/interface/api/analyseResult?";
	$.get(url, {
		id: uid
	}, function(result) {
		keyword_data = result['data']
		if(keyword_data == null) { //后端还未生成数据
			return
		} else { //生好了
			$(".key-rate").css("display", "")

			$(".m-load2").css("display", "none");
			if(keyword_data.length == 0) { //已经拿到了数据

				alert("相关词性频率过低，无法提取");
				clearInterval(t);

			}

			KeyWordRadar('keyword-bar', keyword_data)
			clearInterval(t);
		}
	}, 'json')
}

function get_DocLink() {
	let url = " http://scenicmonitor.top/interface/api/getDocLink?"
	$.get(url, {
		"id": uid
	}, function(data) {
		let code = data['code']
		let p = data['p']
		if(code == 1 & p == 100) {

			$(".m-load2").css("display", "none");
			let down_link = "  http://scenicmonitor.top/interface/api/downDocLink?id=";
			$("#upload-form").attr("action", down_link);
			$(".down").css("display", '');
			clearInterval(pdf_task)
			$(".down-button").click(function() {
				$("#text").html("重新上传文件");
			});

		}
	}, 'json');

}