import PostListContainer from "@/containers/PostList";

import Tab from "@components/navigation/Tab";
import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("POST");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Tab
      top='50px'
      value={activeTab}
      onChange={handleTabChange}
      tabs={[
        {
          label: "Post",
          value: "POST",
          component: <PostListContainer />,
        },
        {
          label: "Record",
          value: "RECORD",
          component: <div></div>,
        },
        { label: "Walk", value: "WALK", component: <div>Walk Content</div> },
        {
          label: "Energy",
          value: "ENERGY",
          component: <div>Energy Content</div>,
        },
        {
          label: "Mileage",
          value: "MILEAGE",
          component: <div>Mileage Content</div>,
        },
      ]}
    />
  );
};
export default Home;
