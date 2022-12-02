module.exports = {
  apps: [
    {
      name: 'wa-web',
      script: './main.js',
      instances: 1,
      exec_mode: 'cluster',
      increment_var: 'PORT',
      env_production: {
        PORT: 3050,
        // VARIABLES DE LA APP
        APP_URL: 'http://localhost:3050',
        APP_FILE_MAX_SIZE: '100mb',
      },
    },
  ],
};
