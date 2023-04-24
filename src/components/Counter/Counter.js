// import React, { Component } from 'react';
// import Controls from './Controls';
// import Value from './Value';
// import './Counter.css';

// class Counter extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   static propTypes = {
//     //
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     const { value } = this.state;

//     return (
//       <div className="Counter">
//         <Value value={value} />

//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }

// export default Counter;










// // ==============================================



// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// // З функції робимо клас за допомогою реакт бібліотекиі цого  Component
// const Counter = () => {
//   <div className='Counter'>
//     <span className='Counter__value'>0</span>

//     <div className='Counter__controls'>
//         <button type="button">Збільшити на 1</button>
//         <button type="button">Зменшити на 1</button>
//       </div>
//   </div>

// }

// export default Counter;




// // ===============================================
// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// // З функції робимо клас за допомогою реакт бібліотекиі цого  Component

// class Counter extends React.Component {
//   render() {
//     // тут рендеримо розмітку
//     return (
//       <div className='Counter'>
//         <span className='Counter__value'>0</span>

//         <div className='Counter__controls'>
//           <button type="button">Збільшити на 1</button>
//           <button type="button">Зменшити на 1</button>
//         </div>
//       </div>
//     );
//   }
// }

// //  це вже перенесли в render
// // const Counter = () => {
// //   <div className='Counter'>
// //     <span className='Counter__value'>0</span>

// //     <div className='Counter__controls'>
// //         <button type="button">Збільшити на 1 {step}</button>
// //         <button type="button">Зменшити на 1 {step}</button>
// //       </div>
// //   </div>

// // }

// export default Counter;




// // ==========================================

// // вішаємо обробник подій


// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// // З функції робимо клас за допомогою реакт бібліотекиі цого  Component

// class Counter extends React.Component {
//   render() {
//     // тут рендеримо розмітку
//     return (
//       <div className='Counter'>
//         <span className='Counter__value'>0</span>

//         <div className='Counter__controls'>
//           {/* повісили обробник подій onClick*/}
//           <button type="button" onClick={() => {
//             consol.log('клікнули в збільшить')
//           }}>Збільшити на 1</button>
//           <button type="button"  onClick={() => {
//             consol.log('клікнули в зменшити')
//           }}>Зменшити на 1</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;
// // =========================================================




// // виносимо функцію кліка в метод класу


// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// // З функції робимо клас за допомогою реакт бібліотекиі цого  Component

// class Counter extends React.Component {
//   handleIncrement() {
//     consol.log('клікнули в збільшить');
//     // якщо стукатись до htis (класу - екземпляру) то буде undefined
//     // тому що при передачі методу обєкта як колбека в оброник події
//     // обєкт не привязується контекст за замовчанням
//     //  зараз це вирішується за рахунок публічного свойства
//     consol.log(htis);
//   }

//   render() {
//     // тут рендеримо розмітку
//     return (
//       <div className='Counter'>
//         <span className='Counter__value'>0</span>

//         <div className='Counter__controls'>
//           {/* повісили обробник подій onClick*/}
//           <button type="button" onClick={this.handleIncrement}>Збільшити на 1</button>
//           <button type="button"  onClick={() => {
//             consol.log('клікнули в зменшити')
//           }}>Зменшити на 1</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;





// // ==============================================================


// // Свойство на загал(публічне)



// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// // З функції робимо клас за допомогою реакт бібліотекиі цого  Component

// class Counter extends React.Component {
//   // це і э публічна функція
//   handleIncrement = () => {
//     consol.log('клікнули в збільшить');
//     consol.log(htis);
//   }

//   handleDecrement = () => {
//     consol.log('клікнули в зменшити')
//   }

//   render() {
//     // тут рендеримо розмітку
//     return (
//       <div className='Counter'>
//         <span className='Counter__value'>0</span>

//         <div className='Counter__controls'>
//           {/* повісили обробник подій onClick*/}
//           <button type="button" onClick={this.handleIncrement}>Збільшити на 1</button>
//           <button type="button"  onClick={this.handleDecrement}>Зменшити на 1</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;





// =============================================================

// отримуємо доступ до -е- обєкту події





// import React from "react";
// // import ReactDOM from "react-dom";

// // З функції робимо клас за допомогою реакт бібліотекиі цого  Component

