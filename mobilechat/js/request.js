function request() {
	let url = "http://scenicmonitor.top/internet/api/app/appinfo?"
	appid = getParams("appid")
	$.get(url, {
		"appid": appid
	}, function(data) {
		sex_data = data['sex']
		let ddate_array = new Array()
		let bboy = new Array()
		let ggirl = new Array()

		for(let i = 0; i < sex_data.length; i++) {
			sex = sex_data[i]

			ddate_array[i] = sex['ddate']
			bboy[i] = sex['boy']
			ggirl[i] = sex['girl']

		}
		try {
			let boy = parseInt(sex['boy'] * 100)
			let girl = parseInt(sex['girl'] * 100)
			$("#male-rate").text(boy + "%")
			$("#female-rate").text(girl + "%")
			draw_sex_linechart("sex-chart", ddate_array, bboy, ggirl)
		} catch(e) {

		}
		try {
			age_data = data['age']
			ddate_array = new Array()
			let under_nineth_array = new Array()
			let nin_twen_array = new Array()
			let twe_thir_array = new Array()
			let thir_four_array = new Array()
			let four_fift_array = new Array()
			let over_fift_array = new Array()

			for(let i = 0; i < age_data.length; i++) {
				ddate = age_data[i]['ddate']
				under_nineth = age_data[i]['under_nineth']
				nin_twen = age_data[i]['nin_twen']
				twe_thir = age_data[i]['twe_thir']
				thir_four = age_data[i]['thir_four']
				four_fift = age_data[i]['four_fift']
				over_fift = age_data[i]['over_fift']
				ddate_array[i] = ddate
				under_nineth_array[i] = under_nineth
				nin_twen_array[i] = nin_twen
				twe_thir_array[i] = twe_thir
				thir_four_array[i] = thir_four
				four_fift_array[i] = four_fift
				over_fift_array[i] = over_fift

			}
			draw_age_barchart("age-barchart", under_nineth, nin_twen, twe_thir, thir_four, four_fift, over_fift)
			draw_age_linechart("age-linechart", ddate_array, under_nineth_array, nin_twen_array, twe_thir_array, thir_four_array, four_fift_array, over_fift_array)

		} catch(e) {
			//TODO handle the exception
		}
		try {
			active_data = data['active']

			ddate_array = []
			let activenum_array = new Array()
			let activerate_array = new Array()
			let aver_activerate_array = new Array()
			let base_activerate_array = new Array()
			for(let i = 0; i < active_data.length; i++) {
				activenum = active_data[i]['activenum']
				activerate = active_data[i]['activerate']
				aver_activerate = active_data[i]['aver_activerate']
				base_activerate = active_data[i]['base_activerate']
				ddate = active_data[i]['ddate']
//				activenum_array[i] = activenum
//				aver_activerate_array[i] = aver_activerate
//				activerate_array[i] = activerate
//				base_activerate_array[i] = base_activerate
//				ddate_array[i] = ddate
				activenum_array[ddate] = activenum
				aver_activerate_array[ddate] = aver_activerate
				activerate_array[ddate] = activerate
				base_activerate_array[ddate] = base_activerate
				ddate_array[i] = ddate

			}
			ddate_array = ddate_array.sort()
			let tmp_activenum_array = new Array()
			let tmp_activerate_array = new Array()
			let tmp_aver_activerate_array = new Array()
			let tmp_base_activerate_array = new Array()
			for(let i=0;i<ddate_array.length;i++){
				ddate = ddate_array[i]
			    tmp_activenum_array[i] = activenum_array[ddate]
				tmp_aver_activerate_array[i] = activerate_array[ddate]
				tmp_activerate_array[i] =activerate_array[ddate]
				tmp_base_activerate_array[i] = base_activerate_array[ddate]
			}
			console.log(activenum_array)
			draw_activerate_linechart("active-rate-chart", ddate_array, tmp_activerate_array, tmp_base_activerate_array, tmp_aver_activerate_array)
			draw_active_areachart("active-chart", ddate_array, tmp_activenum_array)
		} catch(e) {
			console.log(e)
		}
		try {
			like_data = data['like']
			let keyword_array = new Array()
			let rate_array = new Array()
			for(let i = 0; i < like_data.length; i++) {
				keyword = like_data[i]['keyword']
				rate = like_data[i]["rate"]
				keyword_array[i] = keyword
				rate_array[i] = rate

			}
			draw_keyword_rate_barchart("app-like", keyword_array, rate_array)
		} catch(e) {
			//TODO handle the exception
		}
		try {
			province_data = data['area']
			let ddate_map = []
			let proinve_array = new Array()
			for(let i = 0; i < province_data.length; i++) {
				proince = province_data[i]['province']
				proinve_array[i] = proince
				ddate = province_data[i]['ddate']
				ddate_map[ddate] = 1

			}
			ddate_array = []
			ddate_array = Object.keys(ddate_map)
			let proinve_set = new Set(proinve_array)
			let collections = new Array()
			let count_map = new Array()
			for(let item of proinve_array) {
				collections[item] = new Array()
				count_map[item] = 0
			}
			for(let i = 0; i < province_data.length; i++) {

				let proince = province_data[i]['province']

				let rate = province_data[i]['rate']
				let index = count_map[proince]

				collections[proince][index] = rate
				count_map[proince] = index + 1

			}
			draw_province_rate_linechart("province-rate-chart", ddate_array, proinve_set, collections)
		} catch(e) {
			//TODO handle the exception
		}

	}, 'json')

}

function getParams(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return decodeURI(r[2]);
	return null;

};