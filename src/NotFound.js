import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="NotFound">
            <h2>sorry</h2>
            <p> page not found </p>
            <span><Link to='/'>Go to Homepage</Link></span>
        </div>
     );
}
 
export default NotFound;