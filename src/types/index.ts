// TODO (do this file FIRST — every other file imports from here)
// 1. Define the allowed values for task status (a fixed set, not any string)
// 2. Define the allowed values for task priority
// 3. Task interface: every field one task needs (identity, user input, status, priority, dates)
// 4. Form data interface: what the user fills in (hint: not everything on Task comes from the form)
// 5. Filter options interface: what the user can filter/search by
// 6. Props interfaces for each component (TaskListProps, TaskItemProps, TaskFormProps, TaskFilterProps)
//    Write these as you build each component — props = data in + callbacks out


//created TaskStatus and PriorityStatus so we can have add more statuses to the union later if needed.
export type TaskStatus = 'pending' | 'in-progress' | 'completed';
export type PriorityStatus =  'low' | 'medium' | 'high';
export interface TaskFilters { status?: TaskStatus; priority?: PriorityStatus; search: string; }
export type SortOption = 'dueDate' | 'title';
// creating a reusable interface or type to model what a single task looks like.
//this is the interface's data: This is what is stored, saved to LocalStorage, filtered and sorted.
export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: PriorityStatus
    dueDate: string;
}

//TaskFormData will be used for our form slip

export interface TaskFormData {
    title: string;
    description: string;
    status: TaskStatus;
    priority: PriorityStatus
    dueDate: string;
}

export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
//           ↑ what goes in      ↑ what comes out
}

// types/index.ts
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// types/index.ts
export interface TaskFilterProps {
  onFilterChange: (filters: TaskFilters) => void;
}

export interface FormErrors {
  title?: string;
  dueDate?: string;
}