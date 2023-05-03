import css from '../styles/Hero.module.css'
import Image from 'next/image'
import Cherry from '../assets/cherry.png'
import HeroImage from '../assets/HeroImage.png'
// import { UilPone } from '@iconscout/react-unicons'
import Pizzal from '../assets/p1.jpg'

export default function Hero() {
    return(
        <div className={css.container}>
            <div className={css.left}>
            <div className={css.cherryDiv}>
                <span>More thane Faster</span>
                <Image src={Cherry} alt=""  width={40} height={25} />
            </div>
            
               <div className={css.heroText}>
                <span>Be The Faster</span>
                <span>In Deilivering</span>
                <span>Your
                     <span style={{color: "var(--themeRed)"}}>  Pizza</span>
                     
                     </span>

               </div>
               <span className={css.mimiText}>
                our Mission is filling tummy with delicious and <br />
                with fast and free delivery
               </span>

               <button className={`btn ${css.btn}`}>
                Get Started
               </button>
               </div>
            

            <div className={css.right}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt=""  layout="intrinsic"/>
                </div>
                <div className={css.ContactUs}>
                  <span>Contact Us</span>
                  <div>
                    {/* <UilPone color='white'  /> */}
                    </div>  
                </div>
                <div className={css.Pizza}>
                        <div>
                            <Image src={Pizzal}  alt="" objectFit="cover"
                             layout='intrinsic' />
                        </div>
                        <div className={css.details}>
                            <span>Italian Pizza</span>
                            <span>
                                <span style={{color:'red'}}>$</span> 10</span>
                        </div>
                    </div>
            </div>
        </div>
    )
}