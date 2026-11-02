// TODO
// 1. Receive the (already filtered/sorted) tasks as a prop
// 2. Render one TaskItem per task — with a stable key (which field?)
// 3. Pass each TaskItem the callbacks it needs (status change, delete, edit)
// 4. Show an empty state when there are no tasks
import type { TaskListProps } from '../../types';
import { TaskItem } from './TaskItem';

// Renders one TaskItem per task, or a message when the list is empty
export function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add one above!</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}