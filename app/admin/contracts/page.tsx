"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import AdminCard from "../components/admin-card";
import { contracts } from "../data/contracts";

export default function ContractsPage() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-6">Contracts</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {contracts.map((doc, i) => (
          <button
            key={doc.slug}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              active === i
                ? "bg-accent/15 text-accent-light border border-accent/30"
                : "text-muted border border-white/[0.06] hover:border-white/[0.12] hover:text-foreground"
            }`}
          >
            {doc.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <AdminCard>
        <div className="admin-prose">
          <ReactMarkdown>{contracts[active].content}</ReactMarkdown>
        </div>
      </AdminCard>
    </div>
  );
}
