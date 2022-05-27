declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STAGE: 'local' | 'development' | 'staging' | 'production'
      NODE_ENV: 'development' | 'test' | 'production'

      API_HOST: string
      API_PORT: string
      API_URL: string

      MONGO_HOST: string
      MONGO_PORT: string
      MONGO_USER: string
      MONGO_PASSWORD: string
      MONGO_DATABASE: string
    }
  }
}

export {}
