import layout from "@/app/layout";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
        D
      </div>

      <div>
        <h1 className="text-lg font-bold tracking-tight">
          DecisionOS
        </h1>

        <p className="text-xs text-slate-500">
          Decision Intelligence Platform
        </p>
      </div>
    </div>
  );
}