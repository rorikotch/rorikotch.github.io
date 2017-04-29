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

// COULDN'T GET THIS TO WORK
// $.getJSON('data.json', function(data) {
//
//     // Make codes uppercase to match the map data
//     $.each(data, function () {
//         this.code = this.code.toUpperCase();
//     });
//
//   Highcharts.mapChart('containerfive', {
//
//           chart: {
//               borderWidth: 1,
//               renderTo: 'containerfive',
//               type: 'map'
//           },
//
//           title: {
//               text: 'US Milk Producing States by Population of Dairy Cows in Thousands'
//           },
//
//           legend: {
//               layout: 'horizontal',
//               borderWidth: 0,
//               backgroundColor: 'rgba(255,255,255,0.85)',
//               floating: true,
//               verticalAlign: 'top',
//               y: 25
//           },
//
//           mapNavigation: {
//               enabled: true
//           },
//
//           colorAxis: {
//               min: 1,
//               type: 'logarithmic',
//               minColor: '#EEEEFF',
//               maxColor: '#000022',
//               stops: [
//                   [0, '#EFEFFF'],
//                   [0.67, '#4444FF'],
//                   [1, '#000022']
//               ]
//           },
//
//           series: [{
//               animation: {
//                   duration: 1000
//               },
//               data: data,
//               mapData: Highcharts.maps['countries/us/us-all'],
//               joinBy: ['postal-code', 'code'],
//               dataLabels: {
//                   enabled: true,
//                   color: '#FFFFFF',
//                   format: '{point.code}'
//               },
//               name: 'dairy cow population in thousands',
//               tooltip: {
//                   pointFormat: '{point.code}: {point.value}'
//               }
//           }]
//       });
//     });

Highcharts.chart("containerfive", {
    renderTo: "containerfive",
    title: {
        text: "U.S. Cheese Production Jan. 1990 to Jan. 2017"
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
      categories: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
        title: {
            text: "Years"
        }
    },

    plotOptions: {
        series: {
            pointStart: 1990
        }
    },

    series: [{
        name: "Production",
        data: [492980000, 501954000, 520389000, 517261000, 538029000, 561722000, 589951000, 598166000, 617245000, 636971000, 693003000, 693797000, 713939000, 709599000, 738086000, 754667000, 782370000, 828272000, 819441000, 823902000, 842519000, 883505000, 911773000, 931691000, 962429000, 994542000, 1003278000, 1044983000]
    }]
  });
