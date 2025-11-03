import Image from "next/image";
import { StaticImageData } from "next/image";
import "./banner.css"

type BannerProps = {
  title: string;
  image: StaticImageData;
};

export default function Banner({ title, image }: BannerProps){
    
    
    return(
        <div className="banner_container">
           <Image
            src={image}
            className={`banner_image ${title ? 'dimmed' : ''}`}
             width={150}
             height={30}
             alt="CardImage"
            />
            <h3 className="banner_title">{title}</h3>
        </div>
    )

}