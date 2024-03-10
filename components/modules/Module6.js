import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Drawers from "../elements/Drawers";

const Module6 = () => {
  const { corpus, drawers, viewport } = useMainStore((state) => ({
    corpus: state.corpus,
    drawers: state.drawers,
    viewport: state.viewport,
  }));

  const spaceSize =
    Math.floor(
      corpus.height - 7 * viewport.thickness - drawers.heightOfDrawers[2]
    ) / 5;

  return (
    <$.Module $height={corpus.height * viewport.px}>
      <Shelf />
      <Space height={spaceSize} />
      <Shelf />
      <Space height={spaceSize} />
      <Shelf />
      <Space height={spaceSize} />
      <Shelf />
      <Space height={spaceSize} />
      <Shelf />
      <Space height={spaceSize} />
      <Shelf />
      <Drawers numOfDrawers={2} />
      <Shelf />
    </$.Module>
  );
};

export default Module6;
