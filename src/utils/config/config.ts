import { cleanEnv, str } from 'envalid';

export const config = cleanEnv(process.env, {
  REACT_APP_SERVER_URL: str(),
});
