import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();

  const handleDelete = (index) => {
    actions.deleteContact(index);
  };

  const handleEdit = (index) => {
    const selectedContact = store.contacts[index];
    navigate(`/editar/${index}`, { state: { contact: selectedContact } });
  };

  return (
    <>
      <div className="container">
        <div className="button mt-2 d-flex justify-content-end">
          <Link to="/formulario">
            <button type="button" class="btn btn-success">
              Add New Contact
            </button>
          </Link>
        </div>

        <div class="imagen mt-3 pt-4 ">
          <div>
            <img
              src="https://img.freepik.com/free-photo/portrait-hesitant-man-purses-lips-looks-bewilderment-feels-doubt_273609-16785.jpg"
              style={{ width: 150, borderRadius: 50, marginLeft: 50 }}
            ></img>
          </div>
          <div>
            <p class="text-muted mb-0">
              <i class="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>{" "}
              070 2860 5375
            </p>
            <p class="text-muted mb-0 mt-2">
              <i class="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i>{" "}
              PhyllisGatlin@spy.com
            </p>
            <p class="text-muted mb-0 mt-2">
              <i class="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary"></i>{" "}
              52 Ilchester MYBSTER 9WX
            </p>
          </div>
        </div>

        {store.contacts.map((contact, index) => (
          <div className="imagen  pt-4" key={index}>
            <div>
              <img
                src="https://img.freepik.com/free-photo/portrait-hesitant-man-purses-lips-looks-bewilderment-feels-doubt_273609-16785.jpg"
                style={{ width: 150, borderRadius: 50, marginLeft: 50 }}
              ></img>
            </div>
            <div>
              <h6 className="mb-2">
                <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>{" "}
                {contact.name}
              </h6>
              <p className="text-muted mb-0">
                <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>{" "}
                {contact.number}
              </p>
              <p className="text-muted mb-0 mt-2">
                <i className="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i>{" "}
                {contact.email}
              </p>
              <p className="text-muted mb-0 mt-2">
                <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary"></i>{" "}
                {contact.address}
              </p>
            </div>
            <div style={{ marginLeft: "auto", marginRight: "10px" }}>
              <button
                onClick={() => handleDelete(index)}
                className="btn btn-danger "
              >
                eliminar
              </button>
              <Link  to={`/editformulario/${index}`} className="btn btn-warning" style={{marginLeft:2}}>
                Editar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
