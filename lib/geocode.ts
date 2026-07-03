export interface LocationData {
  city: string;
  state: string;
  country: string;
}

export async function getLocationName(
  lat: number,
  lng: number
): Promise<LocationData> {

  const response = await fetch(
    `/api/geocode?lat=${lat}&lng=${lng}`
  );

  if (!response.ok) {
    throw new Error("Unable to fetch location.");
  }

  return response.json();
}