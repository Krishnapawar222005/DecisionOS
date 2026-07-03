"use client";

import { EmergencyContact } from "@/lib/emergencyContacts";

interface EmergencyContactsProps {
  contacts: EmergencyContact[];
}

export default function EmergencyContacts({
  contacts,
}: EmergencyContactsProps) {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        🚨 Emergency Contacts
      </h2>

      <p className="mt-2 text-muted-foreground">
        Tap any card to call directly (on mobile devices).
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contacts.map((contact) => (
          <a
            key={contact.title}
            href={`tel:${contact.number}`}
            className="rounded-2xl border border-border bg-background p-5 transition hover:shadow-lg hover:border-blue-500"
          >
            <h3 className="text-lg font-semibold">
              {contact.title}
            </h3>

            <p className="mt-3 text-3xl font-bold text-blue-600">
              {contact.number}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}