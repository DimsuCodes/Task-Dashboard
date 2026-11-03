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