import React from "react";
import "./Sidebar.css";
import { MdLibraryBooks as BooksIcon } from "react-icons/md";
import { RiFunctionLine as CoursesIcon } from "react-icons/ri";
import { MdAnnouncement as AnnounceIcon } from "react-icons/md";
import { FaImage, FaVideo as VideoIcon } from "react-icons/fa";
import amigo1 from "../../assets/images/amigo1.jpeg";
import amigo2 from "../../assets/images/amigo2.jpg";
import amigo3 from "../../assets/images/amigo3.jpeg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Main students</h2>
      <ul>
        <li>
          <BooksIcon />
          <a href="/">Discover books</a>
        </li>
        <li>
          <CoursesIcon />
          <a href="/">Online courses</a>
        </li>
        <li>
          <AnnounceIcon />
          <a href="/">Announcements</a>
        </li>
        <li>
          <VideoIcon />
          <a href="/">Video lessons</a>
        </li>
      </ul>
      <h2>Friends</h2>
      <ul>
        <li>
          <img className="amigo" src={amigo1} />
          <a href="/">Bill S.Kennedy</a>
        </li>
        <li>
          <img className="amigo" src={amigo2} />
          <a href="/">Rocky Roard</a>
        </li>
        <li>
          <img className="amigo" src={amigo3} />
          <a href="/">James McDonal</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
