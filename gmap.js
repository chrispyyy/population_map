// This creates circles on a google map, representing populations for internships and residence

// Creating objects containing LatLng and population for each city.
var citymap = {
  //internships
  bangkok: {
    center: {lat: 13.756, lng: 100.501},
    population: 2
  },
  beijing: {
    center: {lat: 39.904, lng: 116.407},
    population: 15
  },
  guangzhou: {
    center: {lat: 23.129, lng: 113.264},
    population: 3
  },
  hongkong: {
    center: {lat: 22.278, lng: 114.174},
    population: 19
  },
  jakarta: {
    center: {lat: -6.174, lng: 106.822},
    population: 1
  },
  jiangsu: {
    center: {lat: 32.061, lng:118.763},
    population: 1
  },
  kualalumpur: {
    center: {lat: 3.139, lng:101.686},
    population: 4
  },
  philippine: {
    center: {lat: 12.879, lng:121.774},
    population: 1
  },
  shanghai: {
    center: {lat: 31.230, lng:121.473},
    population: 14
  },
  shenzhen: {
    center: {lat: 22.543, lng:114.057},
    population: 1
  },
  singapore: {
    center: {lat: 1.355, lng:103.867},
    population: 5
  },
  tokyo: {
    center: {lat: 35.689, lng:139.691},
    population: 5
  },
};

var residencemap = {
  //residence
  beijing: {
    center: {lat: 39.904, lng: 116.407},
    population: 2
  },
  boston: {
    center: {lat: 42.360, lng: -71.058},
    population: 2
  },
  calgary: {
    center: {lat: 51.048, lng: -114.070},
    population: 2
  },
  hamilton: {
    center: {lat: 43.250, lng: -79.866},
    population: 2
  },
  hongkong: {
    center: {lat: 22.278, lng: 114.174},
    population: 3
  },
  kingston: {
    center: {lat: 44.231, lng: -76.485},
    population: 10
  },
  waterloo: {
    center: {lat: 43.464, lng: -80.520},
    population: 2
  },
  londonon: {
    center: {lat: 42.986, lng: -81.243},
    population: 2
  },
  londonuk: {
    center: {lat: 51.507, lng: -0.1277},
    population: 1
  },
  losangeles: {
    center: {lat: 34.052, lng: -118.243},
    population: 1
  },
  montreal: {
    center: {lat: 45.501, lng: -73.567},
    population: 1
  },
  munich: {
    center: {lat: 48.135, lng: 11.581},
    population: 1
  },
  newyorkcity: {
    center: {lat: 40.712, lng: -74.005},
    population: 1
  },
  ottawa: {
    center: {lat: 45.421, lng: -75.697},
    population: 3
  },
  newbrunswick: {
    center: {lat: 45.388, lng: -65.994},
    population: 1
  },
  sanfrancisco: {
    center: {lat: 37.774, lng: -122.419},
    population: 3
  },
  shanghai: {
    center: {lat: 31.230, lng: 121.473},
    population: 1
  },
  sydney: {
    center: {lat: -33.867, lng: 151.206},
    population: 1
  },
  toronto: {
    center: {lat: 43.653, lng: -79.383},
    population: 20
  },
  vancouver: {
    center: {lat: 49.25, lng: -123.1},
    population: 4
  },
  winnipeg: {
    center: {lat: 49.899, lng: -97.137},
    population: 1
  }
};


function initMap() {
  var styles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
];

  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"}
  );

  var mapOptions = {
    zoom: 3,
    center: new google.maps.LatLng(55.6468, 37.581),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Construct the circle for each value in citymap.
    // scaling the area of the circle based on the population.
    for (var city in citymap) {
      var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.9,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.45,
        map: map,
        center: citymap[city].center,
        radius: Math.sqrt(citymap[city].population) * 80000
      });
    }
    for (var residence in residencemap) {
      // Add the circle for this city to the map.
      var residenceCircle = new google.maps.Circle({
        strokeColor: '#800080',
        strokeOpacity: 0.9,
        strokeWeight: 1,
        fillColor: '#800080',
        fillOpacity: 0.45,
        map: map,
        center: residencemap[residence].center,
        radius: Math.sqrt(residencemap[residence].population) * 80000
        //*80000 was to scale the circles large enough to see it in the entire world view
      });
    }
    //toggle the styled map and the default map
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
 }
