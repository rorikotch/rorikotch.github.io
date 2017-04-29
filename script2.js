Highcharts.chart("containerfour", {


    title: {
        text: "U.S. Milk Production from 2010 to 2017"
    },

    subtitle: {
        text: "This data was sourced from the U.S.D.A. Department of Agriculture"
    },

    yAxis: {
        title: {
            text: "Millions of Pounds"
        }
    },

    xAxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
        title: {
            text: "Years"
        }
    },

    plotOptions: {
        series: {
            pointStart: 2010
        }
    },

    series: [{
        name: "Production",
        data: [16013000000, 16396000000, 17048000000, 17114000000, 17278000000, 17690000000, 17693000000, 18145000000 ]
    }]
  });


$.getJSON('data.json', function(data) {

    // Make codes uppercase to match the map data
    $.each(data, function () {
        this.code = this.code.toUpperCase();
    });

  Highcharts.mapChart('containerfive', {

          chart: {
              borderWidth: 1,
              renderTo: 'containerfive',
              type: 'map'
          },

          title: {
              text: 'US Milk Producing States by Population of Dairy Cows in Thousands'
          },

          legend: {
              layout: 'horizontal',
              borderWidth: 0,
              backgroundColor: 'rgba(255,255,255,0.85)',
              floating: true,
              verticalAlign: 'top',
              y: 25
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
              name: 'dairy cow population in thousands',
              tooltip: {
                  pointFormat: '{point.code}: {point.value}'
              }
          }]
      });
    });
