import { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider({children}) {
  const [name, setName] = useState("Akash");
  const [age, setAge] = useState(20);

  return <Context.Provider value={{name , age}}>
    {children}
  </Context.Provider>;
}

export default ContextProvider;
