// TODO
// 1. Filter function: takes tasks + filter options, returns only matching tasks
//    (status, priority, and search text)
// 2. Sort function: takes tasks + a sort choice, returns a NEW sorted array (don't mutate state)
// 3. Validation helper: takes form data, returns the errors (if any)
// 4. Date formatting helper: turns a stored date into something readable
// 5. Stats helper (for Dashboard): counts by status, etc.
// Keep these pure: same input -> same output, no useState, no localStorage in here
import type { Task, TaskFilters, SortOption } from '../types';


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
 


    