import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, ScatterChart, Scatter, ZAxis
} from 'recharts';
import { 
  ShieldCheck, 
  Activity, 
  Clock,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Database,
  Search,
  Zap,
  Bot
} from 'lucide-react';

const complianceTrends = [
  { month: 'Jan', score: 82 },
  { month: 'Feb', score: 85 },
  { month: 'Mar', score: 88 },
  { month: 'Apr', score: 86 },
  { month: 'May', score: 92 },
  { month: 'Jun', score: 95 },
];

const riskHeatmap = [
  { x: 10, y: 30, z: 200, name: 'Access Control' },
  { x: 70, y: 80, z: 400, name: 'Data Protection' },
  { x: 45, y: 45, z: 150, name: 'Networking' },
  { x: 25, y: 70, z: 300, name: 'Identity' },
  { x: 80, y: 20, z: 100, name: 'Audit Logging' },
];

const KPI_CARDS = [
  { title: 'Controls Monitored', value: '1.2k', trend: 'ISO/SOC2/HIPAA', color: 'amber', icon: ShieldCheck },
  { title: 'Evidence Collected', value: '42.5k', trend: 'Daily Auto-Gather', color: 'amber', icon: Database },
  { title: 'Compliance Score', value: '94.8%', trend: '+3.2% MoM', color: 'amber', icon: Activity },
  { title: 'Open Findings', value: '12', trend: 'Remediation Active', color: 'amber', icon: AlertTriangle },
];

const AuditDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Internal Audit Command Center</h1>
          <p className="text-slate-400">Institutional continuous control monitoring and automated evidence verification.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Schedule Full Audit
          </button>
          <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Trigger Control Scan
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-amber-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-amber-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Compliance Score Trend */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Organizational Compliance Trend</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={complianceTrends}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="score" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" name="Compliance %" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Heatmap (Scatter) */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Audit Risk Heatmap</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis type="number" dataKey="x" name="Impact" unit="" stroke="#64748b" fontSize={10} />
                <YAxis type="number" dataKey="y" name="Probability" unit="" stroke="#64748b" fontSize={10} />
                <ZAxis type="number" dataKey="z" range={[60, 400]} name="Severity" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }} />
                <Scatter name="Findings" data={riskHeatmap} fill="#f43f5e" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            <span>Low Risk</span>
            <span>Critical Risk</span>
          </div>
        </div>
      </div>

      {/* Active Audit Findings Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Critical Control Violations & Exceptions</h3>
          <button className="text-amber-400 hover:text-amber-300 text-sm font-medium">Export Evidence Ledger</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Control ID / Name</th>
                <th className="px-6 py-4 font-semibold">Audit Category</th>
                <th className="px-6 py-4 font-semibold">Evidence Status</th>
                <th className="px-6 py-4 font-semibold">Severity</th>
                <th className="px-6 py-4 font-semibold">Days Since Violation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { id: 'AC.01', name: 'MFA Enforcement', category: 'Identity', status: 'Missing', severity: 'Critical', days: 2 },
                { id: 'DS.04', name: 'Encryption at Rest', category: 'Infrastructure', status: 'Captured', severity: 'High', days: 5 },
                { id: 'NW.12', name: 'Inbound Port 22 Open', category: 'Networking', status: 'Exception', severity: 'Medium', days: 12 },
              ].map((finding) => (
                <tr key={finding.id} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">{finding.name}</span>
                      <span className="text-xs text-slate-500 font-mono">{finding.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-300">{finding.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      finding.status === 'Captured' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {finding.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-[10px] text-rose-500 font-bold uppercase`}>
                      {finding.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 italic">{finding.days} days ago</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditDashboard;
