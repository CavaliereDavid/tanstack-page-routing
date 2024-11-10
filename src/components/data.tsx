type MarkerData = Array<{
  id: string;
  position: google.maps.LatLngLiteral;
  type: "pin" | "html";
  zIndex: number;
}>;

export function getData() {
  const data: MarkerData = [];

  // create 50 random markers within Italy's geographical bounds
  for (let index = 0; index < 50; index++) {
    data.push({
      id: String(index),
      position: { lat: rnd(36.5, 47.1), lng: rnd(6.6, 18.5) },
      zIndex: index,
      type: Math.random() < 0.5 ? "pin" : "html",
    });
  }

  return data;
}

function rnd(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
