import { IDatabaseConfiguration } from "~bootstrap/config/configuration.schema";
import { DeeplyNestedToAny } from "~types/generics";

export type HJoinKey<K, P> = K extends string | number ? P extends string | number ? `${K}.${P}` : never : never;

export type HConfigurationKeyOf<T extends object> = {
    [K in keyof T & (string | number)]: T[K] extends any[]
        ? `${K}`
        : T[K] extends object
            ? `${K}` | `${K}.${HConfigurationKeyOf<T[K]>}`
            : `${K}`;
}[keyof T & (string | number)];

export type HConfigurationValueType<T, P extends string> =
    P extends `${infer Key}.${infer Rest}`
        ? Key extends keyof T
            ? T[Key] extends object
                ? Rest extends HConfigurationKeyOf<T[Key]>
                    ? HConfigurationValueType<T[Key], Rest>
                    : never
                : never
            : never
        : P extends keyof T
            ? T[P]
            : never;

export type MapConfigurationOf<T extends object> = DeeplyNestedToAny<T>;

// Database Configuration Type Helpers
export type HDatabaseConnectionName<T extends readonly ({ name: string } & object)[]> = T[number]["name"];

type HDatabaseConfigurationOf<T extends readonly ({ name: string } & object)[], K extends HDatabaseConnectionName<T>> = Extract<T[number], { name: K }>;

export type HDatabaseConnectionKey<T extends readonly ({ name: string } & object)[]> = {
    [K in HDatabaseConnectionName<T>]: K | HJoinKey<K, keyof HDatabaseConfigurationOf<T, K>>;
}[HDatabaseConnectionName<T>];

type HSingleDatabaseConfiguration = IDatabaseConfiguration[number];

export type HDatabaseConfigurationKeyValue<T extends readonly ({ name: string } & object)[], K extends HDatabaseConnectionKey<T>> =
 K extends `${infer Key}.${infer Rest}`
     ? Key extends HDatabaseConnectionName<T>
         ? Rest extends keyof HDatabaseConfigurationOf<T, Key> & keyof HSingleDatabaseConfiguration
             ? Rest extends "name" | "default" ? HDatabaseConfigurationOf<T, Key>[Rest]
                 : HSingleDatabaseConfiguration[Extract<keyof HSingleDatabaseConfiguration, Rest>]
             : never
         : never
     : K extends HDatabaseConnectionName<T>
         ? { [S in keyof HDatabaseConfigurationOf<T, K>]: S extends "name" | "default" ? HDatabaseConfigurationOf<T, K>[S] : HSingleDatabaseConfiguration[S & keyof HSingleDatabaseConfiguration] }
         : never;
