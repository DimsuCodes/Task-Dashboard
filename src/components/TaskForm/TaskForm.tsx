
import { useState } from 'react';
import type { TaskFormData, FormErrors, TaskFormProps } from '../../types';
import { validateTask } from '../../utils/taskUtils';

// A blank slip, used to start (and reset) the form
const emptyForm: TaskFormData = {
    title: '',
    description: '',
    status: 'pending',     // which status should a new task start with?
    priority: 'low',   // pick a sensible default
    dueDate: '',
};

export function TaskForm({ onSubmit }: TaskFormProps) {
    const [formData, setFormData] = useState<TaskFormData>(emptyForm);
    const [errors, setErrors] = useState<FormErrors>({});

    // Updates the one field that changed, matched by the input's "name"
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Runs when the form is submitted: validate, then send the data up or show errors
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();                      // stop the page from reloading
        const newErrors = validateTask(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;  // has errors, so stop here

        onSubmit(formData);       // ring the doorbell 🔔 with the slip
        setFormData(emptyForm);   // clear the form
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input id="title" name="title" value={formData.title} onChange={handleChange} />
            {errors.title && <p>{errors.title}</p>}

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} />

            <label htmlFor="status">Status:</label>
            <select id="status" name="status" value={formData.status} onChange={handleChange}>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>

            <label htmlFor="priority">Priority:</label>
            <select id="priority" name="priority" value={formData.priority} onChange={handleChange}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <label htmlFor="dueDate">Due Date:</label>
            <input type="date" id="dueDate" name="dueDate" value={formData.dueDate} onChange={handleChange} />
            {errors.dueDate && <p>{errors.dueDate}</p>}


            <button type="submit">Add Task</button>
        </form>
    );
}
