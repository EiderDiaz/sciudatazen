anychart.onDocumentReady(function () {
    // The data used in this sample can be obtained from the CDN
    // https://cdn.anychart.com/samples/maps-point-maps-dot-maps/usa-airports/data.json
    anychart.data.loadJsonFile(
      'https://cdn.anychart.com/samples/maps-point-maps-dot-maps/usa-airports/data.json',
      function (data) {
        // creates map chart
        var map = anychart.map();
        map
          .credits()
          .enabled(true)
          .url(
            'https://opendata.socrata.com/dataset/Airport-Codes-mapped-to-Latitude-Longitude-in-the-/rxrh-4cxm'
          )
          .text('Data source: https://opendata.socrata.com')
          .logoSrc(
            'https://opendata.socrata.com/stylesheets/images/common/favicon.ico'
          );
  
        map
          .unboundRegions()
          .enabled(true)
          .fill('#E1E1E1')
          .stroke('#D2D2D2');
  
        // sets geodata
        map.geoData('anychart.maps.united_states_of_america');
  
        // sets Chart Title
        map
          .title()
          .enabled(true)
          .useHtml(true)
          .padding([0, 0, 10, 0])
          .text(
            'Airports in the United States<br/><span style="color:#929292; font-size: 12px;">' +
            'According to opendata.socrata.com<br/>Cities and names were collected from Wikipedia.org</span>'
          );
  
        // sets marker series for airports
        var series = map.marker(anychart.data.set(data));
  
        // sets Tooltip for series
        series
          .tooltip()
          .useHtml(true)
          .padding([8, 13, 10, 13])
          .title(false)
          .separator(false)
          .fontSize(14)
          .format(function () {
            return (
              '<span>' +
              this.getData('name') +
              '</span><br/>' +
              '<span style="font-size: 12px; color: #E1E1E1">City: ' +
              this.getData('city') +
              '</span>'
            );
          });
  
        // sets settings for marker-airports series
        series
          .size(5)
          .labels(false)
          .stroke(null)
          .stroke('2 #E1E1E1')
          .fill('#1976d2')
          .selectionMode('none');
  
        // create zoom controls
        var zoomController = anychart.ui.zoom();
        zoomController.render(map);
  
        // sets container id for the chart
        map.container('container');
        // initiates chart drawing
        map.draw();
      }
    );
  });