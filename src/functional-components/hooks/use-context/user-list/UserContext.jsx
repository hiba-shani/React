import { createContext } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState({
        name: "hiba",
        age: 23,
    })

    return (
        <UserContext.Provider value={{ Users, setUsers }}>
            {children}
        </UserContext.Provider>
    )
}
