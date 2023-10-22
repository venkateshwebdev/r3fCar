const Footer = () => {
  return (
    <div className="h-[100vh] relative bg-black flex items-center justify-center">
      <div className="flex items-center justify-center max-md:flex-col">
        <div className="w-1/2 max-md:w-full flex flex-col text-white">
            <img className="invert scale-[0.3]" src="/Tesla Cybertruck Logo Vector.svg .png" />
            {/* <button className="border-2 border-white self-center px-5 py-2">order now</button> */}
        </div>
        <div className="w-1/2 max-md:w-full">
          <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_704,w_1251,c_fit,f_auto,q_auto:best/Cybertruck_Order_Hero_Global" />
        </div>
      </div>
      <div className="absolute normaltext text-white bottom-5 flex gap-5"><span>Tesla@2023</span> <span>Contact</span> <span>News</span></div>
    </div>
  );
};

export default Footer;
