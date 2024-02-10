import chef1 from "../../../assets/chef/chef1.png"
import chef2 from "../../../assets/chef/chef2.png"
import chef3 from "../../../assets/chef/chef3.png"
import chef4 from "../../../assets/chef/chef4.png"
import SectionTitle from "../../../components/SectionTitle";

const OurChef = () => {
    return (
        <section>
            <SectionTitle
            title={"Meet Our Maestros"}
            subtitle={"Skill-Mastery-Flavor"}></SectionTitle>
            <div className="w-11/12 mx-auto my-10 lg:my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <img src={chef1} alt="chef" />
                <img src={chef2} alt="chef" />
                <img src={chef3} alt="chef" />
                <img src={chef4} alt="chef" />
            </div>
        </section>
    );
};

export default OurChef;