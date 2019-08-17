function brand_request() {
	let url = "http://127.0.0.1:8000/internet/api/mobile/publicBrandshare"
	let color=['#FDC907', '#F2FD07', '#c23531', '#A7FD07', '#34FD07', '#07FDA0', '#07F9FD', '#07A0FD', '#6007FD', '#9107FD', '#EE07FD', '#E28ACB', '#FDC907', '#F2FD07', '#c23531', '#A7FD07', '#34FD07', '#07FDA0', '#07F9FD']
	$.get(url, {}, function(data) {
		brands = data["share"]
		var brand_map = new Array()
		var brand_rate_array = new Array()
		var ddate_array = new Array()
		var index_map = new Array()
		for(let i = 0; i < brands.length; i++) {
			let name = brands[i]['pid__name']
			let ddate = brands[i]['ddate']
			let rate = brands[i]['rate']

			index = index_map[name]

			if(index == null) {
				brand_rate_array[name] = new Array()
				ddate_array[name] =new Array()
				index = 0

			}
			brand_rate_array[name][index] = rate
			ddate_array[name][index] = ddate
			brand_map[name] = rate //更新最新数据
			index_map[name] = index+1
		}
		brands = Object.keys(brand_map)
		draw_brand_circle("brand", brand_map)

		rate_array = new Array()
		for(let i = 0; i < brands.length; i++) {
			brand = brands[i]
			rates = brand_rate_array[brand]
			rate_array[i] = {
				name: brand,
				type: 'line',
			
				data: rates,
				color:color[i]
			}
		}
		draw_brand_rate("brand-rate",brands, ddate_array[brand], rate_array)
	})
}