// class Counter extends React.Component {
//   // це і э публічна функція
//   //  evt передається автоматично
//   handleIncrement = (e) => {
//     console.log('клікнули в збільшить');
//     console.log(e.target);
//   }

//   handleDecrement = (e) => {
//     console.log('клікнули в зменшити')
//     console.log(e);
//   }

//   render() {
//     // тут рендеримо розмітку
//     return (
//       <div className='Counter'>
//         <span className='Counter__value'>0</span>

//         <div className='Counter__controls'>
//           {/* повісили обробник подій onClick*/}
//           <button type="button" onClick={this.handleIncrement}>Збільшити на 1</button>
//           <button type="button"  onClick={this.handleDecrement}>Зменшити на 1</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;

// ==============================================





// // робимо асинхронний код виклику setTimeout




// import React from "react";
// // import ReactDOM from "react-dom";

// // З функції робимо клас за допомогою реакт бібліотекиі цого  Component

// class Counter extends React.Component {
//   // це і э публічна функція
//   //  evt передається автоматично
//   handleIncrement = (e) => {
//     console.log('клікнули в збільшить');
//     console.log(e.target);



//     //  так робити не можна , буде помилка
//     // бо буде null( силка evt очиститься)
//     //  setTimeout(() => {
//     //   console.log(e.target);
//     // }, 1000);
//     // треба зробити локальну змінну
//     // і передати її в затримку
//     const target = e.target
//     setTimeout(() => {
//       console.log(target);
//     }, 1000);
//   }

//   handleDecrement = (e) => {
//     console.log('клікнули в зменшити')
//     console.log(e);
//   }

//   render() {
//     // тут рендеримо розмітку
//     return (
//       <div className='Counter'>
//         <span className='Counter__value'>0</span>

//         <div className='Counter__controls'>
//           {/* повісили обробник подій onClick*/}
//           <button type="button" onClick={this.handleIncrement}>Збільшити на 1</button>
//           <button type="button"  onClick={this.handleDecrement}>Зменшити на 1</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;

// ==========================================



// робимо компонент дінамічним
// оголошення стану через конструктор




// import React from "react";
// // import ReactDOM from "react-dom";

// // З функції робимо клас за допомогою реакт бібліотекиі цого  Component

// class Counter extends React.Component {

//   // оголошення стану через конструктор
//   constructor() {
//     // super() це виклик сонструктора батька React.Component
//     // до того як викликати стан this.state = {};
//     super();
//     this.state = {
//       // тут зберігаємо дані стану обєкту
//       // і ми можемо використовувати дані
//       // в любому місті розмітки
//       velue: 0,
//     };
//   }
  

//   // це і э публічна функція
//   handleIncrement = () => {
    
//   };

//   handleDecrement = () => {

//   };

//   render() {
//     // тут рендеримо розмітку
//     return (
//       <div className='Counter'>
//         {/* підставляємо поточний стан */}
//         <span className='Counter__value'>{this.state.velue}</span>

//         <div className='Counter__controls'>
//           {/* повісили обробник подій onClick*/}
//           <button type="button" onClick={this.handleIncrement}>Збільшити на 1</button>
//           <button type="button"  onClick={this.handleDecrement}>Зменшити на 1</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;





// ======================================================
// оголошення стану вез конструктора


// import React from "react";
// // import ReactDOM from "react-dom";

// // З функції робимо клас за допомогою реакт бібліотекиі цого  Component

// class Counter extends React.Component {
//   //  початкове значення стану
//   state = {
//     velue: 0,
//   };
  
//   // це і э публічна функція
//   handleIncrement = () => {
    
//   };

//   handleDecrement = () => {

//   };

//   render() {
//     // тут рендеримо розмітку
//     return (
//       <div className='Counter'>
//         {/* підставляємо поточний стан */}
//         <span className='Counter__value'>{this.state.velue}</span>

//         <div className='Counter__controls'>
//           {/* повісили обробник подій onClick*/}
//           <button type="button" onClick={this.handleIncrement}>Збільшити на 1</button>
//           <button type="button"  onClick={this.handleDecrement}>Зменшити на 1</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;


// =================================================================
// оновлюємо стан

// import React from "react";
// // import ReactDOM from "react-dom";

// // З функції робимо клас за допомогою реакт бібліотекиі цого  Component

