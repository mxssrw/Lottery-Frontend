"use client";
import React, { useState } from 'react';
export interface DataRow {
    id: string;
    round: string;
    value1: string;
    value2?: string;
    value3?: string;
    isSubRow?: boolean;
}

interface DataTableProps {
    lotteryData: DataRow[];
}
const InputForm: React.FC<DataTableProps> = ({ lotteryData }) => {
    const [lotteryNumber, setLotteryNumber] = useState('905');
    const [result, setResult] = useState('');
    const [toast, setToast] = useState<{ title: string; description: string; type?: 'success' | 'error' } | null>(null);

    const handleCheck = () => {
        const trimmedInput = lotteryNumber.trim();

        const matchedRounds = lotteryData
            .filter(item =>
                [item.value1, item.value2, item.value3].filter(Boolean).includes(trimmedInput)
            )
            .map(item => item.round);

        if (matchedRounds.length > 0) {
            setResult(`${trimmedInput} ถูกรางวัล: ${matchedRounds.join(', ')}`);
            setToast({
                title: 'ตรวจสอบสำเร็จ',
                description: 'พบรางวัลที่ตรงกับหมายเลขของคุณ',
                type: 'success',
            });
        } else {
            setResult('ไม่ถูกรางวัล');
            setToast({
                title: 'ตรวจสอบสำเร็จ',
                description: 'ไม่พบรางวัลที่ตรงกับหมายเลขของคุณ',
                type: 'error',
            });
        }

        setTimeout(() => setToast(null), 3000);
    };  

    return (
        <div className="space-y-4">
            {/* Input */}
            <div className="space-y-2">
                <label htmlFor="lottery-number" className="text-slate-700 font-medium">
                    เลขลอตเตอรี :
                </label>
                <input
                    id="lottery-number"
                    type="text"
                    value={lotteryNumber}
                    onChange={(e) => setLotteryNumber(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800"
                    placeholder="กรุณาใส่หมายเลข"
                />
            </div>

            {/* Buttons */}
            <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-center hover:bg-cyan-600 transition-colors">
                <button onClick={handleCheck} className="w-full">
                    <span className="font-semibold">ตรวจสอบรางวัล</span>
                </button>
            </div>

            {/* Result Display */}
            {result && (
                <div className="bg-yellow-400 text-slate-800 font-semibold text-center p-4 rounded-md">
                    {result}
                </div>
            )}

            {/* Simple Toast */}
            {toast && (
                <div
                    className={`fixed bottom-6 right-6 z-50 p-4 rounded-md shadow-md text-white ${toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'
                        }`}
                >
                    <p className="font-bold">{toast.title}</p>
                    <p className="text-sm">{toast.description}</p>
                </div>
            )}
        </div>
    );
};

export default InputForm;