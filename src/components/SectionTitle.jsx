import { GiDiamonds } from "react-icons/gi";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <section className="text-center my-2 lg:my-6">
      <div className="font-bold md:text-xl lg:text-2xl uppercase flex items-center justify-center">
        <GiDiamonds className="text-[#ff5900]"></GiDiamonds>{" "}
        <h2 className="mx-2 lg:mx-4 text-2xl md:text-3xl lg:text-4xl">
          {title}
        </h2>{" "}
        <GiDiamonds className="text-[#ff5900]"></GiDiamonds>
      </div>
      <div>
        <h2 className="font-bold text-[8px] md:text-[10px] uppercase tracking-[7px] lg:tracking-[12px] ml-4 text-[#ff5900]">{subtitle}</h2>
      </div>
    </section>
  );
};

export default SectionTitle;
