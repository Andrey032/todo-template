import './Task.css';

export function Task({ className, description, created }) {
  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{description}</span>
          <span className="created">{created}</span>
        </label>
        <button className="icon icon-edit" />
        <button className="icon icon-destroy" />
      </div>
      {className === "editing" ? (
        <input type="text" className="edit" defaultValue="Editing task" />
      ) : null}
    </li>
  );
}
