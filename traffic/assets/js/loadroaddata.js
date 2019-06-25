function loaddata(json) {
	
    Infodata = json.roadData.info;
    names = Infodata.listRoadName;
    speeds = Infodata.listSpeed;
    realData = json.roadData.data;
    dir = Infodata.dir;
    var roadname = document.getElementsByClassName("name");
    for (let i = 0; i < roadname.length; i++) {
        roadname[i].innerHTML = names[i];
    }
    var direction = document.getElementsByClassName("dir");
    for (let i = 0; i < direction.length; i++) {
        direction[i].innerHTML = dir[i];
    }
    var expIndex = document.getElementsByClassName("exp");

    for (let i = 0; i < expIndex.length; i++) {
        b = realData[i].data.length;
        expIndex[i].innerHTML = realData[i].data[b - 1];
    }
    var speedIndex = document.getElementsByClassName("speed");
    for (let i = 0; i < speedIndex.length; i++) {
        speedIndex[i].innerHTML = speeds[i];
    }

}
