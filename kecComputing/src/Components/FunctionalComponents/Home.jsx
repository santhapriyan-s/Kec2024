import "../../assets/css/Home.css";
var Home = () =>{
    var styling = {
        fontSize:"30px",
        textDecoration:"underline",
        color:"blue",
        textAlign:"center"
    }
    return (
    <div>
    <div>
        <h1 style={styling}>This is Home page</h1>
        <h2 style={styling}>Testing Styling</h2>
        <h2 className='box-model'>Hello</h2>
    </div>
    <footer className="footer">
        <p>© 2024 Fullstack Training. All rights reserved.</p>
        <p>Contact: info@fullstacktraining.com</p>
    </footer>
    </div>
    )
}
export default Home;