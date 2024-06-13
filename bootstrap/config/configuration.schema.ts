import { z } from "zod";

const appConfigurationSchema = z.object({
    env: z.enum(["development", "production", "test"]).default("development"),
    port: z.coerce.number().default(3000),
}).default({});

const databaseConfigurationSchema = z.record(
    z.string(),
    z.object({
        type: z.enum(["mysql", "postgres", "sqlite", "mariadb", "mssql"]),
        host: z.string().nullish(),
        port: z.coerce.number().nullish(),
        username: z.string().nullish(),
        password: z.string().nullish(),
        database: z.string().nullish(),
    }),
).default({});

export const configurationSchema = z.object({
    app: appConfigurationSchema,
    db: databaseConfigurationSchema,
});

export interface IApplicationConfiguration extends z.infer<typeof appConfigurationSchema> {}

export interface IDatabaseConfiguration extends z.infer<typeof databaseConfigurationSchema> {}

export interface IConfiguration extends z.infer<typeof configurationSchema> {}
