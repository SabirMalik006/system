import React from 'react';
import { Trophy, Award, Medal, Star } from 'lucide-react';

const performers = [
  {
    rank: '1st',
    rankBg: 'bg-[#C9A517]',
    rankText: 'text-white',
    name: 'Ahmed Ayyaz',
    role: 'Operations Dept.',
    score: '98.5',
    icon: Trophy,
    iconColor: 'text-[#1E4D7B]',
    cardBorder: 'border-[#91760B]',
    scoreBold: true,
  },
  {
    rank: '2nd',
    rankBg: 'bg-[#4A6FA5]',
    rankText: 'text-white',
    name: 'Ali Khan',
    role: 'Product Design',
    score: '92.4',
    icon: Award,
    iconColor: 'text-[#1E4D7B]',
    cardBorder: 'border-[#03244D]',
    scoreBold: false,
  },
  {
    rank: '3rd',
rankBg: 'bg-[#760A0ACC]',
    rankText: 'text-white',
    name: 'Shaheen Akhtar',
    role: 'Engineering',
    score: '89.2',
    icon: Medal,
    iconColor: 'text-[#1E4D7B]',
    cardBorder: 'border-[#760A0A80]',
    scoreBold: false,
  },
  {
    rank: '4th',
    rankBg: 'bg-[#1A8FA0]',
    rankText: 'text-white',
    name: 'Imran Abbas',
    role: 'Marketing',
    score: '85.0',
    icon: Star,
    iconColor: 'text-[#1E4D7B]',
    cardBorder: 'border-[#760A0A80]',
    scoreBold: false,
  },
];

export default function TopPerformersLeaderboard() {
  return (
    <div className="bg-transparent">
      {/* Section Title */}
      <div className="mb-4">
        <h2 className="text-sm font-black text-gray-900">Top Performers Leaderboard</h2>
        <p className="text-xs text-gray-400 mt-0.5">Current rankings based on Q2 Performance Scores</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
        {performers.map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={i} className="relative">
              {/* Rank badge — top right, overlapping corner */}
              <div className={`absolute -top-3 -right-2 z-10 ${p.rankBg} ${p.rankText} text-[11px] font-black p-2 rounded-full shadow-md`}>
                {p.rank}
              </div>

              {/* Card */}
              <div className={`bg-[#F8FAFC] rounded-md border-2 ${p.cardBorder} p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow`}>

                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4 mt-1">
                  <Icon size={26} className={p.iconColor} strokeWidth={1.5} />
                </div>

                {/* Name */}
                    <div className="text-lg font-bold text-[#1E4D7B] leading-tight mb-1">
                  {p.name}
                </div>

                {/* Role */}
                <div className="text-md text-[#5A7A9A] font-normal mb-5">
                  {p.role}
                </div>



                {/* Score */}
                <div className={`text-lg font-medium mb-6 ${p.scoreBold ? 'text-gray-900' : 'text-gray-900'}`}>
                  {p.score}
                </div>

                {/* Total Score label */}
                <div className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">
                  Total Score
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}