const init_state = {
    compteur: 200
}

const CounterReducer = (state = init_state, action) => {

    let newState = {...state}

    switch(action.type) {
        case 'INCREMENT': newState.compteur += action.payload; break;
        case 'DECREMENT': newState.compteur -= action.payload; break;
        case 'INIT': newState.compteur = action.payload; break;
    }

    return newState;

}

export default CounterReducer;