import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import dataPhotos from "./data-photo.json";
import pacientPhotos from "./pacientPhotos";

import "./PacientPhotoList.css";

const PacientPhotoList = () => {
  const { t } = useTranslation();
  return (
    <>
      <ul className="PacientPhotoList">
        {dataPhotos.map(({ text, id, title }) => (
          <li className="PacientPhotoListItem" key={id}>
            <Link className="ServiceLink" to="/discounts" exact="true">
              <h3 className="PacientPhotoListTitle">{t(title)}</h3>
              <img
                className="PacientPhotoListItemImg"
                src={pacientPhotos[id]}
                alt={text}
                width="250"
                height="200"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PacientPhotoList;
