'use client';

import ParetoBars from '../charts/ParetoBars';

interface ReportData {
  vendors: Array<{
    name: string;
    spendShare: number;
    altSuppliers: number;
    riskScore: number;
  }>;
}

interface VendorConcentrationSectionProps {
  data: ReportData;
}

export default function VendorConcentrationSection({ data }: VendorConcentrationSectionProps) {
  const paretoData = data.vendors.map(vendor => ({
    name: vendor.name,
    value: vendor.spendShare * 100
  }));

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-zinc-100 mb-2">Vendor Concentration Analysis</h3>
        <p className="text-zinc-400 text-sm">
          Spend distribution and risk assessment by vendor. Pareto chart shows concentration levels.
        </p>
      </div>
      
      <div className="bg-zinc-800/40 rounded-lg p-6">
        <ParetoBars data={paretoData} height={250} />
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left py-3 px-4 text-sm font-medium text-zinc-300">Vendor</th>
              <th className="text-right py-3 px-4 text-sm font-medium text-zinc-300">Spend Share</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-zinc-300">Alt Suppliers</th>
              <th className="text-center py-3 px-4 text-sm font-medium text-zinc-300">Risk Score</th>
            </tr>
          </thead>
          <tbody>
            {data.vendors.map((vendor, index) => (
              <tr key={index} className="border-b border-zinc-800/50">
                <td className="py-3 px-4 text-sm text-zinc-200">{vendor.name}</td>
                <td className="py-3 px-4 text-sm text-right text-zinc-300">
                  {(vendor.spendShare * 100).toFixed(1)}%
                </td>
                <td className="py-3 px-4 text-sm text-center text-zinc-300">{vendor.altSuppliers}</td>
                <td className="py-3 px-4 text-center">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    vendor.riskScore > 0.7 ? 'bg-red-500/20 text-red-400' :
                    vendor.riskScore > 0.5 ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {(vendor.riskScore * 100).toFixed(0)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
