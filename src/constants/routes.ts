export const ROUTES = {
  // Auth Stack
  LOGIN: 'Login',
  SIGNUP: 'Signup',

  // Main Stack
  MAIN: 'Main',
  HOME: 'Home',
} as const;

export type RouteNames = typeof ROUTES[keyof typeof ROUTES];

export default ROUTES; 