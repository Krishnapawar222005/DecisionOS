"use client";

import {
  Clock3,
  CloudRain,
  Car,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";

export default function AIDecisionTimeline() {
  return (
    <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">

      <div className="mb-8">

        <h2 className="text-3xl font-bold">
          ⏳ AI Decision Timeline
        </h2>

        <p className="mt-2 text-muted-foreground">
          Predicted community events over the next six hours.
        </p>

      </div>

      <div className="space-y-6">

        {/* NOW */}

        <div className="flex gap-5">

          <div className="rounded-full bg-blue-100 p-3">
            <Clock3 className="h-6 w-6 text-blue-600" />
          </div>

          <div>

            <h3 className="text-xl font-semibold">
              Now
            </h3>

            <p className="text-muted-foreground">
              Live environmental conditions collected from weather,
              AQI and location services.
            </p>

          </div>

        </div>

        {/* +2 */}

        <div className="flex gap-5">

          <div className="rounded-full bg-green-100 p-3">
            <CloudRain className="h-6 w-6 text-green-600" />
          </div>

          <div>

            <h3 className="text-xl font-semibold">
              Next 2 Hours
            </h3>

            <p className="text-muted-foreground">
              Increased cloud cover and possible rainfall.
            </p>

          </div>

        </div>

        {/* +4 */}

        <div className="flex gap-5">

          <div className="rounded-full bg-orange-100 p-3">
            <Car className="h-6 w-6 text-orange-600" />
          </div>

          <div>

            <h3 className="text-xl font-semibold">
              Next 4 Hours
            </h3>

            <p className="text-muted-foreground">
              Higher probability of traffic congestion and slower
              emergency response times.
            </p>

          </div>

        </div>

        {/* +6 */}

        <div className="flex gap-5">

          <div className="rounded-full bg-red-100 p-3">
            <ShieldAlert className="h-6 w-6 text-red-600" />
          </div>

          <div>

            <h3 className="text-xl font-semibold">
              Next 6 Hours
            </h3>

            <p className="text-muted-foreground">
              AI recommends preparing emergency resources if
              environmental conditions continue to worsen.
            </p>

          </div>

        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-blue-50 p-6">

        <div className="flex items-center gap-3">

          <CheckCircle2 className="h-6 w-6 text-blue-600" />

          <div>

            <h3 className="font-semibold">
              Executive Recommendation
            </h3>

            <p className="text-muted-foreground">
              Monitor conditions continuously and deploy response teams
              proactively instead of reactively.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}