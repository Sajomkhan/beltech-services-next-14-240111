import { serviceItems } from "@/data/dami_data";

const ServiceDetails = () => {
  return (
    <section className="wrapper px-4 md:px-40">
      <h3 className="mb-8 underline px-2 text-center md:text-start font-bold">
        Check Our Services:
      </h3>
      <div className="space-y-8">
      {serviceItems.map((services, index) => (

          <details key={index} className="group [&_summary::-webkit-details-marker]:hidden" open={index == 0? "open" : ""}>
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-primary-50 p-4">
              <h4 className="font-semibold">{services.title}</h4>

              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700 text-justify whitespace-pre-wrap">
              {services.desc}
            </p>
          </details>
      ))}
      </div>
    </section>
  );
};

export default ServiceDetails;
