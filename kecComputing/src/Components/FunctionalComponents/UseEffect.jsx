import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
var UseEffect = () => {
    // var [text,setText]=useState("Kongu");
    //useEffect(()=>{
    // console.log("text");
    //},[text])
    //return(
    // <section>
    // <h1>UseEffect Example</h1>
    // <input type="text" placeholder="Enter Your text" value={text} onChange={(e)=>{setText(e.target.value)}}></input>

    // <h2>Text typed is {text}</h2>
    // </section>
    // );

    var [post, setPost] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/').then((res) => {
        console.log(res.data);
        setPost(res.data)
            
    }).catch((err)=> {
        console.log(err);
    })
    }, []);
    return (
        <section>
            <h1>Fetching data from Json Placeholder API</h1>
            <h2>Post are</h2>
            <ol>
                {post.map((element) =>(<h3 key={element.Id}>{element.title}</h3> ))}
            </ol>
        </section>
    );
}
export default UseEffect;

