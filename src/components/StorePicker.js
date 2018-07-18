import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    //constructor(){
    //    super();
    //    this.goToStore = this.goToStore.bind(this);
    //}

    goToStore(event) {
        event.preventDefault();
        console.log('You change the URL');
        //Primero obtenemos el texto del input
        const storeId = this.storeInput.value;
        console.log(`Going to ${storeId}`);
        //Segundo cambiamos de '/' a '/store/:storeId'
        this.context.router.transitionTo(`/store/${storeId}`)

    }

    render() {
        return (
            <form className='store-selector' onSubmit={(e) => this.goToStore(e)}>{/*Arrow function mismo funcionamiento que bind en constructor*/}
                <h2>Please enter a Store</h2>
                <input type="text" required placeholder="Store Name"
                 defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/> {/*Guardamos el input como atributo(storeInput) del componente*/}
                <button type='submit'>Visit Store</button>
            </form>
        )
    }
}
//Necesario para hacer route a storeId 
StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;