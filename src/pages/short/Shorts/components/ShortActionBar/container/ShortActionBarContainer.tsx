import { useCallback, useState } from "react";
import ShortActionBar from "../ShortActionBar";

const ShortActionBarContainer = () => {
  const [isCmtToggle, setIsCmtToggle] = useState<boolean>(false);
  const handleAction = useCallback(
    (type: "like" | "comment" | "share" | "save") => {
      if (type === "like") {
        console.log("like");
      } else if (type === "comment") {
        setIsCmtToggle(true);
      } else if (type === "share") {
        console.log("share");
      } else if (type === "save") {
        console.log("save");
      }
    },
    [],
  );

  return (
    <ShortActionBar isCmtToggle={isCmtToggle} handleAction={handleAction} />
  );
};

export default ShortActionBarContainer;
