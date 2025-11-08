export interface ProcessContextType {
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
}

export interface Process {
  name: string;
  key: string;
};
