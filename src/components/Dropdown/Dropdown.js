import React, { Component } from 'react';
import './Dropdown.css';

// class Dropdown extends Component {
//   state = {
//     visible: false,
//   };

//   toggle = () => {
//     this.setState(prevState => ({
//       visible: !prevState.visible,
//     }));
//   };

//   render() {
//     const { visible } = this.state;

//     return (
//       <div className="Dropdown">
//         <button type="button" className="Dropdown__toggle"
//           onClick={this.toggle}
//         >
//           {visible ? 'Скрыть' : 'Показать'}
//         </button>

//         {visible && <div className="Dropdown__menu">Выпадающее меню</div>}
//       </div>
//     );
//   }
// }

// export default Dropdown;

// ===================================



class Dropdown extends Component {
  // початковий стан випадаючого меню
  state = {
    visible: false,
  };
    // функція яка переключаєна кпопці включення 
  // випадаючого меню від поточного стану prevState
  toggle = () => {
    this.setState(prevState => ({
      // тут від зворотнього буль
      visible: !prevState.visible,
    }));
  };

  render() {
    // робимо деструктурізацію щоб не писати
    // this.state.visible
    const { visible } = this.state;

    return (
      <div className="Dropdown">
        {/* на клік ми передамо функцію */}
        <button type="button" className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {visible ? 'Сховати' : 'Показати'}
        </button>
          {/* якщо visible true то рендимо розмітку */}
        {visible && <div className="Dropdown__menu">Випадаюче меню</div>}
      </div>
    );
  }
}

export default Dropdown;