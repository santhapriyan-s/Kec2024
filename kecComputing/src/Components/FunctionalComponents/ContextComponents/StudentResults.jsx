import { useContext } from "react";
import { ThemeProvider } from "../UseContext";
var StudentResults=()=>{
    var result=useContext(ThemeProvider);
    return(
        <section>
            <h1>Your SGPA Result is {result.sgpa} and the CGPA Result is {result.cgpa} </h1>
        </section>
    )
}
export default StudentResults;