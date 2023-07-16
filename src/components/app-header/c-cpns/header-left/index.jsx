import React, { memo } from "react";
import { LeftWrapper } from "./sytle";

import IconLogo from "@/assets/svg/icon_logo";

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <IconLogo />
    </LeftWrapper>
  );
});

export default HeaderLeft;
