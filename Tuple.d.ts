export type ExtractTuple<
  T extends any[],
  E extends number,
  ACC extends unknown[] = [],
> = T extends [infer F, ...infer Rest]
  ? E extends ACC['length']
    ? F
    : ExtractTuple<Rest, E, [...ACC, F]>
  : never;

export type ReplaceTuple<
  T extends any[],
  E extends number,
  R,
  ACC extends unknown[] = [],
> = T['length'] extends 0
  ? ACC
  : T extends [infer F, ...infer Rest]
  ? E extends ACC['length']
    ? ReplaceTuple<Rest, E, R, [...ACC, R]>
    : ReplaceTuple<Rest, E, R, [...ACC, F]>
  : never;
