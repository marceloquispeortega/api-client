var apiURL = 'https://api.darksky.net/forecast';
var apiMethod = 'GET';
var params = {
    'apikey': '5272c4fbda9461cb307d735ba7f2f5d7',
    'latitud': -19.03,
    'longitud': -65.26
};

// https://api.darksky.net/forecast/5272c4fbda9461cb307d735ba7f2f5d7/-19.03,-65.26

function darksky() {
    // console.log(params.apikey)
    var response = $.ajax(apiURL + '/' + params.apikey + '/' + params.latitud + ',' + params.longitud, {
        async: false,
        dataType: params.format,
        timeout: 500,
        data: [],
        success: function (data, status) {
            console.log(data);
        }
    });

    return response;
}
