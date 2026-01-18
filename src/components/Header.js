import '../App.css';


const Header = () => {
    const date = new Date().toLocaleDateString();
    return (
        <div className="card header">
            <h1>Welcome to React</h1>
            <p>Today’s Date: {date}</p>
        </div>
    )
}
export default Header;