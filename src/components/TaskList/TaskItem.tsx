// TODO
// 1. Display one task: its fields, with the date formatted (helper from taskUtils)
// 2. Control to change status -> calls a callback prop with this task's id + new status
// 3. Delete button -> calls a callback prop with this task's id
// 4. Edit button -> tells the parent which task to edit
// This component should NOT own the task list state — it only reports events up
import type { TaskItemProps, TaskStatus } from '../../types';
import { formatDate } from '../../utils/taskUtils';

// Shows one task. Reports status changes and deletes up to the parent.
export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due: {formatDate(task.dueDate)}</p>

      <select
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
      >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
      </select>

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}