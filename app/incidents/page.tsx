"use client";

import { useState } from "react";
import { Upload, Image as ImageIcon, FileText, Brain } from "lucide-react";

export default function IncidentsPage() {
  const [description, setDescription] = useState("");
  const [analysis, setAnalysis] = useState("");

  async function analyzeIncident() {
    if (!description.trim()) return;

    setAnalysis("Analyzing incident with Gemini AI...");

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: description,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setAnalysis(data.result);
      } else {
        setAnalysis("Analysis failed.");
      }
    } catch (error) {
      console.error(error);
      setAnalysis("Something went wrong.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl space-y-8">

        {/* Header */}
        <div className="rounded-3xl bg-white p-8 shadow-sm border">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-blue-100 p-4">
              <Brain className="h-8 w-8 text-blue-600" />
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                Incident Analysis Workspace
              </h1>

              <p className="text-slate-500">
                Upload evidence and let AI generate an action plan.
              </p>
            </div>
          </div>
        </div>

        {/* Upload Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border bg-white p-8 text-center shadow-sm">
            <ImageIcon className="mx-auto h-12 w-12 text-blue-600" />

            <h2 className="mt-4 text-xl font-semibold">
              Upload Incident Image
            </h2>

            <input
              type="file"
              accept="image/*"
              className="mt-6 w-full"
            />
          </div>

          <div className="rounded-3xl border bg-white p-8 text-center shadow-sm">
            <FileText className="mx-auto h-12 w-12 text-green-600" />

            <h2 className="mt-4 text-xl font-semibold">
              Upload Supporting PDF
            </h2>

            <input
              type="file"
              accept=".pdf"
              className="mt-6 w-full"
            />
          </div>

        </div>

        {/* Description */}
        <div className="rounded-3xl border bg-white p-8 shadow-sm">

          <h2 className="mb-4 text-2xl font-bold">
            Describe the Incident
          </h2>

          <textarea
            rows={8}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the emergency..."
            className="w-full rounded-2xl border p-4"
          />

          <button
            onClick={analyzeIncident}
            className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            <Upload className="h-5 w-5" />
            Analyze Incident
          </button>
        </div>

        {/* AI Result */}
        {analysis && (
          <div className="rounded-3xl border bg-white p-8 shadow-sm">

            <h2 className="mb-4 text-2xl font-bold">
              AI Decision Report
            </h2>

            <div className="whitespace-pre-wrap">
              {analysis}
            </div>

          </div>
        )}

      </div>
    </main>
  );
}