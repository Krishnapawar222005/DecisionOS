"use client";

interface NearbyServicesProps {
  lat: number;
  lng: number;
}

export default function NearbyServices({
  lat,
  lng,
}: NearbyServicesProps) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        🏥 Nearby Emergency Services
      </h2>

      <p className="mt-4 text-muted-foreground">
        Loading nearby hospitals...
      </p>
    </section>
  );
}