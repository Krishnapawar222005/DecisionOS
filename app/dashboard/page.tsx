import { Activity, AlertTriangle, Car, Wind } from "lucide-react";

import { AppLayout } from "@/components/layout/app-layout";
import { TopNavbar } from "@/components/dashboard/top-navbar";
import { AIDecisionCenter } from "@/components/dashboard/ai-decision-center";
import { KPICard } from "@/components/dashboard/kpi-card";
import { CommunityAnalytics } from "@/components/dashboard/community-analytics";
import { RecentIncidents } from "@/components/dashboard/recent-incidents";

export default function DashboardPage() {
  return (
    <AppLayout>
      <TopNavbar />

      <div className="space-y-8 py-8">
        {/* AI Decision Center */}
        <AIDecisionCenter />

        {/* KPI Cards */}
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <KPICard
            title="Traffic Index"
            value="1,284"
            change="+8% from yesterday"
            icon={Car}
          />

          <KPICard
            title="Air Quality"
            value="AQI 42"
            change="Good"
            icon={Wind}
          />

          <KPICard
            title="Active Alerts"
            value="12"
            change="+2 today"
            icon={AlertTriangle}
          />

          <KPICard
            title="Community Health"
            value="98%"
            change="Stable"
            icon={Activity}
          />
        </section>

        {/* Community Analytics */}
        <CommunityAnalytics />
        <RecentIncidents />
      </div>
    </AppLayout>
  );
}