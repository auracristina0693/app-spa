import React from "react";
import Card from "../Card";
import "./Content.css";
import { courses } from "../../data";

const Content = () => {
  return (
    <div className="content">
      <h1>Online Courses</h1>
      <div className="content_cards">
        {courses.map(
          ({ id, title, description, students, comments, backgroundColor }) => (
            <Card
              key={id}
              title={title}
              description={description}
              students={students}
              comments={comments}
              backgroundColor={backgroundColor}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Content;
