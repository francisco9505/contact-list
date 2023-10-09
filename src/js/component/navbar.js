import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store}=useContext(Context)



	return (
		<>
		<h2>{store.francis.name}
		</h2>
		<h3>{store.alberto.lastname}</h3>
		
		</>
	);
};
