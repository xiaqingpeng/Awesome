import React ,{useState} from 'react'
export let ThemeContext= React.createContext()//创建context
// export let ThemeProvider= React.createContext().Provider//创建context
export let ThemeConsumer= React.createContext().Consumer//创建context
export const ThemeProvider=props=>{
    const [backgroundColor, setBackgroundColor] = useState('rgb(3,127,254)')
    return <ThemeContext.Provider value={[backgroundColor,setBackgroundColor]}>
        {
            props.children
        }
    </ThemeContext.Provider>
}

