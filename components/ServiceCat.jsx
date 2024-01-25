import { serviceItems } from "@/data/dami_data";

const ServiceCat = () => {
  return (
    <section className="wrapper pt-10 px-4">
      {/* Text div */}
      <div className="w-full bg-primary device md:items-start pb-[120px] px-7 md:px-16 pt-10 md:pt-16 rounded-xl ">
        <h2 className="md:flex-1 capitalize text-center md:text-start text-white font-semibold">
          Our Best Services For Your Solution
        </h2>
        <p className="md:flex-1 text-white text-justify">
          Empower your digital presence with our Web and App Development.
          Elevate efficiency and safety through Electrical Controlling System &
          Industrial Machine Electrical Services. Embrace the future with
          cutting-edge Industrial Automation Solutions.
        </p>
      </div>
      {/* Relative div */}
      <div className="relative w-full h-[880px] md:h-[400px] xl:h-[150px]">
        {/* Absolute div */}
        <div className="absolute mx-auto z-10 -top-[77px] w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-7 md:px-16">
          {serviceItems.map((services, index) => (
            // Clildren of absolute card div
            <div
              key={index}
              className="flex flex-col gap-4 w-64 items-center bg-slate-100/80 p-5 sm:px-3 rounded-lg text-center shadow-md"
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


// import { serviceItems } from "@/data/dami_data";

// const ServiceCat = () => {
//   return (
//     <section className="wrapper pt-10 px-4">
//       {/* Text div */}
//       <div className="w-full bg-primary device md:items-start pb-[120px] px-7 md:px-16 pt-10 md:pt-16 rounded-xl ">
//         <h2 className="md:flex-1 capitalize text-center md:text-start text-white font-semibold">
//           Our Best Services For Your Solution
//         </h2>
//         <p className="md:flex-1 text-white text-justify">
//           Empower your digital presence with our Web and App Development.
//           Elevate efficiency and safety through Electrical Controlling System &
//           Industrial Machine Electrical Services. Embrace the future with
//           cutting-edge Industrial Automation Solutions.
//         </p>
//       </div>
//       {/* Relative div */}
//       <div className="relative w-full h-[880px] md:h-[400px] xl:h-[150px]">
//         {/* Absolute div */}
//         <div className="absolute z-10 -top-[77px] w-full flex flex-wrap flex-col sm:flex-row gap-[26px] justify-center items-center px-7 md:px-16">
//           {serviceItems.map((services, index) => (
//             // Clildren of absolute card div
//             <div
//               key={index}
//               className="flex flex-col gap-4 w-64 items-center bg-slate-100/80 p-5 sm:px-3 rounded-lg text-center shadow-md"
//             >
//               {services.icon}
//               <p className="text-[18px] font-semibold">{services.title}</p>
//               <p className="text-sm">{services.desc.substring(0, 80)}...</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceCat;
