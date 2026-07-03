import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  if (!lat || !lng) {
    return NextResponse.json(
      { error: "Latitude and longitude are required." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GOOGLE_MAPS_API_KEY}`
    );

    const data = await response.json();

    if (data.status !== "OK") {
      return NextResponse.json(
        { error: data.status },
        { status: 500 }
      );
    }

    const components = data.results[0].address_components;

    let city = "";
    let state = "";
    let country = "";

    for (const component of components) {
      if (component.types.includes("locality")) {
        city = component.long_name;
      }

      if (component.types.includes("administrative_area_level_1")) {
        state = component.long_name;
      }

      if (component.types.includes("country")) {
        country = component.long_name;
      }
    }

    return NextResponse.json({
      city,
      state,
      country,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to fetch location." },
      { status: 500 }
    );
  }
}