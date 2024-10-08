export type NOOP = () => void;

export type ANYOP = (...params: any[]) => any | void;


export type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;
