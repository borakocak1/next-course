import "./about.css";
import Dropdown from "../components/dropdown/Dropdown";
import Banner from "../components/banner/banner";
import bannerImage from "../../../public/assets/images/banner/homeBanner.png";

export default function About() {
  const data =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip";

  return (
    <div className="aboutPageContent">
      <Banner title="Title" image={bannerImage} />
      <Dropdown title="Data" text={data} />
    </div>
  );
}
