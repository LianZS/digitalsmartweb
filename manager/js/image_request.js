var image_get_url = "http://127.0.0.1:8000/attractions/admin/area_cover"
var image_url = "http://127.0.0.1:8000/media/"
var filepath = ""

function Cover_Image_reuqest(pid, name) {
	// 景区封面

	$.get(image_get_url, {
		"pid": pid,
		"flag": 1
	}, function(data, state) {
		href = data['url']['photo']

		if(href == "") {
			href = "assets/img/none.png"
			newElement = "	<div class='col-xs-12 col-sm-6 col-md-3' id= " + pid + " style='width: 25%;'><h3>" + name + "</h3><div class='card-panel' ><img src=" + href + " style='width: 100%;height:300px' /></div></div>"

		} else {
			href = image_url + href
			newElement = "	<div class='col-xs-12 col-sm-6 col-md-3' id= " + pid + "  style='width: 25%;'><h3>" + name + "</h3><div class='card-panel' ><img src=" + href + " style='width: 100%;height:300px' /></div></div>"

		}
		$("#page-inner .row").append(newElement)
		p = "#" + pid
		$(p).click(function() {
			href = "scencedata.html?area=" + name + "&pid=" + pid
			$(location).attr('href', href);
		})

	}, 'json')

}

function Image_Manager(pid) {
	//景区图片管理
	$.get(image_get_url, {
		"pid": pid,
		"flag": 0
	}, function(data, state) {
		hrefs = data['url']
		for(let i = 0; i < hrefs.length; i++) {
			href = hrefs[i]['photo']
			if(href == "") {
				href = "assets/img/none.png"
				newElement = "	<div class='col-xs-12 col-sm-6 col-md-3' id= " + pid + " style='width: 25%;'><h3>" + name + "</h3><div class='card-panel' ><img src=" + href + " style='width: 100%;height:200px' /></div></div>"

			} else {
				href = image_url + href
				newElement = "	<div class='col-xs-12 col-sm-6 col-md-3' id= " + pid + "  style='width: 25%;'><h3>" + name + "</h3><div class='card-panel' ><img src=" + href + " style='width: 100%;height:200px' /></div></div>"

			}
			$("#imager-manager-table").append(newElement)
		}

	}, 'json')

	$("#fileinp").change(function() {

		filepath = $("#fileinp").val()
		$("#text").html(filepath);
	})
	$("#btn").click(function() {
		if(filepath == "") {
			alert("未选择文件")
			return
		} else {
			var formData = new FormData();
			formData.append("pic", $("#fileinp")[0].files[0]);
	

			$.ajax({
				url: 'http://127.0.0.1:8000/attractions/api/upload',
				type: 'POST',
				cache: true,
    				data: formData,
				processData: false,
				contentType: false
			}).done(function(res) {}).fail(function(res) {});

		}
	})

}