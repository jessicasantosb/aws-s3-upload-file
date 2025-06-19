declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AWS_BUCKET_NAME: string;
      AWS_REGION: string;
      AWS_ACCESS_KEY: string;
      AWS_SECRET_ACCESS_KEY: string;
    }
  }
}

export {};
