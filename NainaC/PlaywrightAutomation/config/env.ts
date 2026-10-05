import dotenv from 'dotenv';
import path from 'path';

const environment = process.env.TEST_ENV || 'qa'
dotenv.config({path:path.resolve(__dirname, `/.env.${environment}`)});