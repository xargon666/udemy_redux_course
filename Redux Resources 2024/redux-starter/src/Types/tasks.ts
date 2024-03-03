export interface Action {
    type: string;
    payload: any; // Can be detailed further based on actual payload structure
  }
  
  // Define the State shape
  export interface State {
    tasks: {
      id: string;
      task: string;
      complete: boolean;
    }[];
  }
