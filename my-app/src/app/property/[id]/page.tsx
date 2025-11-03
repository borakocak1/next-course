import Dropdown from "../../components/dropdown/Dropdown";
import Carousel from "../../components/carousel/Carousel";
import "./detailsPage.css";
import data from "../../../../public/data/data.json";
import redStar from "../../../../public/assets/images/rate/startRempli.png";
import whiteStar from "../../../../public/assets/images/rate/startVide.png";
import Image from "next/image";
type Props = {
  params: {
    id: string;
  };
};

type Property = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: number;
  location: string;
  equipments: string[];
  tags: string[];
};

export default function DetailsPage({ params }: Props) {
  const found: Property = data.find(
    (property: Property) => property.id == params.id
  );

  console.log(found.rating);

  return (
    <section className="detailsPage">
      <Carousel images={found.pictures}></Carousel>

      <div className="infoSection">
        <div className="information">
          <div className="title">{found.title}</div>
          <div className="location">{found.location}</div>
          <div className="tags">
            <div>
              {found.tags.map((tag, idx)=>
                <div key={idx}>{tag}</div>
              )}
              
              
              {/* {(() => {
              const tagElements: ReactNode[] = [];
              
              found.tags.forEach((tag) => {
                tagElements.push(<div >{tag}</div>)
              })
              return (tagElements)
            })()} */}
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="name">name</div>
          <div className="rating">
            {(() => {
              const stars = [];
              for (let i = 0; i < 5; i++) {
                if (i < found.rating) {
                  stars.push(<Image src={redStar} width={50} height={50} alt="redStar" />)
                } else {
                  stars.push(<Image src={whiteStar} width={50} height={50} alt="whiteStar" />)
                }
              }
              return (stars)
            })()}
          </div>
        </div>
      </div>
      <div className="dropdownSection">
        <Dropdown title="Description" text={found.description}/>
         
        <Dropdown title="Equipments" text={found.equipments} />
      </div>
    </section>
  );
}
