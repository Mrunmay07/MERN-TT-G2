import { useContext } from "react"
import { ThemeContext } from "../context/ThemeProvider"

function NavBar(){

    const {theme , handleToggleTheme} = useContext(ThemeContext)

    return(
        <div className={`h-lvh ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <h1 >Dark Light Mode website</h1>
            <button className="bg-green-300" onClick={handleToggleTheme}>{theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>
        </div>
    )
}

export default NavBar