import React from "react";
import { FollowUp, RelatedReports } from "../SideCard";
import data from "../../data.json";

const SideBar = () => {
  return (
    <>
      <FollowUp FollowUpItems={data.FollowUpItems} />
      <RelatedReports items={data.RelatedReports} />
    </>
  );
};

export default SideBar;
