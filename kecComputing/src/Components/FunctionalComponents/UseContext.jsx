
import Component2 from "./ContextComponents/Component2";
import React from "react";
export var ThemeProvider = React.createContext();
var ExamResults = () => {

    return (
        <section>
            <ThemeProvider.Provider value={{sgpa:"10.00",cgpa:"9.98"}}>
                <h1>This is an Example of use Context-Parent Component</h1>
                <Component2 />
            </ThemeProvider.Provider>
        </section>

    )
}
export default ExamResults;