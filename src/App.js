import React, { Component } from 'react';
import shortid from 'shortid';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
// import Form from './components/Form';
import initialTodos from './todos.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// class App extends Component {
//   state = {
//     todos: initialTodos,
//   };

//   deleteTodo = todoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== todoId),
//     }));
//   };

//   render() {
//     const { todos } = this.state;

//     const totalTodoCount = todos.length;
//     const completedTodoCount = todos.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0,
//     );

//     return (
//       <>
//         <h1>Состояние компонента</h1>

//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}

//         <div>
//           <p>Общее кол-во: {totalTodoCount}</p>
//           <p>Кол-во выполненных: {completedTodoCount}</p>
//         </div>

//         <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
//       </>
//     );
//   }
// }

// export default App;





// ================================================





// // рендеремо <Counter/> -> App
// const App = () => (
//   <>
//     <h1>Стан компонента</h1>
//     {/* <Counter initialValue={10} /> */}
//     {/* <Dropdown /> */}
//     {/* <ColorPicker options={colorPickerOptions} /> */}
//     <TodoList/>
//   </>
// );
// export default App;


// ===========================================================

// для зберігання усіх компонентів і мати загальний
// доступ с стейтам ми робимо з App клас

// class App extends Component {
//   // просто назва todos з  масивом
//   state = {
//     todos: [
//       { "id": "id-1", "text": "Выучить основы React", "completed": true },
//       { "id": "id-2", "text": "Разобраться с React Router", "completed": false },
//       { "id": "id-3", "text": "Пережить Redux", "completed": false },
//     ],
//   };
//   render() {
//     const { todos } = this.state;
//     return (
//       <>
//         <h1>Стан компонента</h1>
//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}
//         {/* передаємо тудус деструктурований */}
//         <TodoList todos={todos}/>
//       </>
//     );
//   }
// }

// export default App;



// ==================================================
// імпортуємо todos як  json

// class App extends Component {
//   // просто назва todos з  масивом
//   state = {
//     todos: initialTodos,
//   };
//   render() {
//     const { todos } = this.state;
//     return (
//       <>
//         <h1>Стан компонента</h1>
//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}
//         {/* передаємо тудус деструктурований */}
//         <TodoList todos={todos}/>
//       </>
//     );
//   }
// }

// export default App;
// ================================================
// пишемо метод видалення для кпопки і
// передаємо його в  ===TodoList===

// class App extends Component {
//   // просто назва todos з  масивом
//   state = {
//     todos: initialTodos,
//   };
//   // видаляємо по айдішнику
//   deleteTodo = todoId => {
//     // від попереднього prevState змінюємо стан так як в туду е вже якийсь масив
//     // і ми хочемо видалити обєкт з айдішником
//     this.setState(prevState => ({
//       // і повертаємо todos отфільтрований без того що видаляємо це і є фільтрація
//       todos: prevState.todos.filter(todo => todo.id !== todoId),
//     }));
//   };
//   render() {
//     const { todos } = this.state;
//     return (
//       <>
//         <h1>Стан компонента</h1>
//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}
//         {/* передаємо тудус деструктурований і силку 
//         на видалення*/}
//         <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
//       </>
//     );
//   }
// }

// export default App;

// ================================================
// робимо елемент який рахує виконання завдань


// class App extends Component {
//   // просто назва todos з  масивом
//   state = {
//     todos: initialTodos,
//   };
//   // видаляємо по айдішнику
//   deleteTodo = todoId => {
//     // від попереднього prevState змінюємо стан так як в туду е вже якийсь масив
//     // і ми хочемо видалити обєкт з айдішником
//     this.setState(prevState => ({
//       // і повертаємо todos отфільтрований без того що видаляємо це і є фільтрація
//       todos: prevState.todos.filter(todo => todo.id !== todoId),
//     }));
//   };
//   render() {
//     const { todos } = this.state;
//     // загальна кількість todos
//     const totalTodoCount = todos.length;
//     const completedTodoCount = todos.reduce(
//       (acc, todo) => (todo.completed ? acc + 1 : acc),
//       0,
//     );
//     return (
//       <>
//         <h1>Стан компонента</h1>
//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}

