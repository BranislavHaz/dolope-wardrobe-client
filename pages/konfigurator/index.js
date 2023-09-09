import { useEffect } from "react";
import Head from "next/head";

import * as $ from "./index.styled";
import useWardrobeStore from "@/stores/wardrobeStore";

import Stand from "@/components/elements/stand";
import ModuleEmpty from "@/components/modules/ModuleEmpty";
import Module1 from "@/components/modules/module1";
import Module2 from "@/components/modules/module2";
import Module3 from "@/components/modules/module3";
import Module4 from "@/components/modules/Module4";
import Module5 from "@/components/modules/Module5";
import Module6 from "@/components/modules/Module6";
import Module7 from "@/components/modules/Module7";
import InputSelect from "@/components/modules/inputSelect";
import InputSectionNumber from "@/components/modules/InputSectionsNumber";

const MODULE_MAP = {
  1: Module1,
  2: Module2,
  3: Module3,
  4: Module4,
  5: Module5,
  6: Module6,
  7: Module7,
};

const index = () => {
  const { sectionsNumber, sections, width, height, setViewportSize, px } =
    useWardrobeStore((state) => ({
      sectionsNumber: state.sectionsNumber,
      width: state.width,
      height: state.height,
      setViewportSize: state.setViewportSize,
      px: state.px,
      sections: state.sections,
    }));

  useEffect(() => {
    setViewportSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getModule = (sectionId) => {
    const moduleId = sections[sectionId];
    const Modul = MODULE_MAP[moduleId];

    if (moduleId === 0) {
      return <ModuleEmpty key={sectionId} />;
    }
    return <Modul key={sectionId} />;
  };

  const getSections = () => {
    const sectionsArray = [];
    for (let i = 1; i <= sectionsNumber; i++) {
      sectionsArray.push(getModule(i), <Stand key={i} />);
    }
    return sectionsArray;
  };

  return (
    <>
      <Head>
        <title>Nakonfigurujte si vlastnu skriňu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <$.Main>
          <$.Wardrobe
            $width={px * width}
            $height={px * height}
            key={Math.random()}
          >
            <Stand />
            {getSections()}
          </$.Wardrobe>
        </$.Main>
      </>
      <$.Inputs>
        <InputSelect id={1} />
        <InputSelect id={2} />
        <InputSelect id={3} />
      </$.Inputs>
      <InputSectionNumber />
    </>
  );
};

export default index;
