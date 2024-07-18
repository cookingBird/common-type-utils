export type Kabab2Camel<T extends string> = T extends `${infer First}-${infer Rest}`
  ? `${First}${Capitalize<Kabab2Camel<Rest>>}`
  : T;
export type Camel2Kabab<T extends string> = T extends `${infer First}${infer Rest}`
  ? First extends Capitalize<First>
    ? `-${Uncapitalize<First>}${Camel2Kabab<Rest>}`
    : `${First}${Camel2Kabab<Rest>}`
  : T;
