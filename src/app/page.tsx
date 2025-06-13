"use client";

import React, { useState } from 'react';
import DataTable, { DataRow } from '@/components/DataTable';
import InputForm from '@/components/InputForm';
import { fetchLotteryData } from '@/api/lotteryApi';

export default function Home() {
  const [lotteryData, setLotteryData] = useState<DataRow[]>([]);

  const handleRandomClick = async () => {
    try {
      const data = await fetchLotteryData();
      setLotteryData(data);
    } catch (error) {
      console.error('Failed to fetch lottery data:', error);
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-slate-800 text-white p-4 rounded-lg">
          <h1 className="text-xl font-bold text-center text-cyan-400">
            รางวัลลีดเดอร์ Diversition
          </h1>
        </div>


        <div className="text-center">
          <button
            onClick={handleRandomClick}
            className="bg-cyan-500 w-full text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            <span className="font-semibold">สุ่มรางวัล</span>
          </button>
        </div>

        {/* Data Table */}
        <div className="flex flex-col">
          <div className="text-lg font-semibold text-slate-800 text-center py-4">
            รายการผลรางวัล
          </div>
          <DataTable lotteryData={lotteryData} />
        </div>

        {/* Input From */}
        <div className="flex flex-col">
          <div className="text-lg font-semibold text-slate-800 text-center py-4">
            ตรวจสอบรางวัล
          </div>
          <InputForm lotteryData={lotteryData}/>
        </div>


      </div>
    </div>
  );
}
