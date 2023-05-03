import css from '../styles/Footer.module.css';
import{UiFaceboock,UiInstagram,UilGithub} from '@iconscout/react-unicons';
import Image from 'next/image';
import Logo from '../assets/logo.png';
export default function Footer (){
return(
    <div className={css.container}>
        <span >. All rights reserved .</span>
        <div className={css.social}>
         {/* <UiFaceboock/>
            <UiInstagram/>
            <UilGithub/> */}

            faceboock   ....   insta   ....   gitHub
        </div>
        <div className={css.logo}>
          <Image src={Logo}  alt="" width={50} height={50}/>
          <span>Fudo</span>
        </div>
    </div>
)
};