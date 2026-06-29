const perfectAppBaseUrl =
  process.env.NEXT_PUBLIC_PERFECT_APP_URL?.replace(/\/$/, '') ?? '';

export const signInUrl = perfectAppBaseUrl || '#';
export const signUpUrl = perfectAppBaseUrl ? `${perfectAppBaseUrl}/signup` : '#';
export const resellerApiUrl = perfectAppBaseUrl ? `${perfectAppBaseUrl}/api` : '#';
