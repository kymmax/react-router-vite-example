import { useContext, createContext, useState } from "react";

// 

const UserContext = createContext();


const ChildComponent = () => {

    const data = useContext(UserContext);

    return (
        <>
            {`Data from Father Component is ${JSON.stringify(data)}`}
            <hr />
            <p>My name is {data.name}.</p>
        </>
    )
}


const ReactUseContext = () => {

    const [data, ] = useState({name: "Jason"})
    
    return (
        <>
            <UserContext.Provider value={data}>
                <ChildComponent />
            </UserContext.Provider>
        </>
    )
}

export default ReactUseContext;