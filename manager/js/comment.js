function Comment(pid) {
	this.url = "http://127.0.0.1:8000/attractions/api/getComment?"
	//	var img_url = "http://127.0.0.1:8000/media/"
	var post_url = "http://127.0.0.1:8000/attractions/admin/uploadComment?"

	var tr_count = 0; //记录tr的数目
	var index = 0 //数组游标
	$.get(this.url, {
		"pid": pid
	}, function(data, state) {
		var j = 0;
		var array = new Array()

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
				tr_count -= 1
				pk = $("#comment-tr" + i).attr("comment-pk")
				array[index] = {
					"pk": parseInt(pk), //表示要删除的元素
					"commentuser": "",
					"comment": "",
					"commenttime": "",
					"commentlike": ""
				}
				index += 1
				$("#comment-tr" + i).remove()
			})
			tr_count += 1
			j = i
		}
		$("#add-comment-tr").click(function() {
			if(tr_count >= 100) {
				alert("最大只能拥有100条数据")
				return
			}
			j += 1;
			tr_count += 1

			let i = j;
			tr = "<tr comment-pk=\"-1\" class=\"collection-item\" id=\"comment-tr" + i + "\"><td flag=\"1\"  contenteditable=\"true\" class=\"collection-item\" id=\"user-" + i + "\"></td><td flag=\"1\"  contenteditable=\"true\" class=\"collection-item\" id=\"comment-detail" + i + "\"></td><td flag=\"1\"  contenteditable=\"true\" class=\"collection-item\"></td> <td   contenteditable=\"true\" flag=\"1\" class=\"collection-item\"  ></td><td style=\"text-align:center;\"><a ><li  class=\"fa fa-minus-circle fa-2x\" id=\"commentdel" + i + "\"></li></a></td></tr>"
			$("#comment").append(tr)

			$("#commentdel" + i).click(function() {
				tr_count -= 1
				$("#comment-tr" + i).remove()
			});
		});

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
						array[index] = {
							
							"pk": -1, //-1表示新增的元素
							"commentuser": commentuser,
							"comment": comment,
							"commenttime": commenttime,
							"commentlike": parseInt(commentlike)
						}
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
					Comment(pid) //  刷新

				},
				dataType: "json"
			});

			array = [] //提交一次清空数组一次
			index = 0

		})

	}, 'json')
}