//         <div>
//           <p>Общее кол-во: {totalTodoCount}</p>
//           <p>Кол-во выполненных: {completedTodoCount}</p>
//         </div>
//         {/* передаємо тудус деструктурований і силку 
//         на видалення*/}
//         <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
//       </>
//     );
//   }
// }

// export default App;

// ==============================================================================


//   ===========ФОРМИ===========

//        ======ІНПУТ=========


// class App extends Component {
//   // просто назва todos з  масивом
//   state = {
//     todos: initialTodos,
//     //  значення інпута
//     inputValue: "123",
//   };
//   // видаляємо по айдішнику
//   // deleteTodo = todoId => {
//   //   // // від попереднього prevState змінюємо стан так як в туду е вже якийсь масив
//   //   // // і ми хочемо видалити обєкт з айдішником
//   //   // this.setState(prevState => ({
//   //   //   // і повертаємо todos отфільтрований без того що видаляємо це і є фільтрація
//   //   //   todos: prevState.todos.filter(todo => todo.id !== todoId),
//   //   // }));
//   // };

//   // метод який оновлює стан інпута

//   handleInputChange = event => {
//     // console.log(event.currentTarget.value);
//     // записуемо поверх не зважаючи на попередне
//     // тому передамо обєкт
//     this.setState({inputValue: event.currentTarget.value})

//   }
//   render() {
//     // const { todos } = this.state;
//     // // загальна кількість todos
//     // const totalTodoCount = todos.length;
//     // const completedTodoCount = todos.reduce(
//     //   (acc, todo) => (todo.completed ? acc + 1 : acc),
//     //   0,
//     // );
//     return (
//       <>
//         {/* передамо значення в інпут з state, і привязуємо зміну стану інпута
//         це onChenge . в реакті onBlur i onFocus вони можуть бути окремі і всі разом в onChenge*/}
//         <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
//         {/* <h1>Стан компонента</h1> */}
//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}

//         {/* <div>
//           <p>Общее кол-во: {totalTodoCount}</p>
//           <p>Кол-во выполненных: {completedTodoCount}</p>
//         </div> */}
//         {/* передаємо тудус деструктурований і силку 
//         на видалення*/}
//         {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
//       </>
//     );
//   }
// }

// export default App;





// ==============================================================
// тепер робимо цілу форму


// class App extends Component {
//   // просто назва todos з  масивом
//   state = {
//     todos: initialTodos,
//     //  значення інпута
//     // inputValue: "123",
//     // значення Name
//     name: '',
//     tag: '',
//   };
//   // видаляємо по айдішнику
//   // deleteTodo = todoId => {
//   //   // // від попереднього prevState змінюємо стан так як в туду е вже якийсь масив
//   //   // // і ми хочемо видалити обєкт з айдішником
//   //   // this.setState(prevState => ({
//   //   //   // і повертаємо todos отфільтрований без того що видаляємо це і є фільтрація
//   //   //   todos: prevState.todos.filter(todo => todo.id !== todoId),
//   //   // }));
//   // };

//   // метод який оновлює стан інпута

//   handleNameChange = event => {
//     // console.log(event.currentTarget.value);
//     // записуемо поверх не зважаючи на попередне
//     // тому передамо обєкт
//     // this.setState({inputValue: event.currentTarget.value})
//     this.setState({name: event.currentTarget.value})

//   }
//   // дві однакові функції
//   handleTegChange = event => {
//     this.setState({teg: event.currentTarget.value})

//   }
//   render() {
//     // const { todos } = this.state;
//     // // загальна кількість todos
//     // const totalTodoCount = todos.length;
//     // const completedTodoCount = todos.reduce(
//     //   (acc, todo) => (todo.completed ? acc + 1 : acc),
//     //   0,
//     // );
//     return (
//       <>
//         <form>
//           <label>
//             Імя<input type='text' name='name' value={this.state.name} onChange={this.handleNameChange}/>
//           </label>
//           <label>
//             Призвіще<input type='text' name='tag' value={this.state.teg}/>
//           </label>
//         </form>
//         {/* передамо значення в інпут з state, і привязуємо зміну стану інпута
//         це onChenge . в реакті onBlur i onFocus вони можуть бути окремі і всі разом в onChenge*/}
//         {/* <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} /> */}
//         {/* <h1>Стан компонента</h1> */}
//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}

