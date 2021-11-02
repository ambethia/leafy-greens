import L from "leaflet";
import "leaflet-defaulticon-compatibility";

import mapImage from "./images/uqm_map_full.png";

console.log("I wish there was a map here!");

function handleClick(event) {
  console.log("clicked", event);
  // open a modal with details about the thing, or
  window.location = `/maps/${event.target.location.id}`;
}

window.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map", {
    crs: L.CRS.Simple,
  });
  const bounds = [
    [
      [-26.5, -25],
      [1021.5, 1023],
    ],
  ];
  const image = L.imageOverlay(mapImage, bounds).addTo(map);
  map.fitBounds(bounds);

  fetch("/locations")
    .then((r) => r.json())
    .then((locations) => {
      locations.forEach((location) => {
        const coord = L.latLng([location.x, location.y]);
        const marker = L.marker(coord, { title: location.title });
        marker.location = location;
        marker.addTo(map);
        marker.on("click", handleClick);
      });
    });
});
