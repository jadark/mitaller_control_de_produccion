var chartProgress = document.getElementById("pieProject");
var tallerProgress = window.tallerProgress;
if (chartProgress) {
  var myChartCircle = new Chart(chartProgress, {
    type: 'doughnut',
    data: {
      labels: ["Africa", 'null'],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: [
          "#ff0000",
          "#fb843e"
        ],
        data: tallerProgress.dataProgress
      }]
    },
    plugins: [{
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
    
        ctx.restore();
        var fontSize = (height / 100).toFixed(2);
        ctx.font ="bold "+ fontSize + "em sans-serif";
        ctx.fillStyle = "#4e4e4e";
        ctx.textBaseline = "middle";
    
        var text = tallerProgress.porcentageTotal,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
  }],
    options: {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false
      },
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 66
    }

  });

  
}
