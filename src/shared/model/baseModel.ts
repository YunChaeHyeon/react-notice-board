export type BaseModel<T> = {
  resultCode: number;
  resultMessage: string;
  data: T;
};
