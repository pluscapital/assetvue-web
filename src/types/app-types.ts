import { User } from "firebase/auth";

export type SeoOpts = {
  title: string;
  description: string;
  image?: string;
};

export interface IUserContext {
  authUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  dbUser: string | null;
}
