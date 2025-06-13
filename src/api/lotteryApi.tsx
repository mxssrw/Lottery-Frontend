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
  const response = await axios.get<DataRow[]>('http://localhost:8000/api/lottery');
  return response.data;
};