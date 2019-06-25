function Listen(json, IdName) {
    var tags = document.getElementsByClassName('route');
    var lines = document.getElementsByClassName("paiming");
    for (var i = 0; i < tags.length; i++) {
        $(".route").hover(function () {
            $(this).css("background-color", "gray");
        }, function () {

            $(this).css("background-color", "transparent");
            // $(this).attr("done", "false");


        });
        let num = lines[i].innerHTML;
        tags[i].addEventListener('click', function () {
            // $(this).attr("done", "true");

            new RouteMap(json, num);
            new CityChart(IdName).setData(json, num);
        })
    }
}