(function () {
  const mapEl = document.getElementById('regional-map');
  if (!mapEl || typeof L === 'undefined') return;

  const locations = [
    { name: 'Riyadh', lat: 24.7136, lng: 46.6753, hq: true },
    { name: 'Jeddah', lat: 21.4858, lng: 39.1925 },
    { name: 'Dammam', lat: 26.4207, lng: 50.0888 },
    { name: 'Tabuk', lat: 28.3838, lng: 36.5662 },
    { name: 'Amman', lat: 31.9454, lng: 35.9284 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
  ];

  const map = L.map('regional-map', {
    scrollWheelZoom: false,
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false,
    zoomControl: false,
    attributionControl: true,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  const bounds = [];

  locations.forEach(({ name, lat, lng, hq }) => {
    const icon = L.divIcon({
      className: hq ? 'map-marker map-marker-hq' : 'map-marker',
      iconSize: hq ? [16, 16] : [11, 11],
      iconAnchor: hq ? [8, 8] : [5.5, 5.5],
    });

    const marker = L.marker([lat, lng], { icon }).addTo(map);
    marker.bindTooltip(name, {
      direction: 'top',
      offset: [0, -10],
      className: 'map-tooltip',
    });

    bounds.push([lat, lng]);
  });

  map.fitBounds(bounds, { padding: [30, 30], maxZoom: 5 });

  setTimeout(() => map.invalidateSize(), 150);
  window.addEventListener('resize', () => map.invalidateSize());
})();
