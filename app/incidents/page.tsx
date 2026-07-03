"use client";

import { useState } from "react";
import { Upload, FileText, Brain } from "lucide-react";
import { ImageUpload } from "@/components/incidents/image-upload";
import { extractPdfText } from "@/lib/pdf";

export default function IncidentsPage() {
    const [description, setDescription] = useState("");
    const [analysis, setAnalysis] = useState("");

    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState("");

    const [pdf, setPdf] = useState<File | null>(null);
    const [pdfText, setPdfText] = useState("");
    const [extractingPdf, setExtractingPdf] = useState(false);

    function handleImageSelect(file: File) {
        setImage(file);
        setPreview(URL.createObjectURL(file));
    }

    function handlePdfChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];

        if (!file) return;

        setPdf(file);
        setPdfText("");
    }
    async function extractPdf() {
        if (!pdf) {
            alert("Please upload a PDF first.");
            return;
        }

        setExtractingPdf(true);

        try {
            const text = await extractPdfText(pdf);

            setPdfText(text);

            alert("✅ PDF extracted successfully!");
        } catch (error) {
            console.error(error);
            alert("❌ Failed to extract PDF.");
        } finally {
            setExtractingPdf(false);
        }
    }

    async function analyzeIncident() {
        if (!image) {
            alert("Please upload an incident image.");
            return;
        }

        setAnalysis("🤖 DecisionOS Vision AI is analyzing the incident...");

        try {
            const base64 = await new Promise<string>((resolve, reject) => {
                const reader = new FileReader();

                reader.onload = () => {
                    const result = reader.result as string;
                    resolve(result.split(",")[1]);
                };

                reader.onerror = () => reject(reader.error);

                reader.readAsDataURL(image);
            });

            const res = await fetch("/api/vision", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    prompt: description,
                    image: base64,
                    mimeType: image.type,
                    pdfText,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setAnalysis(data.result);
            } else {
                setAnalysis(data.result || "❌ Vision analysis failed.");
            }
        } catch (error) {
            console.error(error);
            setAnalysis("❌ Failed to analyze the uploaded image.");
        }
    }

    return (
        <main className="min-h-screen bg-slate-100 p-8">
            <div className="mx-auto max-w-6xl space-y-8">

                {/* Header */}
                <div className="rounded-3xl border bg-white p-8 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="rounded-2xl bg-blue-100 p-4">
                            <Brain className="h-8 w-8 text-blue-600" />
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold">
                                Incident Analysis Workspace
                            </h1>

                            <p className="text-slate-500">
                                Upload evidence and let Gemini AI generate an executive decision report.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Upload Cards */}
                <div className="grid gap-6 md:grid-cols-2">

                    {/* Image Upload */}
                    <div className="rounded-3xl border bg-white p-8 shadow-sm">

                        <ImageUpload
                            preview={preview}
                            onImageSelect={handleImageSelect}
                        />

                        {image && (
                            <p className="mt-4 text-center font-medium text-green-600">
                                ✅ {image.name}
                            </p>
                        )}

                    </div>

                    {/* PDF Upload */}
                    <div className="rounded-3xl border bg-white p-8 shadow-sm">
                        <FileText className="mx-auto h-12 w-12 text-green-600" />

                        <h2 className="mt-4 text-center text-xl font-semibold">
                            Upload Supporting PDF
                        </h2>

                        <input
                            type="file"
                            accept=".pdf"
                            onChange={handlePdfChange}
                            className="mt-6 w-full"
                        />


                        {pdf && (
                            <>
                                <p className="mt-4 text-center font-medium text-green-600">
                                    ✅ {pdf.name}
                                </p>

                                <button
                                    onClick={extractPdf}
                                    disabled={!pdf || extractingPdf}
                                    className="mt-4 w-full rounded-xl bg-green-600 px-4 py-3 font-medium text-white hover:bg-green-700 disabled:opacity-50"
                                >
                                    {extractingPdf ? "Extracting..." : "📄 Extract PDF Text"}
                                </button>

                                {pdfText && (
                                    <div className="mt-4 rounded-xl bg-green-50 p-3 text-center text-green-700">
                                        ✅ PDF text extracted successfully.
                                    </div>
                                )}
                            </>
                        )}
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
                        className="w-full rounded-2xl border p-4 outline-none focus:border-blue-500"
                    />

                    <button
                        onClick={analyzeIncident}
                        className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
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

                        <div className="whitespace-pre-wrap rounded-xl bg-slate-50 p-6 text-slate-700">
                            {analysis}
                        </div>

                    </div>
                )}

            </div>
        </main>
    );
}