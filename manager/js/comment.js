var get_comment_url = "http://scenicmonitor.top/attractions/api/getComment?"
//	var img_url = "http://scenicmonitor.top/media/"
var post_comment_url = "http://scenicmonitor.top/attractions/admin/uploadComment?"
var comment_j = 0;
var comment_array = new Array()
var comment_tr_count = 0; //记录tr的数目
var comment_index = 0 //数组游标
function Comment(pid) {
	comment_tr_count = 0
	$.get(get_comment_url, {
		"pid": pid
	}, function(data, state) {

		comments = data['comment']
		$("#comment").empty()

		for(let i = 0; i < comments.length; i++) {
			item = comments[i]
			pk = item['pk']
			commentuser = item['commentuser']
			comment = item["comment"]
			commenttime = item['commenttime']
			commentlike = item['commentlike']
			//			userphoto = item['userphoto']
			//			src = img_url + userphoto
			tr = "<tr comment-pk=" + i + " class=\"collection-item\" id=\"comment-tr" + i + "\"><td flag=\"0\" class=\"collection-item\" id=\"user-" + i + "\">" + commentuser + "</td><td flag=\"0\" class=\"collection-item\" id=\"comment-detail" + i + "\">" + comment + "</td> <td flag=\"0\" class=\"collection-item\">" + commentlike + "</td><td  flag=\"0\" class=\"collection-item\"  >" + commenttime + " </td><td style=\"text-align:center;\"><a ><li  class=\"fa fa-minus-circle fa-2x\" id=\"commentdel" + i + "\"></li></a></td></tr>"
			$("#comment").append(tr)
			$('#commentdel' + i).click(function() {
				comment_tr_count -= 1
				pk = $("#comment-tr" + i).attr("comment-pk")
				comment_array[comment_index] = {
					"pk": parseInt(pk), //表示要删除的元素
					"commentuser": "",
					"comment": "",
					"commenttime": "",
					"commentlike": ""
				}
				comment_index += 1
				$("#comment-tr" + i).remove()
			})
			comment_tr_count += 1
			comment_j = i
		}

	}, 'json')
}

function Add_Comment_element() {
	$("#add-comment-tr").click(function() {
		if(comment_tr_count >= 100) {
			alert("最大只能拥有100条数据")
			return
		}
		comment_j += 1;
		tr_count += 1

		let i = comment_j;
		tr = "<tr comment-pk=\"-1\" class=\"collection-item\" id=\"comment-tr" + i + "\"><td flag=\"1\"  contenteditable=\"true\" class=\"collection-item\" id=\"user-" + i + "\"></td><td flag=\"1\"  contenteditable=\"true\" class=\"collection-item\" id=\"comment-detail" + i + "\"></td><td flag=\"1\"  contenteditable=\"true\" class=\"collection-item\"></td> <td   contenteditable=\"true\" flag=\"1\" class=\"collection-item\"  ></td><td style=\"text-align:center;\"><a ><li  class=\"fa fa-minus-circle fa-2x\" id=\"commentdel" + i + "\"></li></a></td></tr>"
		$("#comment").append(tr)

		$("#commentdel" + i).click(function() {
			tr_count -= 1
			$("#comment-tr" + i).remove()
		});
	});

}

function CommentSubmit() {
	$("#send2").click(function() {
		$("tr[comment-pk='-1']").each(function() {
			var count = 0
			var user = null
			var comment = ""
			var commenttime = ""
			var commentlike = ""
			var adj = 1

			$(this).children().each(function() {
				if($(this).attr("flag") == 0) {
					return
				}
				if(adj >= 2) {
					if(adj > 2)
						return
					alert("不能有空")

				}
				txt = $(this).text()
				if(txt != '' & count == 0) { //关键词
					commentuser = txt
					$(this).attr("flag", 0)

				} else if(txt != '' & count == 1) { //评分
					comment = txt
					$(this).attr("flag", 0)
				} else if(txt != '' & count == 2) {
					commentlike = txt

					$(this).attr("flag", 0)

				} else if(txt != '' & count == 3) {
					commenttime = txt

					$(this).attr("flag", 0)
					comment_array[comment_index] = {

						"pk": -1, //-1表示新增的元素
						"commentuser": commentuser,
						"comment": comment,
						"commenttime": commenttime,
						"commentlike": parseInt(commentlike)
					}
					count = 0
					comment_index += 1
				} else {
					adj += 1
					return
				}
				count += 1

			})
		})
		$.ajax({
			type: 'POST',
			url: post_comment_url,
			data: {
				"data": JSON.stringify(comment_array),
				"pid": pid
			},

			success: function() {
				Comment(pid) //  刷新

			},
			dataType: "json"
		});

		comment_array = [] //提交一次清空数组一次
		index = 0

	})

}