export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  MERCHANT = 'MERCHANT',
  ADMIN = 'ADMIN',
}

export interface UserDTO {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  suspended: boolean;
  emailVerified: boolean;
}

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}
