Highcharts.chart("containerfour", {


    title: {
        text: "U.S. MILK PRODUCTION FROM 2010 TO 2017"
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

Highcharts.chart("chart", {
    renderTo: "chart",
    title: {
        text: "U.S. CHEESE PRODUCTION FROM JAN. 1990 TO JAN. 2017"
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


  // Get the modal
var modal = document.getElementById('modal-one');

// Get the button that opens the modal
var btn = document.getElementById("button-one");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
