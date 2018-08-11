import React from "react";

export default class extends React.Component {
  render() {
    return (
      <div className="MapOverlay">
        <div className="controlBoxContainer">
          <div className="controlBox" />
        </div>
        <style jsx>{`
          .MapOverlay {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-flow: row wrap;
            align-items: flex-start;
            align-content: flex-start;
          }
          .controlBoxContainer {
            flex: 0 0 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-end;
          }
          .controlBox {
            margin-right: 40px;
            height: 400px;
            width: 260px;
            background: #dedede;
            margin-top: 50px;
          }
        `}</style>
      </div>
    );
  }
}
