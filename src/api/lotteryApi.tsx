import axios from 'axios';

export interface DataRow {
  id: string;
  round: string;
  value1: string;
  value2?: string;
  value3?: string;
  isSubRow?: boolean;
}

export const fetchLotteryData = async (): Promise<DataRow[]> => {
  const response = await axios.get<DataRow[]>('https://laravel-production-4bdc.up.railway.app/api/lottery/'); // จริงๆควรใช้เป็น .env เพิ่อ dev บน local เพื่อเพิ่มความปลอดภัย
  return response.data;
};