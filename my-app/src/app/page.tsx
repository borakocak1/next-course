import data from "../../public/data/data.json";
import Banner from "./components/banner/banner";
import Card from "./components/card/card";
import styles from "./page.module.css";
import bannerImage from "../../public/assets/images/banner/homeBanner.png";

type CardData = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: { name: string; picture: string };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};

export default async function Home() {
  // hooks

  // logic
  // const res = await fetch("http://localhost:3000/data/data.json");
  // const data = await res.json();

  /*
  [
    azdazdBlBLa,
    azdazdazBlBLa,
    azdzadazdBlBLa
  ]
  */

  /*
  {
    "key1":"val1",
        "key1":"val1",
    "key1":"val1",
    "key1":"val1",
    "key1":"val1",
    "key1":"val1",

  }

  [
  "key1",
  "key2"...
  ]
  */

  // render
  return (
    <section className={styles.homePageContent}>
      <Banner title="Title" image={bannerImage} />
      <div className={styles.propertyListContainer}>
        {data.map((element: CardData, idx: number) => {
          return (
            <Card title={element.title} key={idx} image={element.pictures[0]} />
          );
        })}
      </div>
    </section>
  );
}
