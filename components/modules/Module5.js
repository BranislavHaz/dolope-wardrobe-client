import useWardrobeStore from "@/stores/wardrobeStore";
import * as $ from "./Module.styled";

import Shelf from "../elements/shelf";
import Space from "../elements/space";
import Drawers from "../elements/Drawers";

const Module5 = () => {
  const { thickness, moduleHeight, drawer } = useWardrobeStore((state) => ({
    thickness: state.thickness,
    moduleHeight: state.moduleHeight,
    drawer: state.drawer,
  }));

  const spaceSize1 = 300;
  const spaceSize2 =
    moduleHeight - 4 * thickness - spaceSize1 - drawer.heightDrawerCount[2];

  return (
    <$.Module>
      <Shelf />
      <Space height={spaceSize1} />
      <Shelf />
      <Space height={spaceSize2} />
      <Shelf />
      <Drawers numOfDrawers={2} />
      <Shelf />
    </$.Module>
  );
};

export default Module5;
