function system_request() {
	let url = "http://scenicmonitor.top/internet/api/mobile/systemShare"
	let color = ['#FDC907', '#F2FD07', '#c23531', '#A7FD07', '#34FD07', '#07FDA0', '#07F9FD', '#07A0FD', '#6007FD', '#9107FD', '#EE07FD', '#E28ACB', '#FDC907', '#F2FD07', '#c23531', '#A7FD07', '#34FD07', '#07FDA0', '#07F9FD']
	androids = ["Android4", "Android2", "Android5", "Android6", "Android7", "Android8"]
	$.get(url, {}, function(data) {
		android_data = data["android"]
		var system_map = new Array()
		var system_rate_array = new Array()
		var ddate_array = new Array()
		var index_map = new Array()
		var ddate_flag = new Array() //判断日期是否重复了
		for(let i = 0; i < android_data.length; i++) {
			let system = android_data[i]
			let systemversion = system['pid__version']
			let ddate = system['ddate']
			let rate = system['rate']
			version = systemversion.match(/\d/)
			version = "Android" + version[0]
			index = index_map[version]
			flag = ddate_flag[version]

			if(index == null) {
				system_rate_array[version] = new Array()
				ddate_array[version] = new Array()

				index = 0

			}
			if(ddate == flag) {
				system_rate_array[version][index] = system_rate_array[version][index] + rate //相同日期的相加占有率

			} else {

				system_rate_array[version][index] = rate
				ddate_array[version][index] = ddate
				ddate_flag[version] = ddate
				index_map[version] = index + 1
			}

			system_map[version] = rate
		}
		draw_detail_system_rate("andoird", system_map)
		systems = Object.keys(system_map)
		rate_array = new Array()
		len = 0
		longest_ddate = ''
		for(let i = 0; i < systems.length; i++) {
			system = systems[i]
			dates = ddate_array[system]
			if(dates.length > len) {
				longest_ddate = dates //获取最长的时间段
				len = dates.length
			}

		}
		for(let i = 0; i < systems.length; i++) {
			system = systems[i]
			dates = ddate_array[system]
			pre_rate_array = new Array()
			date = dates[0] //开始时间，前面没有数据的话补0
			for(let j = 0; j < longest_ddate.length; j++) {
				pre_date = longest_ddate[j]
				if(pre_date == date) {
					rates = system_rate_array[system]
					for(let k = 0; k < dates.length; k++) {
						pre_rate_array[j + k] = rates[k]

					}
					j = dates.length + j
				} else {
					pre_rate_array[j] = 0

				}
				if(pre_rate_array.length == longest_ddate.length) {
					break
				}

			}
			rates = pre_rate_array.concat(system_rate_array[system])
			rate_array[i] = {
				name: system,
				type: 'line',
				data: rates,
				color: color[i]
			}
		}
		draw_brand_rate("andoird-rate", systems, longest_ddate, rate_array)
		apple_data = data["apple"]
		system_map = new Array()
		system_rate_array = new Array()
		ddate_array = new Array()
		index_map = new Array()
		ddate_flag = new Array() //判断日期是否重复了
		for(let i = 0; i < apple_data.length; i++) {
			let system = apple_data[i]
			let systemversion = system['pid__version']
			let ddate = system['ddate']
			let rate = system['rate']
			version = systemversion.match(/\d+/)
			version = "OS" + version[0]
			index = index_map[version]
			flag = ddate_flag[version]

			if(index == null) {
				system_rate_array[version] = new Array()
				ddate_array[version] = new Array()

				index = 0

			}
			if(ddate == flag) {
				system_rate_array[version][index] = system_rate_array[version][index] + rate //相同日期的相加占有率

			} else {

				system_rate_array[version][index] = rate
				ddate_array[version][index] = ddate
				ddate_flag[version] = ddate
				index_map[version] = index + 1
			}

			system_map[version] = rate
		}
		draw_detail_system_rate("apple", system_map)
		systems = Object.keys(system_map)
		rate_array = new Array()
		len = 0
		longest_ddate = []
		
		for(let i = 0; i < systems.length; i++) {
			system = systems[i]
			dates = ddate_array[system]
			
			for(let j=0;j<dates.length;j++){
				longest_ddate.push(dates[j])
			}
			
		}
		longest_ddate = new Set(longest_ddate)
		temp = new Array()
		for(let item of longest_ddate){//  转数组
			temp.push(item)
		}
		longest_ddate=temp
		for(let i = 0; i < systems.length; i++) {//数据的话补0
			system = systems[i]
			dates = ddate_array[system]
			pre_rate_array = new Array()
			date = dates[0] 
			for(let j = 0; j < longest_ddate.length; j++) {
				pre_date = longest_ddate[j]
				if(pre_date == date) {
					rates = system_rate_array[system]
					for(let k = 0; k < dates.length; k++) {
						pre_rate_array[j + k] = rates[k]

					}
					j = dates.length + j
				} else {
					pre_rate_array[j] = 0

				}
				if(pre_rate_array.length == longest_ddate.length) {
					break
				}

			}
			rates = pre_rate_array.concat(system_rate_array[system])
			rate_array[i] = {
				name: system,
				type: 'line',
				data: rates,
				color: color[i]
			}
		}
		draw_brand_rate("apple-rate", systems, longest_ddate, rate_array)

	}, 'json')
}