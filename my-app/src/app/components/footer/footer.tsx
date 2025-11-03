import logo from "../../../../public/assets/images/logo/logo_footer.png";
import Image from "next/image";
import "./footer.css";

export default function Footer(){
    return (

        <footer className="footer">
            
            <Image
            src ={logo}
            className="logo_footer"
            width={150}
            height={30}
            alt="Logo" 
            />
        <p className="paragraph">
            2020 Kasa. All rights reserved
        </p>

        </footer>



    );

}