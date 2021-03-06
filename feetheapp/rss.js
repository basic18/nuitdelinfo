$(function () {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Tsumeb&appid=db0a7231ff0f4f8b2f6ed8cad4d225c5', function (data) {
        console.log(data);
        var temp = data.main.temp;
        var humidity = data.main.humidity;
        var pressure = data.main.pressure;
        $("#temperature").text(pressure + " °F");
        $("#humidity").text(humidity + " % rh");
        $("#pression").text(pressure + " hPa");
        var now = new Date();
        var formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        $("#datemaj").text(formatted);

    });

    $.ajax({
        type: 'GET',
        url: 'https://www.midilibre.fr/lozere/rss.xml',
        crossDomain: true,
        dataType: 'jsonp',
        success: parseXml
    });

    function parseXml(xml) {
        $(xml).find('entry').each(function () {
            $("#output").append($(this).find('title').text() + "<br />");
        });
    }

});