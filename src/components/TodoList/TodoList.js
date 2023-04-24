import React from 'react';
// import './TodoList.css';
import classNames from 'classnames';
import './TodoList.scss';
// Тудулист це компонент який рендерить
// const TodoList = ({ todos, onDeleteTodo }) => (
//   <ul className="TodoList">
//     {todos.map(({ id, text }) => (
//       <li key={id} className="TodoList__item">
//         <p className="TodoList__text">{text}</p>
//         <button onClick={() => onDeleteTodo(id)}>Удалить</button>
//       </li>
//     ))}
//   </ul>
// );

// export default TodoList;



// ===================================================
// // з свойства props ми деструктуруємо  todos
// const TodoList = ({ todos }) => (
//   <ul>
//     TodoList
//   </ul>
// );

// export default TodoList;

// ========================================================
// робимо рендер тудушки з App

// const TodoList = ({ todos }) => (
//   <ul>
//     {todos.map(todo => (
//       <li key={todo.id}>
//         <p>{todo.text}</p>
//       </li>
//     ))}
//   </ul>
// );

// export default TodoList;
// ==========================================
// деструкруризація

// const TodoList = ({ todos }) => (
//   <ul>
//     {todos.map(({id, text }) => (
//       <li key={id}>
//         <p>{text}</p>
//       </li>
//     ))}
//   </ul>
// );

// export default TodoList;

// ================================================
// робимо кнопку видалення і стилі

// const TodoList = ({ todos }) => (
//   <ul className="TodoList">
//     {todos.map(({id, text }) => (
//       <li key={id} className='TodoList__item'>
//         <p className="TodoList__text">{text}</p>
//         <button>Видалить</button>
//       </li>
//     ))}
//   </ul>
// );

// export default TodoList;
// ==========================================
// робимо деструкт. на видалення з App
// const TodoList = ({ todos, onDeleteTodo }) => (
//   <ul className="TodoList">
//     {todos.map(({id, text }) => (
//       <li key={id} className='TodoList__item'>
//         <p className="TodoList__text">{text}</p>
//         {/* видаляємо по id */}
//         <button onClick={() => onDeleteTodo(id)}>Видалить</button>
//       </li>
//     ))}
//   </ul>
// );

// export default TodoList;


// ==================================================






const TodoList = ({ todos, onDeleteTodo,  onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({id, text, completed}) => (
      <li key={id} className={classNames('TodoList__item', {
        'TodoList__item--completed': completed,
      })}>
        <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          // при ченжі ми передаємо метод onToggleCompleted(id)
          onChange={() => onToggleCompleted(id)}
        />
        <p className="TodoList__text">{text}</p>
        {/* видаляємо по id */}
        <button type="button"
          className='TodoList__btn'
          onClick={() => onDeleteTodo(id)}>Видалить
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
