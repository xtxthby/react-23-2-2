import React, { Component } from 'react';
import './TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    //   під час сабміту викликаємо текст
    this.props.onSubmit(this.state.message);
    //  тут робимо ресет -- очищаємо
    this.setState({ message: '' });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Зберегти
        </button>
      </form>
    );
  }
}

export default TodoEditor;