export enum UserRole {
  Admin = "admin",
  User = "user",
}

export interface UserInfo {
  cart: string[];
  ownCourses: string[];
  google?: {
    id: string;
    name: string;
    token: string;
    email: string;
  };
  _id: string;
  name: string;
  userPic: string;
  roles: UserRole[];
}

export interface User {
  auth: boolean;
  loading: boolean;
  error: string;
  userInfo: UserInfo;
}
