function realtimeFlow(area_pid,dbegin,dend){
	this.url = "http://127.0.0.1:8000/attractions/api/getLocation_pn_percent_new"
	$.get(this.url,{
		pid :area_pid,
		date_begin:dbegin,
		date_end:dend,
		predict:true,
		sub_domain:''
		
	},function(data,state){
		data = data['data'];
		timeList = new Array(data.length);//时间
		numList = new Array(data.length);//人数

		for(let i=0;i<data.length;i++){
			timeList[i]=data[i][0];
			numList[i]=data[i][1];
		}
		json ={
			"data":numList,
			"time":timeList
		}
		var obj = new drawAreaChart(json);
		
	},'json');
	
}

function SearchRate(area_pid,dbegin,dend){
	this.url ="http://127.0.0.1:8000/attractions/api/getLocation_search_rate"
	$.get(this.url,{
		pid :area_pid,
		date_begin:dbegin,
		date_end:dend,
		sub_domain:''
		
	},function(data,state){
		console.log(data);
		alert(data);
		

	
	},'json');
	
}
