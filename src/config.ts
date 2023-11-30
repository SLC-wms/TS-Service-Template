import dotenv from 'dotenv';

dotenv.config();

function getEnv(variable: string, exc: string | undefined = undefined) {
    const value = process.env[variable] || exc;
    if (typeof value !== 'undefined') {
        return value;
    } else {
        throw new Error(`Variable '${variable}' is missing`);
    }
}

export const PORT = getEnv('PORT', '8080');
