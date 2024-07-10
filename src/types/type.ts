// auth type
interface CredentialsType {
  email: string;
  password: string;
}

// user type
export interface UserType {
  id: string;
  email?: string;
  user_metadata: UserMetaData;
  role?: string;
}

interface UserMetaData {
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}
