mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyaXhkIiwiYSI6ImNrbXcyOWg3eTBhdG8ycG16M3V0d3loaHYifQ.3EJgFxKQrNa10lyNYceH9g';
var mappa = new mapboxgl.Map({
  container: 'mappa', // container ID
  style: 'mapbox://styles/sarixd/ckmw4rpln08so17s3z4noxhf4',
  center: [-8.224454, 39.399872], // longitude e latitude
  zoom: 5, // zoom de 0 a 22-mais perto
  minZoom: 4
});

// desativa a rotação no mapa
mappa.dragRotate.disable();


mappa.on('load', () => {


  mappa.addSource('pointsSource', {
    type: 'geojson',
    cluster: true,
    clusterRadius: 50,
    data:
    'https://raw.githubusercontent.com/SmendesD/test/master/locais.geojson'
   /* {
      "type": "FeatureCollection",
      "features": [{
          "type": "Feature",
          "properties": {
            "text": "Só um teste."
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              -8.421707153320312,
              40.213489431905735
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "text": "Qualquer coisa."
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              -9.134445190429688,
              38.710160941206645
            ]
          }
        },
        {
          "type": "Feature",
          "properties": {
            "text": "TESTtestetstetst."
          },
          "geometry": {
            "type": "Point",
            "coordinates": [
              -8.446018695831299,
              40.241585635241194
            ]
          }
        }
      ]
    }*/
  });

  mappa.addLayer({
    id: 'points',
    source: 'pointsSource',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': 'white',
      'circle-stroke-width': 2
    }
  });
  //aparecer o numero de sons num ponto
  mappa.addLayer({
    id: 'contagem',
    type: 'symbol',
    source: 'pointsSource',

    layout: {
      'text-field': '{point_count}',
      'text-size': 12
    }
  });
});




//popup
mappa.on('click', e => {
  const result = mappa.queryRenderedFeatures(e.point, {
    layers: ['points']
  });
  if (result.length) {
    const popup = new mapboxgl.Popup({
      closeButton: false
    });
    const content = result[1];
    popup.setLngLat(e.lngLat)
      .setHTML('<h1>'+ 'Som' + '</h1>'+ '<h3>'+ content.properties.text +'</h3>' + content.properties.audio  )
      .addTo(mappa);
  }

  console.log('click', e.lngLat); //coordenadas do rato
});

//controlos do mapa
var nav = new mapboxgl.NavigationControl({
        showCompass: false,
        showZoom: true
      });
mappa.addControl(nav, 'bottom-left');


function setup() {
  createCanvas(400, 400);

}

function draw() {

}