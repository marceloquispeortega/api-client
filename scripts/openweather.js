var apiURL = 'http://api.openweathermap.org/data/2.5/weather';
var apiMethod = 'GET';
var params = {
    'format': 'json',
    'id': '3903987',
    'appid': '1fdac2d1356cbfc0181c6d13b508e5bb',
    'units': 'metric'
};

// api.openweathermap.org/data/2.5/weather?id=3903987&appid=1fdac2d1356cbfc0181c6d13b508e5bb&mode=json&lang=es_es

function openweather() {
    var response = $.ajax(apiURL, {
        async: false,
        dataType: params.format,
        timeout: 500,
        data: params,
        success: function (data, status) {
            console.log(data);
        },
        crossDomain: true
    });

    return response;
}
