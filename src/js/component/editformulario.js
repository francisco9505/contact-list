import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
  const { store, actions } = useContext(Context);
  const { index } = useParams();

  const [editedContact, setEditedContact] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  useEffect(() => {
    if (store.contacts[index]) {
      const { name, email, number, address } = store.contacts[index];
      setEditedContact({ name, email, number, address });
    }
  }, [store.contacts, index]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({
      ...editedContact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    actions.editContact(index, editedContact);

    navigate("/");
  };

  return (
    <>
      <div className="container">
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Edit Contact
          </h2>

          <div className="row d-flex justify-content-center">
            <div className="col-md-9 mb-md-0 mb-5">
              <form onSubmit={handleSubmit}>
                <div className="">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="name" className="">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="FullName"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="email" className="">
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject" className="">
                        Number
                      </label>
                      <input
                        type="number"
                        id="subject"
                        name="number"
                        className="form-control"
                        placeholder="Enter Number"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject" className="">
                        Address
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="address"
                        className="form-control"
                        placeholder="Enter Address"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center text-md-left mt-2">
                  <button type="submit" className="btn btn-primary col-md-12">
                    Save
                  </button>
                </div>
              </form>

              <div className="status"></div>
              <div className="mt-2">
                <Link to="/">
                  <button type="button" className="btn btn-link">
                    or get back to contacts
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditContact;
