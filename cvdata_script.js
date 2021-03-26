

function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/poland/pol_case_data_rev.csv", function(data){ processCaseData(data) } );
    Plotly.d3.csv("https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/poland/pol_death_data_rev.csv", function(data){ processDeathData(data) } );

  };

  function processCaseData(allRows){
      var x = [], y = [];

    for (var i=0; i<allRows.length; i++) {
        row = allRows[i];
        x.push( row['Dates'] );
        y.push( row['Case'] );
    }
    makePlotJs(x,y);
  }


  function makePlotJs(x, y){
      var plotDiv = document.getElementById("chartData");
      var traces = [{x: x, y: y, name: 'Cases'}];
      Plotly.newPlot('chartData', traces, {title: 'Covid Data'});
  }

  function processDeathData(allRows){
    var x = [], y = [];

    for (var i=0; i<allRows.length; i++) {
        row = allRows[i];
        x.push( row['Dates'] );
        y.push( row['Death'] );
    }
    var traces = [{x: x, y: y, name: 'Deaths'}];

    Plotly.addTraces('chartData', traces);


  }