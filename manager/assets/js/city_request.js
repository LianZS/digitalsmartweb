function Get_province_city(){
	var url="http://127.0.0.1:8000/attractions/admin/provinces"
	$.get(url,function(data,state){
		data = data['data']
		provinces = new Set();
		for(let i=0;i<data.length;i++){
			provinces.add(data[i].province)
		}
		for(let item of provinces){
			newLiElements=""
			for(let i=0;i<data.length;i++){
				if(data[i].province==item){
					city = data[i].loaction
					citypid= data[i].citypid
					newLi="<li style='display: inline-block; padding: 5px 10px; white-space:nowrap;color:black' id= "+citypid+" >"+"<a href=''>"+city+"</a>"+"</li>"
					
					newLiElements+=newLi
				}
			}


			newElement="	<li><ul style='display: inline;    white-space: nowrap;color: #45B0E3;' value="+item+">"+item+"    "+newLiElements+"</ul></li>" 
			$("#province").append(newElement)
		}
	},'json')
}
