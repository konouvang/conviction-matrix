import pg from 'pg';
import url, { UrlWithStringQuery } from 'url';

let config: object = {};

if (process.env.DATABASE_URL) {
  const params = url.parse(process.env.DATABASE_URL) as any;
  const auth = params.auth.split(':') ;

  config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true,
    max: 10,
    idleTimeoutMillis: 30000,
  };
} else {
  config = {
    host: 'localhost',
    port: 5432,
    database: 'suitup',
    max: 10,
    idleTimeoutMillis: 30000,
  };
}

const pool: pg.Pool = new pg.Pool(config);

pool.on('error', (err): void => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

export default pool;