//         {/* <div>
//           <p>Общее кол-во: {totalTodoCount}</p>
//           <p>Кол-во выполненных: {completedTodoCount}</p>
//         </div> */}
//         {/* передаємо тудус деструктурований і силку 
//         на видалення*/}
//         {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
//       </>
//     );
//   }
// }

// export default App;

// ===================================================
// робимо однаковий обробник


// class App extends Component {
//   // просто назва todos з  масивом
//   state = {
//     todos: initialTodos,
//     //  значення інпута
//     // inputValue: "123",
//     // значення Name
//     name: '',
//     tag: '',
//   };
//   // видаляємо по айдішнику
//   // deleteTodo = todoId => {
//   //   // // від попереднього prevState змінюємо стан так як в туду е вже якийсь масив
//   //   // // і ми хочемо видалити обєкт з айдішником
//   //   // this.setState(prevState => ({
//   //   //   // і повертаємо todos отфільтрований без того що видаляємо це і є фільтрація
//   //   //   todos: prevState.todos.filter(todo => todo.id !== todoId),
//   //   // }));
//   // };

//   // метод який оновлює стан інпута два в одному
//   // один метод для всіх інпутів

//   handleChange = event => {
//     console.log(event.currentTarget);
//     console.log(event.currentTarget.name);
//     console.log(event.currentTarget.value);
//     this.setState({
//       // ключ-  [імя. прізвище. код.нотатки...] далі значення
//       [event.currentTarget.name]: event.currentTarget.value,
//     });
//   }
//   // дві однакові функції
//   // handleTegChange = event => {
//   //   this.setState({teg: event.currentTarget.value})

//   // }
//   render() {
//     // const { todos } = this.state;
//     // // загальна кількість todos
//     // const totalTodoCount = todos.length;
//     // const completedTodoCount = todos.reduce(
//     //   (acc, todo) => (todo.completed ? acc + 1 : acc),
//     //   0,
//     // );
//     return (
//       <>
//         <form>
//           <label>
//             Імя<input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
//           </label>
//           <label>
//             Призвіще<input type='text' name='tag' value={this.state.tag} onChange={this.handleChange}/>
//           </label>
//         </form>
//         {/* передамо значення в інпут з state, і привязуємо зміну стану інпута
//         це onChenge . в реакті onBlur i onFocus вони можуть бути окремі і всі разом в onChenge*/}
//         {/* <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} /> */}
//         {/* <h1>Стан компонента</h1> */}
//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}

//         {/* <div>
//           <p>Общее кол-во: {totalTodoCount}</p>
//           <p>Кол-во выполненных: {completedTodoCount}</p>
//         </div> */}
//         {/* передаємо тудус деструктурований і силку 
//         на видалення*/}
//         {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
//       </>
//     );
//   }
// }

// export default App;






// ==============================================
// деструктурізація
// class App extends Component {
//   // просто назва todos з  масивом
//   state = {
//     todos: initialTodos,
//     //  значення інпута
//     // inputValue: "123",
//     // значення Name
//     name: '',
//     tag: '',
//   };
//   // видаляємо по айдішнику
//   // deleteTodo = todoId => {
//   //   // від попереднього prevState змінюємо стан так як в туду е вже якийсь масив
//   //   // і ми хочемо видалити обєкт з айдішником
//   //   this.setState(prevState => ({
//   //     // і повертаємо todos отфільтрований без того що видаляємо це і є фільтрація
//   //     todos: prevState.todos.filter(todo => todo.id !== todoId),
//   //   }));
//   // };

//   // метод який оновлює стан інпута два в одному
//   // один метод для всіх інпутів

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
  
//     this.setState({
//       // ключ-  [імя. прізвище. код.нотатки...] далі значення
//       [name]: value,
//     });
//   }

