
import type { TaskFilterProps, TaskStatus, PriorityStatus, SortOption } from '../../types';

// Controls for filtering, searching, and sorting. Reports every change up to Dashboard.
export function TaskFilter({ filters, sortBy, onFilterChange, onSortChange }: TaskFilterProps) {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        value={filters.search}
        onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
      />

      <label htmlFor="filterStatus">Status:</label>
      <select
        id="filterStatus"
        value={filters.status ?? ''}
        onChange={(e) =>
          onFilterChange({ ...filters, status: (e.target.value || undefined) as TaskStatus | undefined })
        }
      >
        <option value="">All</option>
        <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
      </select>

      <label htmlFor="filterPriority">Priority:</label>
      <select
        id="filterPriority"
        value={filters.priority ?? ''}
        onChange={(e) =>
          onFilterChange({ ...filters, priority: (e.target.value || undefined) as PriorityStatus | undefined })
        }
      >
                <option value="">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>


      <label htmlFor="sortBy">Sort by:</label>
      <select id="sortBy" value={sortBy} onChange={(e) => onSortChange(e.target.value as SortOption)}>
        <option value="dueDate">Due date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}