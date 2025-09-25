'use client';
import { useEffect, useState } from 'react';

interface Lead {
  created_at: string;
  name: string;
  email: string;
  company: string;
  revenue_band: string;
}

export default function AdminPage() {
  const [rows, setRows] = useState<Lead[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/leads')
      .then(r => r.ok ? r.json() : Promise.reject(r))
      .then(({ leads }) => {
        setRows(leads);
        setLoading(false);
      })
      .catch(() => {
        setErr('Failed to load leads');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white p-6">
        <h1 className="text-2xl mb-4">Leads</h1>
        <div className="text-white/70">Loading...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl mb-4">Leads</h1>
        {err && <div className="text-red-400 mb-4">{err}</div>}
        
        {rows.length === 0 ? (
          <div className="text-white/70">No leads found.</div>
        ) : (
          <div className="overflow-auto rounded border border-white/10">
            <table className="min-w-full text-sm">
              <thead className="bg-neutral-900">
                <tr>
                  <th className="px-3 py-2 text-left">Created</th>
                  <th className="px-3 py-2 text-left">Name</th>
                  <th className="px-3 py-2 text-left">Email</th>
                  <th className="px-3 py-2 text-left">Company</th>
                  <th className="px-3 py-2 text-left">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, index) => (
                  <tr key={`${r.created_at}-${index}`} className="odd:bg-neutral-950">
                    <td className="px-3 py-2">{new Date(r.created_at).toLocaleString()}</td>
                    <td className="px-3 py-2">{r.name}</td>
                    <td className="px-3 py-2">{r.email}</td>
                    <td className="px-3 py-2">{r.company || '-'}</td>
                    <td className="px-3 py-2">{r.revenue_band || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        <div className="mt-6 text-sm text-white/50">
          Total: {rows.length} leads
        </div>
      </div>
    </main>
  );
}
