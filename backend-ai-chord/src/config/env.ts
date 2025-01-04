import dotenv from 'dotenv';
import { cleanEnv, str } from 'envalid';

dotenv.config();

export const env = cleanEnv(process.env, {
    OPEN_API_KEY: str({
        devDefault: '', 
        desc: 'OpenAI API key required to access OpenAI services',
    }),
});
