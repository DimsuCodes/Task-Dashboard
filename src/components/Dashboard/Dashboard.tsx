// TODO
// 1. Decide: does the task state live here or in App? (pick one — only ONE owner)
// 2. Hold state: tasks, filter options, task being edited (if any)
// 3. Handlers: add, update, delete, change status — each returns a NEW array
// 4. Compute visible tasks = sort(filter(tasks)) using taskUtils (derive it, don't store it in state)
// 5. Show stats: total, count per status, etc.
// 6. Compose: TaskForm + TaskFilter + TaskList, passing data down and callbacks down
// 7. localStorage: load tasks on first render, save whenever tasks change
// 8. Export/import tasks as JSON
// 9. Responsive layout
// Extras (last): dark mode toggle, drag-and-drop reordering, animations
import { useState, useEffect } from 'react';
import type { Task, TaskFormData, TaskStatus, TaskFilters, SortOption } from '../../types';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskList } from '../TaskList/TaskList';
import { TaskFilter } from '../TaskFilter/TaskFilter';
import { filterTasks, sortTasks } from '../../utils/taskUtils';

// Owns all task state and connects the form, filter, and list together
export function Dashboard() {
  // Load saved tasks once, on first render (falls back to [] if nothing is saved or it's broken)
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const saved = localStorage.getItem('tasks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [filters, setFilters] = useState<TaskFilters>({ search: '' });
  const [sortBy, setSortBy] = useState<SortOption>('dueDate');

  // Not stored in state: worked out fresh on every render from tasks + filters + sortBy
  const visibleTasks = sortTasks(filterTasks(tasks, filters), sortBy);

  // Save tasks to localStorage whenever they change
  // TODO: fill the 2 blanks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add: copy the old tasks, plus one new task on the end
  const handleAdd = (data: TaskFormData) => {
    const newTask: Task = { ...data, id: crypto.randomUUID() };
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };


  const handleStatusChange = (id: string, newStatus: TaskStatus) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: newStatus} : t)));
  };

  return (
    <div>
      <h1>Task Dashboard</h1>
      <TaskForm onSubmit={handleAdd} />
      <TaskFilter filters={filters} sortBy={sortBy} onFilterChange={setFilters} onSortChange={setSortBy} />
      <TaskList tasks={visibleTasks}onStatusChange={handleStatusChange} onDelete={handleDelete} />
    </div>
  );
}