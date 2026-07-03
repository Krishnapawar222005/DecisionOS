export interface Place {
  id: string;
  name: string;
  address: string;
  location: google.maps.LatLng;
}

export function searchNearbyPlaces(
  map: google.maps.Map,
  location: google.maps.LatLngLiteral,
  type: string
): Promise<Place[]> {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch(
      {
        location,
        radius: 5000,
        type: type as any,
      },
      (results, status) => {
        if (
          status !== google.maps.places.PlacesServiceStatus.OK ||
          !results
        ) {
          reject(status);
          return;
        }

        resolve(
          results.map((place) => ({
            id: place.place_id || "",
            name: place.name || "",
            address: place.vicinity || "",
            location: place.geometry!.location!,
          }))
        );
      }
    );
  });
}