import * as React from "react";
import { Div } from "../common/style";
import "./loading.css";

const Loading: React.FC = () => {
  return (
    <Div
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin="50px"
    >
      <h1>Processing...</h1>
      <Div>
        <div className="loadingio-spinner-bean-eater-6cjhr6wm1eh">
          <div className="ldio-40nkkt4otqf">
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </Div>
    </Div>
  );
};

export default Loading;
