// import { nominalTypeHack } from 'prop-types';
import React, { Component } from 'react';
import './ColorPicker.css';

// class ColorPicker extends Component {
//   state = {
//     activeOptionIdx: 0,
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionIdx: index });
//   };

//   makeOptionClassName = index => {
//     const optionClasses = ['ColorPicker__option'];

//     if (index === this.state.activeOptionIdx) {
//       optionClasses.push('ColorPicker__option--active');
//     }

//     return optionClasses.join(' ');
//   };

//   render() {
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionIdx];

//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <p>Выбран цвет: {label}</p>
//         <div>
//           {options.map(({ label, color }, index) => (
//             <button
//               key={label}
//               className={this.makeOptionClassName(index)}
//               style={{ backgroundColor: color }}
//               onClick={() => this.setActiveIdx(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;



// =================================================================
//   початок рендеримо розмітку

// class ColorPicker extends Component {
//   //  робимо початковий стан
//   // так як це масив то нехай початковий стан буде
//   // по індексу перший обєкт {}=[0] а перший це -0-
//   state = {
//     activeOptionIdx: 0,
//   };
 
//   render() {

//     //   рендеримо розмітку
//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <div>
//           {this.props.options.map(({ label, color }) => (
//             <button
//               key={label}
//               className="ColorPicker__option"
//               style={{ backgroundColor: color }}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;

// =============================================

// додаю рендер індексу як другий аргуменр в div


// class ColorPicker extends Component {
//   //  робимо початковий стан
//   // так як це масив то нехай початковий стан буде
//   // по індексу перший обєкт {}=[0] а перший це -0-
//   state = {
//     activeOptionIdx: 0,
//   };
 
//   render() {

//     //   рендеримо розмітку
//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <div>
//           {this.props.options.map(({ label, color }, index) => (
//             <button
//               key={label}
//               className="ColorPicker__option"
//               // додатково в стилях перевіряю по індексу на активність кнопки
//               // шляхом додавання стилю.
//               style={{
//                 backgroundColor: color,
//                 border: index === this.state.activeOptionIdx ? '2px solid black' : 'none',
//               }}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;







// =========================================================

// Покращимо шляхом додавання класу
// в розмітку






// class ColorPicker extends Component {
//   //  робимо початковий стан
//   // так як це масив то нехай початковий стан буде
//   // по індексу перший обєкт {}=[0] а перший це -0-
//   state = {
//     activeOptionIdx: 0,
//   };
 
//   render() {

//     //   рендеримо розмітку
//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <div>
//           {this.props.options.map(({ label, color }, index) => {
//                   //  тут роблю базовий клас "ColorPicker__option"
//             const optionClasses = ["ColorPicker__option"];
//             // тут роблю порівняння c додаванням класу
//             if (index === this.state.activeOptionIdx) {
//               optionClasses.push('ColorPicker__option--active');
//             }
//             return (
//               <button
//                 key={label}
//                 // тут додаэться тіло класу
//                 className={optionClasses.join(' ')}
//                 style={{ backgroundColor: color }}
//               ></button>);
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;





// ================================================================

// винесемо функцію окремо




// class ColorPicker extends Component {
//   //  робимо початковий стан
//   // так як це масив то нехай початковий стан буде
//   // по індексу перший обєкт {}=[0] а перший це -0-
//   state = {
//     activeOptionIdx: 0,
//   };
//   makeOptionClassName = index => {
//     const optionClasses = ['ColorPicker__option'];

//     if (index === this.state.activeOptionIdx) {
//       optionClasses.push('ColorPicker__option--active');
//     }

//     return optionClasses.join(' ');
//   };
 
//   render() {

//     //   рендеримо розмітку
//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <div>
//           {this.props.options.map(({ label, color }, index) => {
//             // у змінну присвоїмо виносну функцію з індексом
//             const optionClassName = this.makeOptionClassName(index);
//             return (
//               <button
//                 key={label}
//                 // тут додаэться тіло класу з виносної функції
//                 className={optionClassName}
//                 style={{ backgroundColor: color }}
//               ></button>);
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;

// ======================================================


// скорочуємо передачу функції


// class ColorPicker extends Component {
//   //  робимо початковий стан
//   // так як це масив то нехай початковий стан буде
//   // по індексу перший обєкт {}=[0] а перший це -0-
//   state = {
//     activeOptionIdx: 0,
//   };
//   makeOptionClassName = index => {
//     const optionClasses = ['ColorPicker__option'];

//     if (index === this.state.activeOptionIdx) {
//       optionClasses.push('ColorPicker__option--active');
//     }

//     return optionClasses.join(' ');
//   };
 
//   render() {

//     //   рендеримо розмітку
//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <div>
//           {this.props.options.map(({ label, color }, index) => (
//               <button
//                 key={label}
//                 // тут додаэться тіло класу з виносної функції
//                 className={this.makeOptionClassName(index)}
//                 style={{ backgroundColor: color }}
//               ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;



// ==============================================
// робимо метод при кліку на кожну кнопку вона стає активною


