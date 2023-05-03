import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/logo.png'
import {UiShoppingBag} from '@iconscout/react-unicons'
export default function Header (){
    return(
       
    <div className={css.header}>
        <div className={css.logo}>
          <Image src={Logo}  alt="" width={50} height={50}/>
          <span>Fudo</span>
        </div>

        <ul className={css.menu}>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>

        <div className={css.rightSide}>
            <div className={css.cart}>
                {/* <UiShoppingBag/> */}Bag
                <div className={css.badge}>1</div>
            </div>
        </div>
     </div>
    

     )
}; 