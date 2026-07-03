import Link from "next/link";
import {
  MapPinned,
  ArrowRight,
} from "lucide-react";

import { AppLayout } from "@/components/layout/app-layout";
import { TopNavbar } from "@/components/dashboard/top-navbar";
import { AIDecisionCenter } from "@/components/dashboard/ai-decision-center";
import { CommunityAnalytics } from "@/components/dashboard/community-analytics";
import { RecentIncidents } from "@/components/dashboard/recent-incidents";
import LiveKPICards from "@/components/dashboard/live-kpi-cards";

export default function DashboardPage() {
  return (
    <AppLayout>
      <TopNavbar />

      <div className="space-y-8 py-8">

        {/* AI Decision Center */}
        <AIDecisionCenter />

        {/* Location Intelligence */}
        <section className="rounded-3xl border border-border bg-card p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">

              <div className="rounded-2xl bg-blue-100 p-4">
                <MapPinned className="h-10 w-10 text-blue-600" />
              </div>

              <div>

                <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                  Live Location Intelligence
                </h2>

                <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
                  Analyze any location in real time using AI.
                  Get live weather, air quality,
                  emergency contacts and AI-generated
                  recommendations for faster decision making.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">

                  <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                    📍 Google Maps
                  </span>

                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                    🌦 Live Weather
                  </span>

                  <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
                    🌫 Live AQI
                  </span>

                  <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
                    🚨 Emergency Contacts
                  </span>

                  <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
                    🤖 AI Analysis
                  </span>

                </div>

              </div>

            </div>

            {/* Right */}
            <div className="flex flex-col gap-4">

              <Link
                href="/location"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700 sm:w-auto sm:px-8 sm:py-5 sm:text-lg"
              >
                Open Location Center

                <ArrowRight className="h-5 w-5" />
              </Link>

              <p className="text-center text-sm text-muted-foreground">
                Search • Monitor • Analyze • Respond
              </p>

            </div>

          </div>
        </section>

        {/* Live KPI Cards */}
        <LiveKPICards />

        {/* Community Analytics */}
        <CommunityAnalytics />

        {/* Recent Incidents */}
        <RecentIncidents />

      </div>
    </AppLayout>
  );
}