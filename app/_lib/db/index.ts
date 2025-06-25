import { drizzle } from 'drizzle-orm/neon-http';
import { DATABASE_URL } from '../env';
import * as schema from './schemas'

export const db = drizzle(DATABASE_URL , { schema });