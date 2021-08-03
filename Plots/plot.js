var data = {
  labels: ['January', 'February', 'March'],
  
  datasets: [
      {
      
      data: [30,120,90]
      },
      {
      fillColor: "rgba(100,220,220,0.7)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [10,70,110]
      }
  ]
  };

var data1 = {
  labels: ['March', 'Apr', 'May'],
  
  datasets: [
      {
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [50,100,140]
      },
      {
      fillColor: "rgba(100,220,220,0.7)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [40,70,200]
      }
  ]
  };

var context = document.querySelector('#graph').getContext('2d');
new Chart(context).Line(data);
  
$("#btn1").on("click", function() {
   var context1 = document.querySelector('#graph').getContext('2d');
  new Chart(context1).Line(data);
});
$("#btn2").on("click", function() {
  var context2 = document.querySelector('#graph').getContext('2d');
  new Chart(context2).Line(data1);
});