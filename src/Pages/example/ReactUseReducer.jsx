import { useReducer, createContext, useContext } from "react";

// 

const UserContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'INCREMENT2':
            return { count: state.count + 2 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const initialState = {
    count: 0
}



const ChildComponent = () => {   

    const {state, dispatch} = useContext(UserContext);

    return (
        <>
            <p>count = {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT2' })}>Increment2</button>
        </>
    )
}


const ReactUseReducer = () => {    
    
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <UserContext.Provider value={{state, dispatch}}>

                <p>count = {state.count}</p>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>

                <hr />

                <ChildComponent />
                
            </UserContext.Provider>
        </>
    )
}

export default ReactUseReducer;