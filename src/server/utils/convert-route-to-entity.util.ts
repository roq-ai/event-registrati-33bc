const mapping: Record<string, string> = {
  admins: 'admin',
  events: 'event',
  participants: 'participant',
  registrations: 'registration',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
