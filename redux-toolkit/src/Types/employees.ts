export interface Employee {
    id: string;
    name: string;
    username: string;
  };
  
  export interface Slice {
    employees: Employee[],
    loading: boolean,
    error: string|null,
  }
  