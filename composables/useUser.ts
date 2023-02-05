import { User } from '@firebase/auth';

type UserState =
  | User
  | { name?: string | null; email?: string | null; picture?: string | null }
  | null;

export const useUser = () => {
  return useState<UserState>('user', () => null);
};