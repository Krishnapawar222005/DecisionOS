"use client";

import { jsPDF } from "jspdf";

interface DownloadReportProps {
  report: string;
}

export function DownloadReport({ report }: DownloadReportProps) {
  function downloadPDF() {
    const pdf = new jsPDF();

    pdf.setFontSize(22);
    pdf.text("DecisionOS Executive Report", 20, 20);

    pdf.setFontSize(12);

    const lines = pdf.splitTextToSize(report, 170);

    pdf.text(lines, 20, 40);

    pdf.save("DecisionOS_Report.pdf");
  }

  return (
    <button
      onClick={downloadPDF}
      className="mt-6 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
    >
      📄 Download Executive Report
    </button>
  );
}