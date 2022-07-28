import { FiHeart, FiMessageCircle} from 'react-icons/fi';
import {CgAddR } from 'react-icons/cg';

// import { INav } from '../data';


export function Navbar() {
 return (
  <div className='navbar'>
   <div className='logo'>
    <h1>T9aweer</h1>
    </div>
        <div className="navigation-search-container">
        <div className="search-container">
      <div className="search-container-box">
        </div>
  </div>
        </div>
        

        <div className="navigation-icons">
        <div className='icons'>
            <CgAddR/>
            <FiHeart/>
            <FiMessageCircle />
            </div> 
           </div>
           </div>
       
 );
}