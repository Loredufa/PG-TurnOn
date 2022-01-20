export const locales = [
  {
    latitude: -38.972791793998944,
    longitude: -68.09080665808801,
    title: "Mendieta",
    description: "Canchas futbol 9. Direccion: Cornelio Saavedra 1614",
    id: 1,
    sport: "futbol",
  },
  {
    latitude: -38.9770815277723,
    longitude: -68.05826232925203,
    title: "Orsai Futbol",
    description: "Cancha de futbol 5 y futbol 8. Direccion: Corrientes 2121",
    id: 2,
    sport: "futbol",
  },
  {
    latitude: -38.97553956089817,
    longitude: -68.22220277116006,
    title: "Los Canales Golf Club ",
    description: "La realización de esta cancha profesional de 18 hoyos par 72",
    id: 3,
    sport: "golf",
  },
  {
    latitude: -38.96933905008774,
    longitude: -68.05977373110352,
    title: "Tenis Club ",
    description:
      "Completa infraestructura del Club con canchas, quinchos y pileta. Direccion: Av. Coronel Olascoaga 1355",
    id: 4,
    sport: "tenis",
  },
  {
    latitude: -38.933519282550776,
    longitude: -68.06972895403838,
    title: "Club Alta Barda ",
    description:
      "Cancha de hockey, futbol, basquet y pileta. Direccion: El Ceibo 435",
    id: 5,
    sport: "hockey",
  },
  {
    latitude: -38.95537780342918,
    longitude: -68.04809162925268,
    title: "Winter Club De Padel",
    description:
      "Dos canchas de Paddle. Direccion: Tte. Coronel Lorenzo Winter 23",
    id: 6,
    sport: "paddle",
  },
];

export function rutas(arr) {
  console.log("LLEGO A RUTA", arr);
  let latitude = "";
  let longitude = "";
  let sport = [];
  let newArr = arr?.map((e) => {
    latitude = parseFloat(e.coordinates?.split(" ")[0]);
    longitude = parseFloat(e.coordinates?.split(" ")[1]);
    sport = e.fields.map((element) => element.sport);
    return {
      latitude: latitude,
      longitude: longitude,
      title: e.businessname,
      id: e.id,
      sport: sport,
      description: e.address,
    };
  });
  console.log("RUTAS", newArr);
  return newArr;
}
