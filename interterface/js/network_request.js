function network_request() {
	let url = "http://scenicmonitor.top/internet/api/mobile/networkShare"
	let color = ['#EE07FD', '#E28ACB', '#FDC907','#07A0FD', '#6007FD', '#9107FD' ]

	$.get(url, {}, function(data) {
		
		var network_data = data['share']
		var network_map = new Array()
		var network_rate_array = new Array()
		var ddate_array = new Array()
		var index_map = new Array()
		for(let i = 0; i < network_data.length; i++) {
			let network = network_data[i]
			let name = network['pid__name']
			let ddate = network['ddate']
			let rate = network["rate"]
			network_map[name] = rate
			index = index_map[name]

			if(index == null) {
				network_rate_array[name] = new Array()
				ddate_array[name] = new Array()
				index = 0

			}
			network_rate_array[name][index] = rate
			ddate_array[name][index] = ddate
			network_map[name] = rate //更新最新数据
			index_map[name] = index + 1
		}
		draw_detail_system_rate("network", network_map)
		networks = Object.keys(network_map)

		rate_array = new Array()
		for(let i = 0; i < networks.length; i++) {
			network = networks[i]
			rates = network_rate_array[network]
			rate_array[i] = {
				name: network,
				type: 'line',
				data: rates,
				color: color[i]
			}
		}
		console.log(network_map)
		draw_brand_rate("network-rate", networks, ddate_array[network], rate_array)
	}, "json")
}