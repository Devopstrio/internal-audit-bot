import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import AuditDashboard from './pages/AuditDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The automated audit engine is currently synchronizing evidence assets from multi-cloud providers. Control verification reports will be generated once the cross-provider correlation is complete.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<AuditDashboard />} />
          <Route path="/controls" element={<Placeholder name="Internal Control Center" />} />
          <Route path="/audits" element={<Placeholder name="Active Audit Scans" />} />
          <Route path="/evidence" element={<Placeholder name="Evidence & Asset Vault" />} />
          <Route path="/compliance" element={<Placeholder name="Regulatory Compliance Map" />} />
          <Route path="/exceptions" element={<Placeholder name="Exception & Findings Management" />} />
          <Route path="/risk" element={<Placeholder name="Enterprise Risk Heatmap" />} />
          <Route path="/reports" element={<Placeholder name="Audit-Ready Document Generation" />} />
          <Route path="/history" element={<Placeholder name="Historical Audit Ledger" />} />
          <Route path="/settings" element={<Placeholder name="Bot & API Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
