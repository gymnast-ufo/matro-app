type IMetroStation = string;
export type IMetroLine = {
  line: string;
  stations: IMetroStation[];
};

export interface IMetroCity {
  id: number;
  name: string;
  lines?: IMetroLine[];
}