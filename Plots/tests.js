var Agua = {
    labels: [
        'Balance_hídrico',
        'Pendiente',
        'Indice_de_humedad_topogrófica',
        'Cuencas_hidrológicas',
        'Rangos_humedad',
        'Clima',
        'Precipitación_media_anual',
        'Regimen_humedad_del_suelo',
        'Escurrimiento_natural_superficial',
        'Indice_de_peligro_inundación'
    ],
    datasets: [{
      data: [0.1,0.2,0.260207,0.05094339623,0.02,0.1999999986,0.04,0.2,0.01452281697,0.4],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };
  var Aire ={
      labels: [
          'Temperatura media anual',
          'Precipitación total anual',
          'Precipitación media anual',
          'Altitud'
      ],
      datasets: [{
          data: [0.15,0.07894736842,0.04,0.003109383676],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
  };


  var context = document.querySelector('#graph').getContext('2d');
  new Chart(context).Radar(Agua);
    
  $("#btn1").on("click", function() {
     var context1 = document.querySelector('#graph');
    new Chart(context1).Radar(Agua);
  });
  $("#btn2").on("click", function() {
    var context2 = document.querySelector('#graph').getContext('2d');
    new Chart(context2).Radar(Aire);
  });