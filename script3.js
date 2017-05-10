/////
$.getJSON('http://cheeseproject.me/data.html?', function (data) {

    // Make codes uppercase to match the map data
    $.each(data, function () {
        this.code = this.code.toUpperCase();
    });

    // Instanciate the map
    Highcharts.mapChart('annoying', {

        chart: {
            borderWidth: 0
        },

        title: {
            text: 'CHEESE PRODUCING STATES BY THOUSANDS OF COWS'
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'top',
            y: 300 ,
            x: 350
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 1,
            type: 'logarithmic',
            minColor: '#EEEEFF',
            maxColor: '#000022',
            stops: [
                [0, '#EFEFFF'],
                [0.67, '#4444FF'],
                [1, '#000022']
            ]
        },

        series: [{
            animation: {
                duration: 1000
            },
            data: data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                format: '{point.code}'
            },
            name: 'Cows by Thousand',
            tooltip: {
                pointFormat: '{point.code}: {point.value}'
            }
        }]
    });
});
