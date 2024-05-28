import 'dotenv/config';

export const config = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT || '3000',
  database: {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  storage: {
    path: './storages',
  },
  jwt: {
    tokenSecret: process.env.JWT_TOKEN_SECRET,
    tokenExpire: process.env.JWT_TOKEN_EXPIRE,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    refreshExpire: process.env.JWT_REFRESH_EXPIRE,
  },
};
