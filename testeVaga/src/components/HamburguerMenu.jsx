import { useState } from 'react';
import ModalMenu    from '../components/modalMenu.jsx'

let HamburguerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
		    <button
            	className="md:hidden flex flex-col space-y-1.5 fixed top-4 right-4 z-[999]"
            		onClick={() => setIsOpen(!isOpen)}
            		aria-label="Menu"
            		stytes={{ backgroundColor: isOpen ? "#ffe492" : "#fff" }}
          		>
              <span 
    className={`block w-6 h-0.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
    style={{ backgroundColor: isOpen ? '#000' : '#fff' }}
  ></span>
  <span 
    className={`block w-6 h-0.5 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
    style={{ backgroundColor: isOpen ? '#000' : '#fff' }}
  ></span>
  <span 
    className={`block w-6 h-0.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
    style={{ backgroundColor: isOpen ? '#000' : '#fff' }}
  ></span>
          	</button>
          	<ModalMenu itsOpened={isOpen}/>

		</div>
	)
}

export default HamburguerMenu;