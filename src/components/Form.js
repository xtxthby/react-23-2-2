import React, { Component } from 'react';
// пакет для генирації ID
import shortid from 'shortid';


// форма це клас

class Form extends Component {
    state = {
        name: '',
        tag: '',
        // для радіокнопок
        experience: 'junior',
        // початкове значення для чекбокса
        licence: false,
    };
    //  для кожного інпута генеруємо ID по назві початкового стану
    nameInputId = shortid.generate();
    tagInputId = shortid.generate();
    // метод який оновлює стан інпута два в одному
    // один метод для всіх інпутів
    handleChange = event => {
        const { name, value } = event.currentTarget;
  
        this.setState({
            // ключ-  [імя. прізвище. код.нотатки...] далі значення
            [name]: value,
        });
    };

      // метод сабміта форми
    handleSabmit = event => {
        event.preventDefault();
        // з Апп в onSubmit передамо state
        this.props.onSubmit(this.state);
        // тепер визвемо сброс форми обнулєніє
        this.reset();
    };
    // окремий обробник для чекбокса
    handleLicenceChange = e => {
        console.log(e.currentTarget.checked);
        // по умові відображає чи ми чекнули
        this.setState({ licence: e.currentTarget.checked });
    };
    //   після сабміта обнуляємо форму передамо початковий стан стейта
    reset = () => {
        this.setState({ name: '', tag: '' });
    };
    render() {
        // сабмітимо прямо на форму 
        return (<form onSubmit={this.handleSabmit}>
            {/* привязуэмо label htmlFor до input по ID*/}
            <label htmlFor={this.nameInputId}>
            Імя<input type='text' name='name' value={this.state.name} onChange={this.handleChange} id={this.nameInputId}/>
            </label>
            <label htmlFor={this.tagInputId}>
            Призвіще<input type='text' name='tag' value={this.state.tag} onChange={this.handleChange} id={this.tagInputId}/>
            </label>
            {/* радіокнопки */}
            <p>Ваш уровень:</p>
            <label>
                {/* для всіх однаковий name="experience" початкового значення*/}
                <input type="radio" name="experience" value="junior"
                    // також одка функція onChange={this.handleChange}
                onChange={this.handleChange}
                    // кнопка яка буде на старті чекнута показана
                    // іде порівняння зі стартовим значенням
                checked={this.state.experience === 'junior'}
                />
                Junior
            </label>

            <label>
                <input type="radio" name="experience" value="middle"
                onChange={this.handleChange}
                checked={this.state.experience === 'middle'}
                />
                Middle
            </label>
            <label>
                <input type="radio" name="experience" value="senior"
                onChange={this.handleChange}
                checked={this.state.experience === 'senior'}
                />
                Senior
            </label>
            <br />
            {/* чекбокс */}
            <label>
                <input
                    type="checkbox"
                    name="licence"
                    // чекнутий або ні по булю
                    checked={this.state.licence}
                    onChange={this.handleLicenceChange}
                />
                Згоден з умовою
            </label>
            {/*за допомогою =disabled= поки я не чекнув неможна зробити submit */}
            <button type='submit' disabled={!this.state.licence}>Відправити</button>
        </form>)
    }
}
export default Form;