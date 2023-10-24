import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();

    const handleLogOut = () => {
        
            navigate('/login'); // Redirect to the home page
          
        console.log('Login button clicked');

        
    };
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    {/* <li>
                        <Link to="/login">Logout</Link>
                    </li> */}
                </ul>

            </nav>
                <h1>Welcome to Home Page.</h1>

            <button type="button" onClick={handleLogOut}>
                Logout
            </button>

        </>
    )
}