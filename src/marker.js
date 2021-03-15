import mapboxgl from "mapbox-gl";

export function createNewMarker(typeMarker, coordinates) {
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  if (typeMarker === "Activity") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  else if (typeMarker === "Hotel") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  }
  else if (typeMarker === "Restaurant") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }
  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
};
