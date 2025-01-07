const socket = io();

if (navigator.geolocation) {
  navigator.geolocation.watchPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
    console.log("Accuracy: ", position.coords.accuracy, " meters");
    const { latitude, longitude } = position.coords;
    socket.emit("send-location", { latitude, longitude });
  }),
    (err) => {
      console.error(err);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
} else {
  console.error("Geolocation API is not supported by your browser.");
}

const map = L.map("map").setView([0, 0], 16);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

const markers = {};

socket.on("receive-location", (data) => {
  const { id, latitude, longitude } = data;
  map.setView([latitude, longitude]);

  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  }
});

socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});
