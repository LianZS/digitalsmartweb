var get_url = "http://127.0.0.1:8000/attractions/api/getCommentRate?"
var post_url = "http://127.0.0.1:8000/attractions/admin/uploadCommentRate?"

var tr_count = 0; //记录tr的数目
var index = 0 //数组游标
var j = 0;
var array = new Array()

function CommentRate(pid) {
	//评论指数
	
	$("#comment-rate").empty()
	tr_count=0
	$.get(get_url, {
		"pid": pid
	}, function(data) {
		comments = data['comment']
		len = comments.length

		for(let i = 0; i < len; i++) {
			item = comments[i]
			adjectives = item['adjectives']
			rate = item['rate']
			pk = item['pk']
			//flag属性0标识未修改过，1表示修改过
			tr = "<tr  pk=" + pk + " class='collection-item' id='tr" + i + "'><td flag=\"0\" class='collection-item' id='comment-key" + i + "'>" + adjectives + "</td><td flag=\"0\" class=' collection-item' id='comment-grade" + i + "'>" + rate + "</td> <td style='text-align:right;'><a style='padding-right: 20%;'><li  class='fa fa-minus-circle fa-2x' id='del" + i + "'></li></a><a><li class='fa fa-edit fa-2x' id='edit" + i + "'></li></a></td></tr>"
			$("#comment-rate").append(tr)
			j = i;
			$('#edit' + i).click(function() {
				$("#comment-key" + i).attr("flag", "1")
				$("#comment-grade" + i).attr("flag", "1")

				var keyword = document.getElementById("comment-key" + i).setAttribute("contenteditable", "true");
				document.getElementById("comment-key" + i).focus()
				var grade = document.getElementById("comment-grade" + i).setAttribute("contenteditable", "true");
			});
			$('#del' + i).click(function() {
				tr_count -= 1
				pk = $("#tr" + i).attr("pk")
				array[index] = {
					"pk": parseInt(pk),
					"adjectives": '',
					"rate": -1
				}
				index += 1
				$("#tr" + i).remove()
			})
			tr_count += 1
		}
	}, "json")

}

function Submit() {
	$("#send").click(function() {
		$("tr[pk]").each(function() {
			var count = 0
			var pk = $(this).attr("pk")
			var adjectives = null
			var rate = 0
			var adj = 1
			$(this).children().each(function() {
				if($(this).attr("flag") == 0) {
					return
				}
				if(adj >= 2) {
					if(adj > 2) {
						return
					}
					alert("不能有空")

				}
				txt = $(this).text()

				if(txt != '' & count % 2 == 0) { //关键词
					adjectives = txt
					$(this).attr("flag", 0)

				} else if(txt != '' & count % 2 == 1) { //评分
					rate = txt

					array[index] = {
						"pk": parseInt(pk),
						"adjectives": adjectives,
						"rate": parseInt(rate)
					}
					$(this).attr("flag", 0)
					count = 0
					index += 1
				} else {
					adj += 1
					return
				}
				count += 1

			})
		})
		$.ajax({
			type: 'POST',
			url: post_url,
			data: {
				"data": JSON.stringify(array),
				"pid": pid
			},

			success: function() {
				CommentRate(pid) //  刷新

				array = [] //提交一次清空数组一次
				index = 0

			},
			dataType: "json"
		});

	})

}

function Add_element() {
	$("#add-tr").click(function() {
		if(tr_count >= 10) {
			alert("最大只能拥有十条数据")
			return
		}
		j += 1;
		tr_count += 1

		let i = j;
		tr = "<tr pk='-1' class=\"collection-item\" id=\"tr" + j + "\"><td flag=\"1\" class=\"collection-item\" id=\"comment-key" + j + "\"></td><td flag=\"1\" class=\"collection-item\" id=\"comment-grade" + j + "\"></td> <td style=\"text-align:right;\"><a style=\"padding-right: 20%;\"><li class=\"fa fa-minus-circle fa-2x\" id=\"del" + j + "\"></li></a><a><li class=\"fa fa-edit fa-2x\" id=\"edit" + j + "\"></li></a></td></tr>"
		$("#comment-rate").append(tr)
		$('#edit' + i).click(function() {
			$("#comment-key" + i).attr("flag", "1")
			$("#comment-grade" + i).attr("flag", "1")
			var keyword = document.getElementById("comment-key" + i).setAttribute("contenteditable", "true");
			document.getElementById("comment-key" + i).focus()
			var grade = document.getElementById("comment-grade" + i).setAttribute("contenteditable", "true");
		});
		$("#del" + i).click(function() {
			tr_count -= 1
			$("#tr" + i).remove()
		});
	});

}