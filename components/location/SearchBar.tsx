"use client";

import { Loader2, MapPin } from "lucide-react";

interface SearchBarProps {
  loading: boolean;
  onCurrentLocation: () => void;
}

export default function SearchBar({
  loading,
  onCurrentLocation,
}: SearchBarProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
      <h1 className="text-4xl font-bold">
        📍 Live Location Intelligence
      </h1>

      <p className="mt-3 text-muted-foreground">
        DecisionOS automatically analyzes your current GPS location and provides
        weather, air quality, nearby emergency services, and AI-powered safety
        insights.
      </p>

      <button
        onClick={onCurrentLocation}
        disabled={loading}
        className="mt-8 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Getting Current Location...
          </>
        ) : (
          <>
            <MapPin className="h-5 w-5" />
            Refresh Current Location
          </>
        )}
      </button>
    </div>
  );
}