// class ColorPicker extends Component {
//   //  робимо початковий стан
//   // так як це масив то нехай початковий стан буде
//   // по індексу перший обєкт {}=[0] а перший це -0-
//   state = {
//     activeOptionIdx: 0,
//   };
//   setActiveIdx = index => {
//     // тут від попереднього не потрібно
//     // записуємо поверх
//     // попереднього при кліку на кнопку
//     this.setState({ activeOptionIdx: index });
//   };
//   makeOptionClassName = index => {
//     const optionClasses = ['ColorPicker__option'];

//     if (index === this.state.activeOptionIdx) {
//       optionClasses.push('ColorPicker__option--active');
//     }

//     return optionClasses.join(' ');
//   };
 
//   render() {

//     //   рендеримо розмітку
//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <div>
//           {this.props.options.map(({ label, color }, index) => (
//               <button
//                 key={label}
//                 // тут додаэться тіло класу з виносної функції
//                 className={this.makeOptionClassName(index)}
//                 style={{ backgroundColor: color }}
//                 //  тут передамо силку на виклик функції (не результат this.setActiveIdx(index) бо буде undefined)
//                 onClick= {() => this.setActiveIdx(index)}
//               ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;

// ======================================================
//  тепер напишемо який колір вибран

// class ColorPicker extends Component {
//   //  робимо початковий стан
//   // так як це масив то нехай початковий стан буде
//   // по індексу перший обєкт {}=[0] а перший це -0-
//   state = {
//     activeOptionIdx: 0,
//   };
//   setActiveIdx = index => {
//     // тут від попереднього не потрібно
//     // записуємо поверх
//     // попереднього при кліку на кнопку
//     this.setState({ activeOptionIdx: index });
//   };
//   makeOptionClassName = index => {
//     const optionClasses = ['ColorPicker__option'];

//     if (index === this.state.activeOptionIdx) {
//       optionClasses.push('ColorPicker__option--active');
//     }

//     return optionClasses.join(' ');
//   };
 
//   render() {
//     // беремо колір з this.props.options з масиву в обєкті[this.state.activeOptionIdx]
//     const { label } = this.props.options[this.state.activeOptionIdx];
//     //   рендеримо розмітку
//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         {/* допис кольору */}
//         <p>Выбран цвет: {label}</p>
//         <div>
//           {this.props.options.map(({ label, color }, index) => (
//               <button
//                 key={label}
//                 // тут додаэться тіло класу з виносної функції
//                 className={this.makeOptionClassName(index)}
//                 style={{ backgroundColor: color }}
//                 //  тут передамо силку на виклик функції (не результат this.setActiveIdx(index) бо буде undefined)
//                 onClick= {() => this.setActiveIdx(index)}
//               ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;

// ===========================================================
// робимо деструкторизацію



// class ColorPicker extends Component {
//   //  робимо початковий стан
//   // так як це масив то нехай початковий стан буде
//   // по індексу перший обєкт {}=[0] а перший це -0-
//   state = {
//     activeOptionIdx: 0,
//   };
//   setActiveIdx = index => {
//     // тут від попереднього не потрібно
//     // записуємо поверх
//     // попереднього при кліку на кнопку
//     this.setState({ activeOptionIdx: index });
//   };
//   makeOptionClassName = index => {
//     const optionClasses = ['ColorPicker__option'];
//       // якщо поточний індекс збігається з індексом в state
//     if (index === this.state.activeOptionIdx) {
//       optionClasses.push('ColorPicker__option--active');
//     }

//     return optionClasses.join(' ');
//   };
 
//   render() {
//     // беремо колір з this.props.options з масиву в обєкті[this.state.activeOptionIdx]
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionIdx];
//     //   рендеримо розмітку
//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         {/* допис кольору */}
//         <p>Выбран цвет: {label}</p>
//         <div>
//           {options.map(({ label, color }, index) => (
//               <button
//                 key={label}
//                 // тут додаэться тіло класу з виносної функції
//                 className={this.makeOptionClassName(index)}
//                 style={{ backgroundColor: color }}
//                 //  тут передамо силку на виклик функції (не результат this.setActiveIdx(index) бо буде undefined)
//                 onClick= {() => this.setActiveIdx(index)}
//               ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;




// ========================================================
// імпортуємо classname

import classNames from 'classnames';




class ColorPicker extends Component {
  //  робимо початковий стан
  // так як це масив то нехай початковий стан буде 
  // по індексу перший обєкт {}=[0] а перший це -0-
  state = {
    activeOptionIdx: 0,
  };
  setActiveIdx = index => {
    // тут від попереднього не потрібно
    // записуємо поверх
    // попереднього при кліку на кнопку
    this.setState({ activeOptionIdx: index });
  };
  makeOptionClassName = index => {
    // заміна на те що нижче на classNames
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionIdx,
    });

    // const optionClasses = ['ColorPicker__option'];
    //   // якщо поточний індекс збігається з індексом в state
    // if (index === this.state.activeOptionIdx) {
    //   optionClasses.push('ColorPicker__option--active');
    // }

    // return optionClasses.join(' ');
  };
 
  render() {
    // беремо колір з this.props.options з масиву в обєкті[this.state.activeOptionIdx]
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    //   рендеримо розмітку
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        {/* допис кольору */}
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
              <button
                key={label}
                // тут додаэться тіло класу з виносної функції
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                //  тут передамо силку на виклик функції (не результат this.setActiveIdx(index) бо буде undefined)
                onClick= {() => this.setActiveIdx(index)}
              ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;






