import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Module.styled";

import Shelf from "../elements/shelf";
import Space from "../elements/space";
import Drawers from "../elements/Drawers";

const Module7 = () => {
  const { thickness, sections, drawers } = useWardrobeStore((state) => ({
    thickness: state.thickness,
    sections: state.sections,
    drawers: state.drawers,
  }));

  const spaceSize1 = 300;
  const spaceSize2 =
    sections.height - 4 * thickness - spaceSize1 - drawers.heightDrawerCount[4];

  return (
    <$.Module>
      <Shelf />
      <Space height={spaceSize1} />
      <Shelf />
      <Space height={spaceSize2} />
      <Shelf />
      <Drawers numOfDrawers={4} />
      <Shelf />
    </$.Module>
  );
};

export default Module7;
