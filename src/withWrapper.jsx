import React, { Component } from "react";
import Layout from "./Components/Layout/Layout";

const withWrapper = (Innercomponent) => {
  return class withWrapper extends Component {
    //   constructor(props){
    //       super(props);
    //   }
    render() {
      return (
        <Layout>
          <Innercomponent {...this.props} />
        </Layout>
      );
    }
  };
};

export default withWrapper;
