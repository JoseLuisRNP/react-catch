import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';


class App extends React.Component {
    constructor() {
        super();
        //Hay que hacer bind a todos los métodos creados excepto render
        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        //State inicial
        this.state = {
            fishes: {},
            order: {}
        };
    }

    addFish(fish) {
        //Copia del state actual
        const fishes = {...this.state.fishes}
        //Añadir nuestro pescado
        const timeStamp = Date.now();
        fishes[`fish-${timeStamp}`] = fish;
        //Set state
        this.setState({ fishes: fishes });
    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        })
    }
    
    addToOrder(key) {
        //Hacer copia del state
        const order = {...this.state.order};
        //Actualizar o añadir el nuevo numero de pescado comprado
        order[key] = order[key] + 1 || 1;//Añade uno la cantidad actual o añade uno si no hay cantidad
        //Actualizar estado
        this.setState({order: order})
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline='Fresh SeaFood Market'/>
                    <ul className='list-of-fishes'>
                        {
                        Object
                            .keys(this.state.fishes)//Convierte a array el objeto 
                            .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)//Recorre el array e imprime componente Fish con props
                        }
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order= {this.state.order}/>
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>                
            </div>
        )
    }
}

export default App;