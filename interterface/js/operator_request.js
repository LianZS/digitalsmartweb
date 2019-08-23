function operator_request() {
	let url = "http://scenicmonitor.top/internet/api/mobile/operatorShare"
	let color = ['#EE07FD', '#E28ACB', '#FDC907','#07A0FD', '#6007FD', '#9107FD' ]

	$.get(url, {}, function(data) {
		var operator_data = data['share']
		var operator_map = new Array()
		var operator_rate_array = new Array()
		var ddate_array = new Array()
		var index_map = new Array()
		for(let i = 0; i < operator_data.length; i++) {
			let operator = operator_data[i]
			let name = operator['pid__name']
			let ddate = operator['ddate']
			let rate = operator["rate"]
			operator_map[name] = rate
			index = index_map[name]

			if(index == null) {
				operator_rate_array[name] = new Array()
				ddate_array[name] = new Array()
				index = 0

			}
			operator_rate_array[name][index] = rate
			ddate_array[name][index] = ddate
			operator_map[name] = rate //更新最新数据
			index_map[name] = index + 1
		}
		draw_detail_system_rate("operator", operator_map)
		operators = Object.keys(operator_map)

		rate_array = new Array()
		for(let i = 0; i < operators.length; i++) {
			operator = operators[i]
			rates = operator_rate_array[operator]
			rate_array[i] = {
				name: operator,
				type: 'line',
				data: rates,
				color: color[i]
			}
		}
		draw_brand_rate("operator-rate", operators, ddate_array[operator], rate_array)
	}, "json")
}