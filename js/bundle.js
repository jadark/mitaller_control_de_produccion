/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
	document.querySelector(".box_Tabs").addEventListener('click', function (evn) {
	  if (evn.target == this) {
	    this.classList.remove("open");
	  }
	})
	// Detectar Status del proceso
	const selectStatus = document.querySelector("#status");
	if (selectStatus.value != 5) {
	  document.querySelector(".box_Tabs").classList.add("closed");
	  document.querySelector(".box_etapa").classList.add("closed");
	}
	selectStatus.addEventListener("change", function (e) {
	  if (this.value == 5) {
	    document.querySelector(".box_Tabs").classList.remove("closed")
	    document.querySelector(".box_etapa").classList.remove("closed");
	  } else { 
	    document.querySelector(".box_Tabs").classList.add("closed")
	    document.querySelector(".box_etapa").classList.add("closed");
	  }
	})

	// Dropdrown Select Etapa de proceso
	document.querySelector(".line_etapa").addEventListener('click', function (event) {
	  event.preventDefault();
	  document.querySelector(".box_Tabs").classList.add("open");
	  // var container = document.querySelector(".box_container .box_inner");
	  //   if (!container.classList.contains('active')) {
	  //     container.classList.add('active');
	  //     container.style.height = 'auto';
	  //     var height = container.clientHeight + 'px';
	  //     container.style.height = '0px';
	  //     setTimeout(function () {
	  //       container.style.height = height;
	  //     }, 0);
	  //   } else {
	  //     container.style.height = '0px';
	  //     container.addEventListener('transitionend', function () {
	  //       container.classList.remove('active');
	  //     }, {
	  //       once: true
	  //     });
	  //   }
	})

	// Se ejcuta cuando se hace click en el listado de Etapas de proceso
	var pestTabNew = document.querySelectorAll(".pesTabNew");
	for (var i = 0; i < pestTabNew.length; i++) {
	  pestTabNew[i].addEventListener('click', function (evn) {
	    setTimeout(() => {
	      document.querySelector(".box_Tabs").classList.remove("open");
	    }, 100);
	  })
	}


/***/ })
/******/ ]);
