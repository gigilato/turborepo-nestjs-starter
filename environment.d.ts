declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STAGE: 'local' | 'development' | 'staging' | 'production'
      NODE_ENV: 'development' | 'test' | 'production'

      API_HOST: string
      API_PORT: number
      API_URL: string
    }
  }
}

export {}
