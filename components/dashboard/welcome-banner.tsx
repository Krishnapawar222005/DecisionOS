import { Sparkles } from "lucide-react";

export function WelcomeBanner() {
  return (
    <section className="rounded-2xl border bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-sm">
      <div className="flex items-center gap-3">
        <Sparkles className="h-7 w-7" />

        <h1 className="text-3xl font-bold">
          Welcome back, Krishna 👋
        </h1>
      </div>

      <p className="mt-3 max-w-2xl text-blue-100">
        DecisionOS analyzes community data, predicts outcomes,
        and recommends actions to help you make smarter decisions.
      </p>
    </section>
  );
}