// TODO
// x 1. Filter function: takes tasks + filter options, returns only matching tasks
//    (status, priority, and search text)
// x2. Sort function: takes tasks + a sort choice, returns a NEW sorted array (don't mutate state)
// x3. Validation helper: takes form data, returns the errors (if any)
// x4. Date formatting helper: turns a stored date into something readable
// x5. Stats helper (for Dashboard): counts by status, etc.
// Keep these pure: same input -> same output, no useState, no localStorage in here
import type { Task, TaskFilters, SortOption, TaskFormData, FormErrors } from '../types';


export function filterTasks (tasks: Task[], filters: TaskFilters): Task[] {
           return tasks.filter ((task) => {
                //* its like if a color filter is set to blue and if it doesnt match then 
        //drop it

            if(filters.status && task.status !== filters.status) return false; // this is one "test"
            if(filters.priority && task.priority !== filters.priority) return false; // this is one "test"

            //search: lowercase both sides, check if the name contains text

            const search = filters.search.toLowerCase();
                if(!task.title.toLowerCase().includes(search) && !task.description.toLowerCase().includes(search)) return false
                    
            return true; 
            //*passed every test so keep it.//
    });
}

export function sortTasks(tasks: Task[], sortBy: SortOption): Task[] {
    const copy = [...tasks] 

    if (sortBy === 'title') {
        return copy.sort((a, b) =>
        a.title.localeCompare(b.title));
    }
        return copy.sort((a, b) =>
        a.dueDate.localeCompare(b.dueDate));
    
}

//checks the form data and returns an error message for each invalkid field.

export function validateTask(data: TaskFormData): FormErrors {
    const errors: FormErrors = {};

    // .trim removes spaces, so "  " counts as empty
    if (data.title.trim() === '') {
        errors.title = 'Please enter a title..' //the message user will see
    }

    if (data.dueDate === '') {
        errors.dueDate = 'Set a due date..'
    }
    return errors;
}
 

// Turns a stored "YYYY-MM-DD" date into a readable one, like "Oct 31, 2026"
export function formatDate(date: string): string {
  if (date === '') return 'No due date';

  // 'T00:00:00' makes it local midnight (see the note below)
  return new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',     // 'numeric' shows 31
    year: 'numeric',    // same word for the year
  });
}
    

// Counts tasks by status for the Dashboard summary
export function getTaskStats(tasks: Task[]) {
  return {
    total: tasks.length,
    pending: tasks.filter((t) => t.status === 'pending').length,
    inProgress: tasks.filter((t) => t.status === 'in-progress').length,
    completed: tasks.filter((t) => t.status === 'completed').length,
  };
}