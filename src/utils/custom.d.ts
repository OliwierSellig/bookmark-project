declare module "src/svgs/*.svg" {
  import React from "react";

  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export default Component;
}