// class Counter extends React.Component {
//   //  початкове значення стану
//   state = {
//     velue: 0,
//   };
  
//   // це і э публічна функція
//   handleIncrement = () => {
//     // так оновлювати в ручну не можна this.state.velue = 6;
//     // записуемо через метод setState()
//     this.setState({
//       value: 10,
//     })
    
//   };

//   handleDecrement = () => {

//   };

//   render() {
//     // тут рендеримо розмітку
//     return (
//       <div className='Counter'>
//         {/* підставляємо поточний стан */}
//         <span className='Counter__value'>{this.state.velue}</span>

//         <div className='Counter__controls'>
//           {/* повісили обробник подій onClick*/}
//           <button type="button" onClick={this.handleIncrement}>Збільшити на 1</button>
//           <button type="button"  onClick={this.handleDecrement}>Зменшити на 1</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;



// =============================================
// оновлення стану від попередноьго значення
// .за допомогою функції


// import React from "react";
// // import ReactDOM from "react-dom";

// // З функції робимо клас за допомогою реакт бібліотекиі цого  Component

// class Counter extends React.Component {
//   //  початкове значення стану
//   state = {
//     velue: 0,
//   };
  
//   // це і э публічна функція
//   handleIncrement = () => {
//     // записуемо через метод setState() і функцію від
//     // поточного стану по силкі
//     this.setState((prevState) => {
//       return {
//         // значення state поточне, актуальне зі збільшенням
//         value: prevState.value + 1,
//       }
//     })
    
//   };
//    // або ось так 
//   handleDecrement = () => {
//     this.setState(prevState => ({
//       // значення state поточне, актуальне зі зменшенням
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     // тут рендеримо розмітку
//     return (
//       <div className='Counter'>
//         {/* підставляємо поточний стан */}
//         <span className='Counter__value'>{this.state.velue}</span>

//         <div className='Counter__controls'>
//           {/* повісили обробник подій onClick*/}
//           <button type="button" onClick={this.handleIncrement}>Збільшити на 1</button>
//           <button type="button"  onClick={this.handleDecrement}>Зменшити на 1</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;

// =============================================
// тепер початкове значення  state прийде від App

// import React from "react";

// // З функції робимо клас за допомогою реакт бібліотекиі цого  Component

// class Counter extends React.Component {
//   //  початкове значення стану від App
//   state = {
//     velue: this.props.initialValue,
//   };
  
//   // це і э публічна функція
//   handleIncrement = () => {
//     // записуемо через метод setState() і функцію від
//     // поточного стану по силкі
//     this.setState((prevState) => {
//       return {
//         // значення state поточне, актуальне зі збільшенням
//         value: prevState.value + 1,
//       }
//     })
    
//   };
//    // або ось так 
//   handleDecrement = () => {
//     this.setState(prevState => ({
//       // значення state поточне, актуальне зі зменшенням
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     // тут рендеримо розмітку
//     return (
//       <div className='Counter'>
//         {/* підставляємо поточний стан */}
//         <span className='Counter__value'>{this.state.velue}</span>

//         <div className='Counter__controls'>
//           {/* повісили обробник подій onClick*/}
//           <button type="button" onClick={this.handleIncrement}>Збільшити на 1</button>
//           <button type="button"  onClick={this.handleDecrement}>Зменшити на 1</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;

// =====================================================




// виведем дефолтне значення через статіку




// ========================================================= 
// розбиваємо на менші компоненти

import React from "react";
import './Counter.css';
import Value from './Value';
import Controls from './Controls';
// З функції робимо клас за допомогою реакт бібліотекиі цого  Component

class Counter extends React.Component {
  // дефолтне значення
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {
      // --------
  };
  //  початкове значення стану від App
  state = {
    value: this.props.initialValue,
  };
  
  // це і э публічна функція
  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      }
    })
    
  };
   // або ось так 
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    // тут рендеримо розмітку і розбиваємо на менші компоненти
    return (
      <div className='Counter'>
        {/* підставляємо поточний стан */}
        {/* <span className='Counter__value'>{this.state.value}</span> */}
        <Value value={this.state.value}/>
        {/* тут передамо в Controls функції */}
        <Controls onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement} />
      </div>
    );
  }
}

export default Counter;