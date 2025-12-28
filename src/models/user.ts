export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
}

export const createUser = (username: string, email: string): User => {
  return {
    id: Math.random().toString(36).substring(7),
    username,
    email,
    createdAt: new Date(),
  };
};
