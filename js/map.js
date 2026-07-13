(function () {
  const mapEl = document.getElementById('regional-map');
  if (!mapEl || typeof L === 'undefined') return;

  const locations = [
    { en: 'Riyadh', ar: 'الرياض', lat: 24.7136, lng: 46.6753, hq: true },
    { en: 'Jeddah', ar: 'جدة', lat: 21.4858, lng: 39.1925 },
    { en: 'Dammam', ar: 'الدمام', lat: 26.4207, lng: 50.0888 },
    { en: 'Tabuk', ar: 'تبوك', lat: 28.3838, lng: 36.5662 },
    { en: 'Amman', ar: 'عمّان', lat: 31.9454, lng: 35.9284 },
    { en: 'Dubai', ar: 'دبي', lat: 25.2048, lng: 55.2708 },
    { en: 'Cairo', ar: 'القاهرة', lat: 30.0444, lng: 31.2357 },
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
  const markers = [];

  function currentLang() {
    return (window.DabouqI18n && window.DabouqI18n.getLang()) || localStorage.getItem('dabouq-lang') || 'en';
  }

  function cityName(loc, lang) {
    return lang === 'ar' ? loc.ar : loc.en;
  }

  locations.forEach((loc) => {
    const icon = L.divIcon({
      className: loc.hq ? 'map-marker map-marker-hq' : 'map-marker',
      iconSize: loc.hq ? [16, 16] : [11, 11],
      iconAnchor: loc.hq ? [8, 8] : [5.5, 5.5],
    });

    const marker = L.marker([loc.lat, loc.lng], { icon }).addTo(map);
    marker.bindTooltip(cityName(loc, currentLang()), {
      direction: 'top',
      offset: [0, -10],
      className: 'map-tooltip',
    });

    markers.push({ marker, loc });
    bounds.push([loc.lat, loc.lng]);
  });

  map.fitBounds(bounds, { padding: [30, 30], maxZoom: 5 });

  window.addEventListener('dabouq:langchange', (event) => {
    const lang = event.detail?.lang || currentLang();
    markers.forEach(({ marker, loc }) => {
      marker.setTooltipContent(cityName(loc, lang));
    });
  });

  setTimeout(() => map.invalidateSize(), 150);
  window.addEventListener('resize', () => map.invalidateSize());
})();
