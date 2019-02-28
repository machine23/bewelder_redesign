import React from "react";
import { DIALOG_CREATE, DIALOG_LIST, DIALOG_VIEW } from "../constants/status";
import Header from "../containers/Header";
import DialogList from "../containers/DialogList";
import DialogCreate from "../containers/DialogCreate";
import DialogView from "../containers/DialogView";

import { CSSTransitionGroup } from "react-transition-group";
import "./animation.css";

class App extends React.Component {
  componentWillUnmount() {
    console.log("dialogs app will unmount");
  }

  render() {
    const status = this.props.status;
    let view;
    switch (status) {
      case DIALOG_CREATE:
        view = <DialogCreate />;
        break;
      case DIALOG_LIST:
        view = <DialogList />;
        break;
      case DIALOG_VIEW:
        view = <DialogView />;
        break;
      default:
        view = <DialogList />;
    }
    return (
      <div className="m-1" style={{ overflow: "hidden", height: "81vh" }}>
        <Header />
        <CSSTransitionGroup
          transitionName="slide"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          component="div"
          className="anim-container"
        >
          <div key={status}>{view}</div>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
