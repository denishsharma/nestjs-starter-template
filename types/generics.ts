export type DeeplyNestedToAny<T> = {
    [K in keyof T]: T[K] extends object ? DeeplyNestedToAny<T[K]> : any; } extends infer O
    ? { [K in keyof O]: O[K] extends readonly any[] ? Readonly<DeeplyNestedToAny<O[K][number]>>[] : O[K] }
    : never;

export type WritableOf<T> =
    T extends string | number | boolean | symbol | bigint | null | undefined ? T :
        T extends Array<infer U> ? Array<WritableOf<U>> :
            T extends Function ? T :
                T extends object ? {
                    -readonly [K in keyof T]: WritableOf<T[K]>
                } : T;
