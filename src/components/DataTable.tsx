// components/DataTable.tsx
import React from 'react';

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

const DataTable: React.FC<DataTableProps> = ({ lotteryData }) => {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="min-w-full table-auto text-sm">
        <thead>
          <tr className="bg-slate-800 text-white">
            <th className="px-4 py-2 text-left font-bold">รางวัล</th>
            <th className="px-4 py-2 text-center font-bold">หมายเลข 1</th>
            <th className="px-4 py-2 text-center font-bold">หมายเลข 2</th>
            <th className="px-4 py-2 text-center font-bold">หมายเลข 3</th>
          </tr>
        </thead>
        <tbody>
          {lotteryData.length === 0 ? (
            <tr>
              <td colSpan={4} className="px-4 py-4 text-center text-slate-500">
                ยังไม่มีการสุ่มรางวัล
              </td>
            </tr>
          ) : (
            lotteryData.map((row) => (
              <tr
                key={row.id}
                className={
                  row.isSubRow
                    ? 'bg-slate-700 text-white'
                    : 'bg-white text-slate-900'
                }
              >
                <td className={`px-4 py-2 ${row.isSubRow ? 'pl-6' : ''}`}>
                  {row.round}
                </td>
                <td className="px-4 py-2 text-center">{row.value1 || '-'}</td>
                <td className="px-4 py-2 text-center">{row.value2 || '-'}</td>
                <td className="px-4 py-2 text-center">{row.value3 || '-'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;