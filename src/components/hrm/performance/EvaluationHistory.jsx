import React from 'react';
import { RotateCcw, Download } from 'lucide-react';

const history = [
  { name: 'Marcus Thomas',    period: '01 2023', score: 92.4, rating: 'EXCELLENT', rStyle: 'text-green-600',  evaluator: 'Jane Smith'    },
  { name: 'Elena Rodriguez',  period: '01 2023', score: 70.1, rating: 'GOOD',      rStyle: 'text-blue-600',   evaluator: 'Robert Jones'  },
  { name: 'James Wilson',     period: '02 2023', score: 64.5, rating: 'AVERAGE',   rStyle: 'text-yellow-600', evaluator: 'Jane Smith'    },
  { name: 'Sarah Jenkins',    period: '02 2023', score: 92.5, rating: 'EXCELLENT', rStyle: 'text-green-600',  evaluator: 'Michael Ross'  },
  { name: 'Anita Kumar',      period: '02 2023', score: 85.0, rating: 'GOOD',      rStyle: 'text-blue-600',   evaluator: 'Michael Ross'  },
  { name: 'David Wu',         period: '02 2023', score: 89.2, rating: 'EXCELLENT', rStyle: 'text-green-600',  evaluator: 'Pritish Arora' },
  { name: 'Linda Chen',       period: '07 2019', score: 94.0, rating: 'EXCELLENT', rStyle: 'text-green-600',  evaluator: 'Jane Smith'    },
  { name: 'Sarah Jenkins',    period: '02 2023', score: 98.5, rating: 'EXCELLENT', rStyle: 'text-green-600',  evaluator: 'Michael Ross'  },
  { name: 'Anita Kumar',      period: '02 2023', score: 85.0, rating: 'GOOD',      rStyle: 'text-blue-600',   evaluator: 'Michael Ross'  },
  { name: 'David Wu',         period: '02 2023', score: 98.2, rating: 'EXCELLENT', rStyle: 'text-green-600',  evaluator: 'Robert Jones'  },
  { name: 'Linda Chen',       period: '02 2019', score: 84.0, rating: 'EXCELLENT', rStyle: 'text-green-600',  evaluator: 'Jane Smith'    },
];

const ratingBg = {
  EXCELLENT: 'text-green-700',
  GOOD:      'text-blue-700',
  AVERAGE:   'text-yellow-700',
  POOR:      'text-red-700',
};

export default function EvaluationHistory() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h2 className="text-sm font-bold text-gray-800">Evaluation History</h2>
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <RotateCcw size={14} className="text-gray-400" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <Download size={14} className="text-gray-400" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px]">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {['EMPLOYEE', 'PERIOD', 'SCORE', 'RATING', 'EVALUATOR'].map(h => (
                <th key={h} className="text-left px-4 py-2.5 text-[9px] font-bold text-gray-400 tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {history.map((row, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2.5 text-xs font-semibold text-gray-900">{row.name}</td>
                <td className="px-4 py-2.5 text-[11px] text-gray-500">{row.period}</td>
                <td className="px-4 py-2.5 text-xs font-bold text-gray-900">{row.score}</td>
                <td className="px-4 py-2.5">
                  <span className={`text-[10px] font-black tracking-wide ${ratingBg[row.rating]}`}>
                    {row.rating}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-[11px] text-gray-500">{row.evaluator}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}