export type IsNullable<T> = T | null;

export type IsUndefinable<T> = T | undefined;

export type IsNullableOrUndefinable<T> = T | null | undefined;

export type Intersectize<T, U> = T & U;
export type IntersectizeThree<T, U, V> = T & U & V;
export type IntersectizeFour<T, U, V, W> = T & U & V & W;

export type Unionize<T, U> = T | U;
export type UnionizeThree<T, U, V> = T | U | V;
export type UnionizeFour<T, U, V, W> = T | U | V | W;

export type Select<T, K extends keyof T> = Pick<T, K>;

export type ReturnsVoid = () => void;
