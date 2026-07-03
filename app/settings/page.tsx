"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
    Settings,
    Bell,
    Moon,
    Globe,
    Brain,
    Key,
    Save,
    User,
} from "lucide-react";

export default function SettingsPage() {
    const { theme, setTheme } = useTheme();
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("English");
    const [model, setModel] = useState("Gemini 2.5 Flash");
    useEffect(() => {
        const saved = localStorage.getItem("decisionos-settings");

        if (!saved) return;

        const settings = JSON.parse(saved);

        setNotifications(settings.notifications);
        setDarkMode(settings.darkMode);
        setLanguage(settings.language);
        setModel(settings.model);

        setTheme(settings.darkMode ? "dark" : "light");
    }, [setTheme]);
    function saveSettings() {
        localStorage.setItem(
            "decisionos-settings",
            JSON.stringify({
                notifications,
                darkMode,
                language,
                model,
            })
        );

        setTheme(darkMode ? "dark" : "light");

        alert("✅ Settings saved successfully!");
    }

    return (
        <main className="min-h-screen bg-background p-8">
            <div className="mx-auto max-w-5xl space-y-8">

                {/* Header */}
                <div className="rounded-3xl border bg-card p-8 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="rounded-2xl bg-blue-100 p-4">
                            <Settings className="h-8 w-8 text-blue-600" />
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold">
                                DecisionOS Settings
                            </h1>

                            <p className="text-muted-foreground">
                                Manage your application preferences.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Profile */}
                <div className="rounded-3xl border bg-card p-8 shadow-sm">
                    <div className="flex items-center gap-3">
                        <User className="text-blue-600" />
                        <h2 className="text-2xl font-bold">Profile</h2>
                    </div>

                    <input
                       className="mt-6 w-full rounded-xl border border-border bg-background p-3 text-foreground"
                        placeholder="Your Name"
                        defaultValue="Admin"
                    />

                    <input
                        className="mt-4 w-full rounded-xl border border-border bg-background p-3 text-foreground"
                        placeholder="Email"
                        defaultValue="admin@decisionos.ai"
                    />
                </div>

                {/* AI Model */}
                <div className="rounded-3xl border bg-card p-8 shadow-sm">
                    <div className="flex items-center gap-3">
                        <Brain className="text-purple-600" />
                        <h2 className="text-2xl font-bold">AI Model</h2>
                    </div>

                    <select
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                       className="mt-6 w-full rounded-xl border border-border bg-background p-3 text-foreground"
                    >
                        <option>Gemini 2.5 Flash</option>
                        <option>Gemini 2.5 Pro</option>
                    </select>
                </div>

                {/* Language */}
                <div className="rounded-3xl border bg-card p-8 shadow-sm">
                    <div className="flex items-center gap-3">
                        <Globe className="text-green-600" />
                        <h2 className="text-2xl font-bold">Language</h2>
                    </div>

                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="mt-6 w-full rounded-xl border border-border bg-background p-3 text-foreground"
                    >
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Telugu</option>
                    </select>
                </div>

                {/* Notifications */}
                <div className="rounded-3xl border bg-card p-8 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Bell className="text-orange-600" />
                        <div>
                            <h2 className="text-xl font-bold">
                                Notifications
                            </h2>
                            <p className="text-muted-foreground">
                                Receive incident alerts.
                            </p>
                        </div>
                    </div>

                    <input
                        type="checkbox"
                        checked={notifications}
                        onChange={() => setNotifications(!notifications)}
                        className="h-6 w-6"
                    />
                </div>

                {/* Dark Mode */}
                <div className="rounded-3xl border bg-card p-8 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Moon className="text-indigo-600" />
                        <div>
                            <h2 className="text-xl font-bold">
                                Dark Mode
                            </h2>
                            <p className="text-muted-foreground">
                                Enable dark appearance.
                            </p>
                        </div>
                    </div>

                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={(e) => {
                            const enabled = e.target.checked;
                            setDarkMode(enabled);
                            setTheme(enabled ? "dark" : "light");
                        }}
                        className="h-6 w-6"
                    />
                </div>

                {/* API Status */}
                <div className="rounded-3xl border bg-card p-8 shadow-sm">
                    <div className="flex items-center gap-3">
                        <Key className="text-red-600" />
                        <h2 className="text-2xl font-bold">
                            Gemini API
                        </h2>
                    </div>

                    <p className="mt-6 rounded-xl border border-green-500/20 bg-green-500/10 p-4 font-semibold text-green-600">
                        ✅ Connected Successfully
                    </p>
                </div>

                {/* Save */}
                <button
                    onClick={saveSettings}
                    className="flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-white hover:bg-blue-700"
                >
                    <Save />
                    Save Settings
                </button>

            </div>
        </main>
    );
}