export type DeeplyNestedToAny<T> = {
    [K in keyof T]: T[K] extends object ? DeeplyNestedToAny<T[K]> : any;
};
