export type EnhanceParamsType<
  T extends (...params: any) => any,
  I extends number,
  E extends object | unknown,
> = T extends (...params: infer P) => infer R
  ? (...params: ReplaceTuple<P, I, E | ExtractTuple<P, I>>) => R
  : never;

export type EnhanceReturnType<
  T extends (...params: any) => any,
  E extends object | unknown,
> = T extends (...params: any) => infer R ? (...params: any) => E | R : never;
