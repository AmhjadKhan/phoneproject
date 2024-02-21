import React, { useState, useEffect } from "react";
import Banner from "../../components/helper/banner/Banner";
import Oppopho from "./Oppo/Oppopho";
import Samsung from "./Samsung/Samsung";
import Watch from "./Watch/Watch";
import Phone from "./phone/Phone";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change 2000 to your actual API call
    return () => clearTimeout(timer);
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <Phone />;
      case 2:
        return <Samsung />;
      case 3:
        return <Watch />;
      case 4:
        return <Oppopho />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Banner />
      <h1 className='text-center font-extrabold max-auto text-5xl mt-4 mb-5'>CHOICE YOUR PHONE</h1>
      <div role="tablist" className="">
        <a
          role="tab"
          className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
          onClick={() => setActiveTab(1)}
        >
          <div className="grid">
          <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg" alt="" className="h-20 w-20 rounded-full" style={{border: '2px solid gray'}} />
          <p className="font-bold">APPLE</p>
          </div>
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
          onClick={() => setActiveTab(2)}
        >
           <div className="grid">
           <img src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-5g.jpg" alt="" className="h-20 w-20 rounded-full" style={{border: '2px solid gray'}} />
           <p className="font-bold">Samsung</p>
           </div>
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 3 ? "tab-active" : ""}`}
          onClick={() => setActiveTab(3)}
        >
          <div className="grid">
          <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-watch-edition-series-5.jpg" alt="" className="h-20 w-20 rounded-full" style={{border: '2px solid gray'}} />
          <p className="font-bold">Watch</p>
          </div>
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 4 ? "tab-active" : ""}`}
          onClick={() => setActiveTab(4)}
        >
           <div className="grid">
           <img src="https://fdn2.gsmarena.com/vv/bigpic/oppo-reno6-5g.jpg" alt="" className="h-20 w-20 rounded-full" style={{border: '2px solid gray'}} />
           <p className="font-bold">OPPO</p>
           </div>

        </a>
      </div>
      {isLoading ? (
        <span className="loading loading-bars loading-lg"></span>
      ) : (
        renderTabContent()
      )}
    </div>
  );
};

export default Home;
