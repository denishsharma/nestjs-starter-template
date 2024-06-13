import type { DeeplyNestedToAny } from "~types/generics";

export type ConfigurationKeyOf<T extends object> = {
    [K in keyof T & (string | number)]: T[K] extends any[]
        ? `${K}`
        : T[K] extends object
            ? `${K}` | `${K}.${ConfigurationKeyOf<T[K]>}`
            : `${K}`;
}[keyof T & (string | number)];

export type ConfigurationValueType<T, P extends string> =
    P extends `${infer Key}.${infer Rest}`
        ? Key extends keyof T
            ? T[Key] extends object
                ? Rest extends ConfigurationKeyOf<T[Key]>
                    ? ConfigurationValueType<T[Key], Rest>
                    : never
                : never
            : never
        : P extends keyof T
            ? T[P]
            : never;

export type MapConfigurationOf<T extends object> = DeeplyNestedToAny<T>;
