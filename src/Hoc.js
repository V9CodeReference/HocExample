import React from "react";

const Hoc = (Component) => {
  return class extends React.Component {
    state = { auth: true };
    render() {
      const { auth } = this.state;
      return (
        <div>{auth ? <Component name="vinay" /> : <h1>please login</h1>}</div>
      );
    }
  };
};

export default Hoc;
