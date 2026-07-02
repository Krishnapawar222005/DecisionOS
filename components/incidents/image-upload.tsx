"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Image as ImageIcon } from "lucide-react";

interface ImageUploadProps {
  preview: string;
  onImageSelect: (file: File) => void;
}

export function ImageUpload({
  preview,
  onImageSelect,
}: ImageUploadProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onImageSelect(acceptedFiles[0]);
      }
    },
    [onImageSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`rounded-2xl border-2 border-dashed p-8 text-center transition cursor-pointer ${
        isDragActive
          ? "border-blue-500 bg-blue-50"
          : "border-slate-300 bg-white"
      }`}
    >
      <input {...getInputProps()} />

      {preview ? (
        <img
          src={preview}
          alt="Incident Preview"
          className="mx-auto max-h-80 rounded-xl shadow"
        />
      ) : (
        <>
          <ImageIcon className="mx-auto h-12 w-12 text-blue-600" />

          <h3 className="mt-4 text-xl font-semibold">
            Upload Incident Image
          </h3>

          <p className="mt-2 text-slate-500">
            Drag & drop an image here or click to browse.
          </p>

          <Upload className="mx-auto mt-6 h-8 w-8 text-slate-400" />
        </>
      )}
    </div>
  );
}