import { createContext, useState } from "react";


export const ThemeContext = createContext()


function ThemeProvider({children}){

    const [theme , setTheme] = useState("dark")

    const handleToggleTheme = () => {
        return  setTheme((prevTheme) => prevTheme === "dark" ? "light" : "dark")
    }

    return <ThemeContext.Provider value={{theme , handleToggleTheme}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider