import { Link } from 'react-router-dom';
import { FiHeart} from 'react-icons/fi';
import { MdHomeFilled} from 'react-icons/md';
import { AiFillSetting} from 'react-icons/ai';

import {CgAddR } from 'react-icons/cg';
import {TiCompass } from 'react-icons/ti';

export function Navbar() {
	return (
		
  <div className='navbar'>
  <div className='logo'>
   
   {/* <img src="https://pbs.twimg.com/media/DpnuuvhWwAAlY8y.jpg" /> */}
   </div>
	   <div className="navigation-search-container">
	   <input className="_aawc" type="text" placeholder="Search"/>
	   <div className="search-container">
	 <div className="search-container-box">
	   </div>
 </div>
	   </div>
	   
	   <div className="navigation-icons">
	   <div className='icons'>
	   <Link to={'/'}> <MdHomeFilled size={30} /></Link> 
	   <Link to={'/'}> <AiFillSetting size={30} /></Link> 
		   <CgAddR size={30} />
		   <TiCompass size={30} />
		   <FiHeart size={30} />
		   <Link to={'/profile'}> <img className='img-nav' src="https://www.bing.com/images/blob?bcid=qEjctsLda3UEVA" alt="" /></Link>
		   
		   </div> 
		  </div>
		  </div>
	  

	);
}
