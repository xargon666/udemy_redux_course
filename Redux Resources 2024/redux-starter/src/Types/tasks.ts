export interface Task {
  id: string;
  task: string;
  complete: boolean;
};

export interface Slice {
  tasks: Task[],
  loading: boolean,
  error: string|null,
}
