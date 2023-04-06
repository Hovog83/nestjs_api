export let config = {
  development: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'nestjs1',
  },
  test: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'roku',
    password: 'roku',
    database: 'test',
  },
  production: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'roku',
    password: 'roku',
    database: 'prod',
  },
}



