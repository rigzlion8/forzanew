import { createFileRoute, Link } from "@tanstack/react-router";
import { ReactNode } from "react";

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-ink text-white py-20 border-b-2 border-gold">
      <div className="container-x text-center">
        <h1 className="font-display text-4xl md:text-5xl">{title}</h1>
        <div className="gold-divider" />
        {subtitle && <p className="text-white/70 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`container-x py-16 ${className}`}>{children}</section>;
}

export { Link, createFileRoute };
