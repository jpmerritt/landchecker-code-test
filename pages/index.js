import React from "react";
import Page from "../components/Page.js";
import Map from "../components/Map.js";

export default class extends React.Component {
  render() {
    return (
      <Page>
        <Map />
        <style jsx>{``}</style>
      </Page>
    );
  }
}
