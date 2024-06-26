// export const backendURL = 'https://inf227i1.inf.pucp.edu.pe/rest'; // Para despliegue
// export const backendURL = 'https://inf227i4.inf.pucp.edu.pe/'; // Este es para local
// export const backendURL = 'http://54.210.61.246:8080';
// export const localURL = 'http://localhost:8080';

// export const backendURL = 'http://192.168.1.115:4000';
// export const backendURL = 'http://localhost:4000';
// export const backendURL = 'http://192.168.1.250:4000';
// export const backendWSURL = 'ws://192.168.1.250:5000';
export const backendURL = 'http://localhost:4000';
export const backendWSURL = 'ws://localhost:5000';
export const keyCodeBack =
  '01a828fgh8d56f25ba6dddb73b0ei574675b7721e299127a69h57651d67d3230';

export const auth0Config = {
  client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
  domain: process.env.REACT_APP_AUTH0_DOMAIN
};

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

export const amplifyConfig = {
  aws_project_region: process.env.REACT_APP_AWS_PROJECT_REGION,
  aws_cognito_identity_pool_id:
    process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.REACT_APP_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id:
    process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID
};
