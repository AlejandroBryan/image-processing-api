import {Link} from 'react-router-dom'


export default function Header(){

return (

    <nav className="uk-navbar-container uk-margin" uk-navbar>
        <div className="uk-navbar-center">
           <div className="uk-container">
          
            <ul className="uk-navbar-nav">
                <li>
                <Link to="/"  className="uk-active">Home</Link>
                </li>
                <li>
                <Link to="/upload">Upload</Link>
                </li>
                <li>
                <Link to="/gallery">Gallery</Link>
                </li>
            </ul> 
            </div>
     </div>
  </nav>
)

}