//   render() {
//     // const { todos } = this.state;
//     // // загальна кількість todos
//     // const totalTodoCount = todos.length;
//     // const completedTodoCount = todos.reduce(
//     //   (acc, todo) => (todo.completed ? acc + 1 : acc),
//     //   0,
//     // );
//     return (
//       <>
//         <form>
//           <label>
//             Імя<input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
//           </label>
//           <label>
//             Призвіще<input type='text' name='tag' value={this.state.tag} onChange={this.handleChange}/>
//           </label>
//         </form>
//         {/* передамо значення в інпут з state, і привязуємо зміну стану інпута
//         це onChenge . в реакті onBlur i onFocus вони можуть бути окремі і всі разом в onChenge*/}
//         {/* <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} /> */}
//         {/* <h1>Стан компонента</h1> */}
//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}

//         {/* <div>
//           <p>Общее кол-во: {totalTodoCount}</p>
//           <p>Кол-во выполненных: {completedTodoCount}</p>
//         </div> */}
//         {/* передаємо тудус деструктурований і силку 
//         на видалення*/}
//         {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
//       </>
//     );
//   }
// }

// export default App;





// ===================================================
// сабмітим форми




// class App extends Component {
//   // просто назва todos з  масивом
//   state = {
//     todos: initialTodos,
//     //  значення інпута
//     // inputValue: "123",
//     // значення Name
//     name: '',
//     tag: '',
//   };
//   // видаляємо по айдішнику
//   // deleteTodo = todoId => {
//   //   // від попереднього prevState змінюємо стан так як в туду е вже якийсь масив
//   //   // і ми хочемо видалити обєкт з айдішником
//   //   this.setState(prevState => ({
//   //     // і повертаємо todos отфільтрований без того що видаляємо це і є фільтрація
//   //     todos: prevState.todos.filter(todo => todo.id !== todoId),
//   //   }));
//   // };

//   // метод який оновлює стан інпута два в одному
//   // один метод для всіх інпутів

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
  
//     this.setState({
//       // ключ-  [імя. прізвище. код.нотатки...] далі значення
//       [name]: value,
//     });
//   }
//   // метод сабміта форми
//   handleSabmit = event => {
//     event.preventDefault();
//     console.log(this.state);
//   }

//   render() {
//     // const { todos } = this.state;
//     // // загальна кількість todos
//     // const totalTodoCount = todos.length;
//     // const completedTodoCount = todos.reduce(
//     //   (acc, todo) => (todo.completed ? acc + 1 : acc),
//     //   0,
//     // );
//     return (
//       <>
//         {/* сабмітимо прямо на форму */}
//         <form onSubmit={this.handleSabmit}>
//           <label>
//             Імя<input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
//           </label>
//           <label>
//             Призвіще<input type='text' name='tag' value={this.state.tag} onChange={this.handleChange}/>
//           </label>
//           <button type='submit'>Відправити</button>
//         </form>
//         {/* передамо значення в інпут з state, і привязуємо зміну стану інпута
//         це onChenge . в реакті onBlur i onFocus вони можуть бути окремі і всі разом в onChenge*/}
//         {/* <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} /> */}
//         {/* <h1>Стан компонента</h1> */}
//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}

//         {/* <div>
//           <p>Общее кол-во: {totalTodoCount}</p>
//           <p>Кол-во выполненных: {completedTodoCount}</p>
//         </div> */}
//         {/* передаємо тудус деструктурований і силку 
//         на видалення*/}
//         {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
//       </>
//     );
//   }
// }

// export default App;


// =========================================== 
//  робимо форму окремо в Form.js


// class App extends Component {
//   // просто назва todos з  масивом
//   state = {
//     todos: initialTodos,
//     //  значення інпута
//     // inputValue: "123",
//   };
//   // видаляємо по айдішнику
//   // deleteTodo = todoId => {
//   //   // від попереднього prevState змінюємо стан так як в туду е вже якийсь масив
//   //   // і ми хочемо видалити обєкт з айдішником
//   //   this.setState(prevState => ({
//   //     // і повертаємо todos отфільтрований без того що видаляємо це і є фільтрація
//   //     todos: prevState.todos.filter(todo => todo.id !== todoId),
//   //   }));
//   // };

