"use client";

import { useState } from "react";
import {
  FeaturesTabIlustration1,
  FeaturesTabIlustration2,
  FeaturesTabIlustration3,
} from "@/svgs";
import FeaturesNav from "./FeaturesNav";
import FeaturesBlock from "./FeaturesBlock";

function FeaturesContainer() {
  const [active, setActive] = useState<0 | 1 | 2>(0);

  return (
    <div>
      <FeaturesNav active={active} setActive={setActive} />
      {active === 0 && (
        <FeaturesBlock
          heading="Bookmark in one click"
          image={<FeaturesTabIlustration1 />}
          destination="/"
        >
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favuorite sites.
        </FeaturesBlock>
      )}
      {active === 1 && (
        <FeaturesBlock
          heading="Intelligent search"
          image={<FeaturesTabIlustration2 />}
          destination="/"
        >
          Our powerfull search feature will help you find saved sides in no time
          at all. No need to trawl through all of your bookmarks
        </FeaturesBlock>
      )}
      {active === 2 && (
        <FeaturesBlock
          heading="Share your bookmarks"
          image={<FeaturesTabIlustration3 />}
          destination="/"
        >
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </FeaturesBlock>
      )}
    </div>
  );
}

export default FeaturesContainer;
