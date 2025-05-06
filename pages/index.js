import { useState, useEffect } from 'react';

export default function Home({ theme }) {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) setList(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(list));
  }, [list]);

  const addTask = () => {
    if (!task.trim()) return;
    const date = new Date().toLocaleDateString('ru-RU');
    setList(prev => [...prev, { text: task, date }]);
    setTask('');
  };

  const removeTask = (index) => {
    setList(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Список задач</h1>
      <div className="input-group">
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Новая задача"
        />
        <button onClick={addTask}>Добавить</button>
      </div>
      <ul className="todo-list">
        {list.map((item, idx) => (
          <li key={idx}>
            <span className="task-text">{item.text}</span>
            <span className="task-date">{item.date}</span>
            <button className="delete-btn" onClick={() => removeTask(idx)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}