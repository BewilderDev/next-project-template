import { cookies } from 'next/headers'

// Constants
export const TOKEN_COOKIE_NAME = 'auth_token'
export const TOKEN_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
  maxAge: 60 * 60 * 24 * 7 // 1 week
}

// Server-side functions
export const setServerAuthToken = (token: string) => {
  cookies().set(TOKEN_COOKIE_NAME, token, TOKEN_COOKIE_OPTIONS)
}

export const getServerAuthToken = () => {
  return cookies().get(TOKEN_COOKIE_NAME)?.value
}

export const removeServerAuthToken = () => {
  cookies().delete(TOKEN_COOKIE_NAME)
}

export const isServerAuthenticated = () => {
  return !!getServerAuthToken()
} 