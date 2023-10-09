const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],

      francis: { name: "francisco", lastname: "castillo" },
      alberto: { name: "malvin", lastname: "cruz" },
      contacts: [],
    },
    actions: {
      addContact: (pepito) => {
        const store = getStore();
        const updatedContacts = [...store.contacts, pepito];
        setStore({ contacts: updatedContacts });
      },

      
      deleteContact: (index) => {
        const store = getStore();
        const updatedContacts = [...store.contacts];
        updatedContacts.splice(index, 1); // Elimina el contacto por su índice
        setStore({ contacts: updatedContacts });
      },
    

      updateAlberto: () => {
        const store = getStore();
        setStore({
          ...store,
          alberto: { name: "alberto", lastname: "castillo" },
        });
      },

      updateFrancis: () => {
        const store = getStore();
        setStore({
          ...store,
          francis: { name: "alberto", lastname: "flores" },
        });
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
