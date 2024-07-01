import {useState, useCallback} from "react"
import ThemeContext from "./Theme"
import MainContent from "./MainContent"

function DarkOrLight(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    if (theme == "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [theme])

  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
      <MainContent/>
    </ThemeContext.Provider>
  )
}

export default DarkOrLight