//   render() {
//     // const { todos } = this.state;
//     // // загальна кількість todos
//     // const totalTodoCount = todos.length;
//     // const completedTodoCount = todos.reduce(
//     //   (acc, todo) => (todo.completed ? acc + 1 : acc),
//     //   0,
//     // );
//     return (
//       <>
//         <Form/>
//         {/* передамо значення в інпут з state, і привязуємо зміну стану інпута
//         це onChenge . в реакті onBlur i onFocus вони можуть бути окремі і всі разом в onChenge*/}
//         {/* <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} /> */}
//         {/* <h1>Стан компонента</h1> */}
//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}

//         {/* <div>
//           <p>Общее кол-во: {totalTodoCount}</p>
//           <p>Кол-во выполненных: {completedTodoCount}</p>
//         </div> */}
//         {/* передаємо тудус деструктурований і силку 
//         на видалення*/}
//         {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
//       </>
//     );
//   }
// }

// export default App;


// ==============================================================
// отримання доступу  к стейту з форми в Апп 
// через функцію з пропом


class App extends Component {
  // просто назва todos з  масивом
  state = {
    todos: initialTodos,
    //  значення інпута
    // inputValue: "123",
    // значення фільтра
    filter: '',
  };
  // додаємо тудушку і отримуємо текст
  addTodo = text => {
    console.log(text);
    // робимо тудушку
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    // .додаємо в state при цьому розпиляємо старе
    // і додаємо або с переду або с заду
    // працюємо від попереднього
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };
  // видаляємо по айдішнику
  deleteTodo = todoId => {
    // від попереднього prevState змінюємо стан так як в туду е вже якийсь масив
    // і ми хочемо видалити обєкт з айдішником
    this.setState(prevState => ({
      // і повертаємо todos отфільтрований без того що видаляємо це і є фільтрація
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  // сюди приходять тудушкі ID  який хочемо найти
  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   // перебіраємо і робимо новий масив
    //   todos: prevState.todos.map(todo => {
    //     //  якщо айді тудушкі і айді який прийшов то треба поставити 
    //     // новий обєкт
    //     if (todo.id === todoId) {
    //       return {
    //         // .розпиляємо стару
    //         ...todo,
    //         // а поверх нову з новими свойствами
    //         completed: !todo.completed,
    //       };
    //     }
    //         // в другому випадку повертаємо стару тудушку
    //     return todo;
    //   }),
    // }));
      //   переробляємо на тернарник
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  // значення фільтра
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    // приводимо текст до toLowerCase
    // якщо в нас 50 тудушок то ми зекономили 50 toLowerCase
    const normalizedFilter = filter.toLowerCase();
    // фільтруємо і робимо нову тудушку
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };


 //  в data прокидуемо  name: '',tag: '', з форми
  // formSabmitHandler = data => {
  //   console.log(data);
  // }

  render() {
    const { todos, filter } = this.state;
    // загальна кількість todos
    const totalTodoCount = todos.length;
    // виносим метод
    // const completedTodoCount = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0,
    // );
    const completedTodoCount = this.calculateCompletedTodos();
    // рендеримо відфільтровану тудушку
    const visibleTodos = this.getVisibleTodos();
    return (
      <>
         {/* цей onSubmit не onSubmit в файлі форм  рендер . це проп сабміт 
         його можна подивитись в девтулзах в сомпонентах*/}
        {/* <Form onSubmit={this.formSabmitHandler} /> */}
        {/* передамо значення в інпут з state, і привязуємо зміну стану інпута
        це onChenge . в реакті onBlur i onFocus вони можуть бути окремі і всі разом в onChenge*/}
        {/* <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} /> */}
        {/* <h1>Стан компонента</h1> */}
        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <p>Загальна кількість: {totalTodoCount}</p>
          <p>Кількість  виконаних: {completedTodoCount}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        {/* передаємо тудус деструктурований і силку 
        на видалення*/}
        {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
        {/* переробка з додаванням onToggleCompleted*/}
        {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted} /> */}
        {/* рендеримо видимі тудушки які відфільтровані а не todos */}
        <TodoList todos={visibleTodos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted} />
      </>
    );
  }
}

export default App;



