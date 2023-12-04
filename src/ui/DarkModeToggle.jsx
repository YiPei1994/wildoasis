import { useDarkModeContext } from "../features/contexts/DarkModeContext";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
function DarkModeToggle() {
  const { handleToggle, isDarkMode } = useDarkModeContext();
  return (
    <ButtonIcon onClick={handleToggle}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
