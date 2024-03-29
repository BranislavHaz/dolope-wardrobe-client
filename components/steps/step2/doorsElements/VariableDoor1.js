import useMainStore from "@/stores/useMainStore";
import { calcMinMaxDoorHeight } from "@/utils/steps/step2/calcDoorHeight";
import { checkIfIsActiveDoor } from "@/utils/steps/step2/checkIfIsActiveDoor";
import { nextStepFilterBox } from "@/utils/steps/step2/nextStepFilterBox";
import { useState } from "react";

import * as $ from "@/styles/components/steps/step2/TypeDoors.styled";

const VariableDoor1 = () => {
  const { state, doors, setTypeOfDoors, removeTypeOfDoors, activeFilter } =
    useMainStore((state) => ({
      state: state,
      doors: state.doors,
      setTypeOfDoors: state.setTypeOfDoors,
      removeTypeOfDoors: state.removeTypeOfDoors,
      activeFilter: state.activeFilter,
    }));

  const [inputValue, setInputValue] = useState(0);
  const [variableHeight, setVariableHeight] = useState(0);
  const [inputErr, setInputErr] = useState(false);

  const handleOnChange = (value) => {
    const valueMM = value * 10;
    const { min, max } = calcMinMaxDoorHeight(1, doors.height);

    setInputValue(value);

    if (valueMM === "undefined" || valueMM === "" || valueMM === 0) {
      setInputErr(null);
    } else if (min <= valueMM && valueMM <= max) {
      setVariableHeight(Math.round((doors.height - valueMM) / 10));
      setInputErr(false);
    } else {
      setVariableHeight(0);
      setInputErr(true);
    }
  };

  const handleClick = () => {
    if (inputValue > 0 && !inputErr) {
      const doorId = activeFilter.doors;
      const typeOfDoor = 6;
      const sections = {
        1: {
          width: doors.width,
          height: Math.round(doors.height - inputValue * 10),
        },
        2: { width: doors.width, height: Math.round(inputValue * 10) },
      };
      setTypeOfDoors({ doorId, sections, typeOfDoor });
      nextStepFilterBox({ state, type: "doors" });
    }
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
    const doorId = activeFilter.doors;
    removeTypeOfDoors(doorId);
  };

  return (
    <$.DoorType $isActive={checkIfIsActiveDoor(state, 6)} onClick={handleClick}>
      <$.DoorElement $heightRatio={0.5}>
        {variableHeight !== 0 && (
          <$.DimensionsText>{variableHeight} cm</$.DimensionsText>
        )}
      </$.DoorElement>
      <$.DoorElement $heightRatio={0.5}>
        <$.InputNum
          placeholder="cm"
          value={inputValue || ""}
          onChange={(e) => handleOnChange(e.target.value)}
          onClick={handleInputClick}
          $isError={inputErr}
        />
        <$.LimitText $isError={inputErr}>
          {calcMinMaxDoorHeight(1, doors.height).text}
        </$.LimitText>
      </$.DoorElement>
    </$.DoorType>
  );
};

export default VariableDoor1;
