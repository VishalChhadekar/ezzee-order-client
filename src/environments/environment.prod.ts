export const environment = {
    production: process.env["PRODUCTION"] === 'true',
    apiUrl: process.env["API_URL"] || 'default_api_url',
  };