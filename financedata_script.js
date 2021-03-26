

function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/freemanbach/itec225/main/financedata/src/orcl/orcl_close_data.csv", function(data){ processCaseData(data) } );
    Plotly.d3.csv("https://raw.githubusercontent.com/freemanbach/itec225/main/financedata/src/uber/uber_close_data.csv", function(data){ processDeathData(data) } );

  };

  function processCaseData(allRows){
      var x = [], y = [];

    for (var i=0; i<allRows.length; i++) {
        row = allRows[i];
        x.push( row['date'] );
        y.push( row['close'] );
    }
    makePlotJs(x,y);
  }


  function makePlotJs(x, y){
      var plotDiv = document.getElementById("chartData");
      var traces = [{x: x, y: y, name: 'Oracle'}];
      Plotly.newPlot('chartData', traces, {title: 'Financial Data'});
  }

  function processDeathData(allRows){
    var x = [], y = [];

    for (var i=0; i<allRows.length; i++) {
        row = allRows[i];
        x.push( row['date'] );
        y.push( row['close'] );
    }
    var traces = [{x: x, y: y, name: 'Uber'}];

    Plotly.addTraces('chartData', traces);


  }