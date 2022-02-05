// for IE11
import "core-js/stable";
import "regenerator-runtime/runtime";

import { InView } from "./module/InView";
import { ViewportFit } from "./module/ViewportFit";

document.addEventListener("DOMContentLoaded", (event) => {
  const inView = new InView();
  inView.init();

  const viewportFit = new ViewportFit();
  viewportFit.init();
});
