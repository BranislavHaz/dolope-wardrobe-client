import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/Module.styled";

import Shelf from "../elements/Shelf";
import Space from "../elements/Space";
import Hanger from "../elements/Hanger";

const Module25 = () => {
  const { wardrobe, corpus, viewport } = useMainStore((state) => ({
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    viewport: state.viewport,
  }));

  const spaceSizeDisplay =
    Math.floor(((corpus.height - 3 * viewport.thickness) / 2) * 100) / 100;
  const spaceSizeReal =
    Math.floor(((corpus.height - 3 * wardrobe.thickness) / 2) * 100) / 100;

  return (
    <$.Module $height={corpus.height * viewport.px}>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal}>
        <Hanger />
      </Space>
      <Shelf />
      <Space heightDisplay={spaceSizeDisplay} heightReal={spaceSizeReal}>
        <Hanger />
      </Space>
      <Shelf />
    </$.Module>
  );
};

export default Module25;
