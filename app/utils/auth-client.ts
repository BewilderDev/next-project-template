'use client'

// Constants
const TOKEN_COOKIE_NAME = 'auth_token'
const TOKEN_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
  maxAge: 60 * 60 * 24 * 7 // 1 week
}

// Client-side functions
export const setAuthToken = (token: string) => {
  document.cookie = `${TOKEN_COOKIE_NAME}=${token}; path=/; max-age=${TOKEN_COOKIE_OPTIONS.maxAge}; secure=${TOKEN_COOKIE_OPTIONS.secure}; samesite=${TOKEN_COOKIE_OPTIONS.sameSite}`
}

export const removeAuthToken = () => {
  document.cookie = `${TOKEN_COOKIE_NAME}=; path=/; max-age=0`
}

export const getAuthToken = () => {
  const cookies = document.cookie.split(';')
  const tokenCookie = cookies.find(cookie => cookie.trim().startsWith(`${TOKEN_COOKIE_NAME}=`))
  return tokenCookie ? tokenCookie.split('=')[1] : null
}

export const isAuthenticated = () => {
  return !!getAuthToken()
} 