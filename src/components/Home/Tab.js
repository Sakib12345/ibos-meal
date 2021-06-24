import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import MealForm from "./Form/Form";
import MealList from "./Landing/Landing";

const MealTab = () => {
  return (
    <Tabs
      
      defaultActiveKey="form"
      id="uncontrolled-tab-example"
    >
      <Tab unmountOnExit={true} mountOnEnter={true} eventKey="form" title="Meal Form">
        <MealForm />
      </Tab>
      <Tab
      unmountOnExit={true} mountOnEnter={true}
        eventKey="list"
        title={
          <>
            <span>Meal List</span>
          </>
        }
      >
        <MealList />
      </Tab>
    </Tabs>
  );
};

export default MealTab;
