export interface ITextField {
  range: { [key: string]: number };
  value: number;
  setRange: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
  min: number;
  max: number;
  step: number;
  title: string;
  text: string;
}
