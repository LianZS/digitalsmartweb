function road_info_insert(jsondata) {
    Infodata = jsondata.info;
    names = Infodata.listRoadName;
    speeds = Infodata.listSpeed;
    dir = Infodata.dir;
    rates=Infodata.rate
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
        rate = rates[i]
        expIndex[i].innerHTML = rate;
    }
    var speedIndex = document.getElementsByClassName("speed");
    for (let i = 0; i < speedIndex.length; i++) {
        speedIndex[i].innerHTML = speeds[i];
    }

}
