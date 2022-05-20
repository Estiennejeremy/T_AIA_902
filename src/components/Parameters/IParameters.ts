export interface IParameters {
  range: { [key: string]: number };
  setRange: React.Dispatch<
    React.SetStateAction<{
      [key: string]: number;
    }>
  >;
}
