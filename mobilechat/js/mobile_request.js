function brand_request(){
	let url ="http://127.0.0.1:8000/internet/api/mobile/publicBrandshare"
	$.get(url,{},function(data){
		brands = data["share"]
		var brand_map=new Array()
		for(let i=0;i<brands.length;i++){
			let name = brands[i]['pid__name']
			let ddate = brands[i]['ddate']
			let rate = brands[i]['rate']
			brand_map[name] = rate//更新最新数据
		}
		draw_brand_circle("brand",brand_map)
	})
}
