import React, { useEffect } from "react";
import Logo from "../Logo";
import { join } from "../../utils";
import "./_index.scss";

function Loading({ shuffle }) {
  return (
    <div className={join("loading-container", shuffle.title)}>
      <Logo style={shuffle?.style} className={join("mixin-blend-mode", "loading-logo")} />
    </div>
  );
}

export default Loading;
