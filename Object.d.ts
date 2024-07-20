import type { Kabab2Camel, Camel2Kabab } from './String';

export type ObjKabab2Camel<T> = {
  [K in keyof T as K extends string ? Kabab2Camel<K> : never]: T[K];
};
export type ObjKabab2CamelDeep<T> = {
  [K in keyof T as K extends string ? Kabab2Camel<K> : never]: NonNullable<
    T[K]
  > extends object
    ? T[K] extends Function
      ? T[K]
      : ObjKabab2Camel<T[K]>
    : T[K];
};

export type ObjCamel2Kabab<T> = {
  [K in keyof T as K extends string ? Camel2Kabab<K> : never]: T[K];
};
export type ObjCamel2KababDeep<T> = {
  [K in keyof T as K extends string ? Camel2Kabab<K> : never]: NonNullable<
    T[K]
  > extends object
    ? T[K] extends Function
      ? T[K]
      : ObjCamel2Kabab<T[K]>
    : T[K];
};

export type RequiredDeep<T> = Required<{
  [K in keyof T]: RequiredDeep<T[K]>;
}>;

export type PartialDeep<T> = Partial<{
  [K in keyof T]: PartialDeep<T[K]>;
}>;
