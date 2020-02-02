import React from "react";

const Context = React.createContext();
Context.displayName = "SWCA";

const SWCA = props => {
  if (!props) return React.useContext(Context);

  return (
    <Context.Provider value={createState(props.state)}>
      {props.children}
    </Context.Provider>
  );
};

const createState = map =>
  Object.keys(map).reduce((state, key) => {
    const [value, setValue] = React.useState(map[key]);
    const setterName = "set" + key.charAt(0).toUpperCase() + key.slice(1);
    return Object.assign({}, state, {
      [key]: value,
      [setterName]: setValue
    });
  }, {});

export default SWCA;
