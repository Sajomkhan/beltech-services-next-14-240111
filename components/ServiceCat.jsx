import { serviceItems } from "@/data/dami_data";

const ServiceCat = () => {
  return (
    <section className="wrapper mx-auto md:pb-16 pb-[650px] pt-8 px-4">
      <div className="relative w-full bg-primary device md:items-start pb-[145px] px-7 md:px-16 pt-7 md:pt-16 rounded-xl ">
        <h2 className="md:flex-1 capitalize text-white font-semibold">
          Our Best Services For Your Solution
        </h2>
        <p className="md:flex-1 text-white ">
          Empower your digital presence with our Web and App Development.
          Elevate efficiency and safety through Electrical Controlling System &
          Industrial Machine Electrical Services. Embrace the future with
          cutting-edge Industrial Automation Solutions.
        </p>
        <div className="absolute z-10 top-[320px] md:bottom-[-100px] left-0 w-full h-300 device px-7 md:px-16">
          {serviceItems.map((services, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 bg-slate-100/80 p-5 rounded-lg text-center shadow-md"
            >
              {services.icon}
              <p className="text-[18px] font-semibold">{services.title}</p>
              <p className="text-sm">{services.desc.substring(0, 80)}...</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCat;
