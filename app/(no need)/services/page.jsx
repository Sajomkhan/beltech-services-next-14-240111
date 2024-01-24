const Services = () => {
  return (
    <div className="w-full pt-10 flex justify-center items-center bg-slate-300">
      <div className="w-[350px] border border-slate-500 flex flex-col gap-5 p-4 pb-8 rounded-md">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam illo placeat eligendi laborum hic ratione quod saepe velit sit?</p>
        {/* div one */}
        <div className="relative">
          {/* <div className="w-32 h-32 bg-red-600/70">A</div> */}
          <div className="w-32 h-32 absolute top-0 left-6 bg-teal-600/70">
            B
          </div>
          <div className="w-32 h-32 absolute top-0 left-12 bg-blue-600/70">
            C
          </div>
          <div className="w-32 h-32 absolute top-0 left-20 bg-violet-600/70">
            D
          </div>
        </div>
        {/* div two */}
        {/* <div className="relative">
          <div className="w-32 h-32 bg-red-600/70">A</div>
          <div className="absolute left-0 top-0">
            <div className="w-32 h-32 bg-teal-600/70">
              B
            </div>
            <div className="w-32 h-32 bg-blue-600/70">
              C
            </div>
            <div className="w-32 h-32 bg-violet-600/70">
              D
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
