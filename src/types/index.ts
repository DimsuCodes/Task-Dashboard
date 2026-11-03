
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
  filters: TaskFilters;
  sortBy: SortOption;
  onFilterChange: (filters: TaskFilters) => void;
  onSortChange: (sortBy: SortOption) => void;
}

export interface FormErrors {
  title?: string;
  dueDate?: string;
}

export interface TaskFormProps {
  onSubmit: (data: TaskFormData) => void;
}

