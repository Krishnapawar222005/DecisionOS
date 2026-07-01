"use client";

import { useState } from "react";
import { Brain, Loader2, Send } from "lucide-react";
import { DownloadReport } from "@/components/shared/download-report";
export default function CopilotPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyze() {
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setResponse(data.result);
      } else {
        setResponse("❌ Failed to analyze the incident.");
      }
    } catch (error) {
      console.error(error);
      setResponse("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <div className="rounded-2xl bg-blue-100 p-4">
            <Brain className="h-8 w-8 text-blue-600" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              AI Copilot
            </h1>

            <p className="text-slate-500">
              Analyze incidents using Gemini AI.
            </p>
          </div>
        </div>

        {/* Input */}
        <textarea
          rows={8}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Example:
Heavy rainfall has flooded roads near the railway station. Traffic is blocked and emergency services have received multiple complaints."
          className="w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-blue-500"
        />

        {/* Button */}
        <button
          onClick={analyze}
          disabled={loading}
          className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Analyze with Gemini
            </>
          )}
        </button>

               {/* Output */}
        {response && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              AI Analysis
            </h2>

            <div className="whitespace-pre-wrap text-slate-700">
              {response}
            </div>

            <DownloadReport report={response} />
          </div>
        )}
      </div>
    </main>
  );
}