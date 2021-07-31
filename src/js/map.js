let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.74486, 37.624713],
    zoom: 11,
    controls: [
      "zoomControl",
      "typeSelector",
      "routeButtonControl",
      "geolocationControl",
    ],
  });

  var coords = [
    [55.75873, 37.583145],
    [55.748493, 37.608526],
    [55.747481, 37.58149],
    [55.758311, 37.625972],
  ];

  const myCollection = new ymaps.GeoObjectCollection(
    {},
    {
      draggable: false,
      iconLayout: "default#image",
      iconImageHref: "./img/icons/marker.svg",
      iconImageSize: [58, 43],
      iconImageOffset: [-50, -50],
    }
  );

  coords.forEach((coord) => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);
  myMap.behaviors.disable("scrollZoom");
};
ymaps.ready(init);
