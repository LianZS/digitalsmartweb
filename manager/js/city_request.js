function Get_province_city() {
	var url = "http://scenicmonitor.top/attractions/admin/provinces"
	var area_url = "http://scenicmonitor.top/attractions/api/getRegionsByCity"
	$.get(url, function(data, state) {
		data = data['data']
		provinces = new Set();
		for(let i = 0; i < data.length; i++) {
			provinces.add(data[i].province)
		}
		for(let item of provinces) {
			newLiElements = ""
			for(let i = 0; i < data.length; i++) {
				if(data[i].province == item) {
					city = data[i].loaction
					citypid = data[i].citypid
					href = "scencedetail.html?province=" + item + "&" + "location=" + city + "&citypid=" + citypid
					newLi = "<li style='display: inline-block; padding: 5px 10px; white-space:nowrap;color:black' pid= " + citypid + " value=" + item + " >" +
						"<a href=" + href + ">" + city + "</a>" + "</li>"

					newLiElements += newLi
				}
			}

			newElement = "	<li><ul style='display: inline;    white-space: nowrap;color: #45B0E3;' value=" + item + ">" + item + "    " + newLiElements + "</ul></li>"
			$("#province").append(newElement)
		}

	}, 'json');

}

function load_area_pic(pro, city, citypid) {
	var area_url = "http://scenicmonitor.top/attractions/api/getRegionsByCity"

	$.get(area_url, {
		province: pro,
		location: city,
		citypid: citypid
	}, function(data, state) {
		data = data['area']
		for(let i = 0; i < data.length; i++) {
			area = data[i]['area']
			pid = data[i]['pid'];
			new Cover_Image_reuqest(pid,area)

		}

	}, 'json');
}