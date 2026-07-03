export interface HistoryRecord {
  time: string;
  temp: number;
  humidity: number;
  wind: number;
  aqi: number;
}

const STORAGE_KEY = "decisionos-history";

export function saveHistory(record: HistoryRecord) {
  const history = getHistory();

  history.push(record);

  // Keep only the latest 50 records
  if (history.length > 50) {
    history.shift();
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(history)
  );
}

export function getHistory(): HistoryRecord[] {
  if (typeof window === "undefined") {
    return [];
  }

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}