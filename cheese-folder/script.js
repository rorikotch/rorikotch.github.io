Highcharts.chart("container", {

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

  Highcharts.chart("containertwo", {

      title: {
          text: "U.S. Exports Exports by Volume in Metric Tons"
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
          name: "Exports",
          data: [28397, 74913, 78475, 66905, 75005, 68464, 82246]
      }]
    })

    Highcharts.chart('containerthree', {

        title: {
            text: 'Milk Cows by Region from 2011 to 2015'
        },

        subtitle: {
            text: 'Source: U.S.D.A. ERS'
        },

        xAxis: {
          categories: [2011, 2012, 2013, 2014, 2015, 2016, 2017],
            title: {
                text: "Years"
            }
        },

        yAxis: {
            title: {
                text: 'Number of Dairy Cows'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                pointStart: 2011
            }
        },

        series: [{
            name: 'Northeast Region',
            data: [1429, 1420, 1415, 1416, 1417]
        }, {
            name: 'Lake States',
            data: [2009, 2110, 2115, 2121, 2147]
        }, {
            name: 'Corn Belt Region',
            data: [837, 842, 842, 835, 842]
        }, {
            name: 'Northern Plains Region',
            data: [290, 292, 300, 308, 322]
        }, {
            name: 'Appalachian Region',
            data: [277, 276, 270, 257, 253]
        }, {
            name: 'Southeast Region',
            data: [224, 229, 228, 228, 231]
        }, {
            name: 'Delta States',
            data: [44, 41, 39, 35, 32]
        }, {
            name: 'Southern Plains',
            data: [484, 484, 482, 503, 502]
        }, {
          name: 'Mountain Region',
            data: [1365, 1375, 1367, 1379, 1394]
        }, {
          name: 'Pacific Region',
          data: [2152, 2169, 2172, 2180, 2183]
      }, {
      }]

    });
