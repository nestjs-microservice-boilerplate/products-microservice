import 'dotenv/config';
import * as joi from 'joi';

export interface EnvVars {
  PORT: number;
  DATABASE_URL: string;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required()
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);
const EnvVars: EnvVars = value;

if (error) {
  throw new Error('Config validation failed' + error.message + '');
}



export const envs = {
    port:EnvVars.PORT,
    databaseUrl: EnvVars.DATABASE_URL
}