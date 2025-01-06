
import {cleanEnv, testOnly,str, port,} from 'envalid'
import dotenv from 'dotenv'

dotenv.config()

export const env = cleanEnv(process.env,{
    PORT: port({devDefault:testOnly(3000)}),
    OPEN_API_KEY: str({devDefault:testOnly(""),desc:"open ai key"})
})