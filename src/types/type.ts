// errors type
export interface ErrorsType {
  [key: string]: string | undefined;
}

// auth type
export interface CredentialsType {
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

// boards type
export interface BoardType {
  userId: string;
  boardName: string;
  boardColumns: Columns[];
}

interface Columns {
  title: string;
  color: string;
}

// tasks type
export interface TaskType {
  id: string;
  title: string;
  description: string;
  status: string;
  boardName: string;
  subtasks: SubtaskType[] | null[];
}

export interface SubtaskType {
  title: string;
  checked: boolean;
}
