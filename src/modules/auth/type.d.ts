declare module 'APP_MODULE' {
  type AuthStateType = {
    user?: {
      id: number
      username: string
      email: string
      provider: string
      confirmed: boolean
      blocked: boolean
      createdAt: Date
      updatedAt: Date
      roleName: string
    }
    jwt?: string
    loading: boolean
  }
}
