import React from "react";

const sizeClasses = {
  txtJCHEadA3687: "font-headlinea font-normal",
  txtJCHEadA10726: "font-headlinea font-normal",
  txtPoppinsBold16: "font-bold font-poppins",
  txtPoppinsSemiBold512: "font-poppinssemibold font-semibold",
  txtJCHEadA384: "font-headlinea font-normal",
  txtPoppinsRegular16WhiteA70066: "font-normal font-poppins",
  txtPoppinsRegular2132: "font-normal font-poppins",
  txtJCHEadA256: "font-headlinea font-normal",
  txtPoppinsRegular2133: "font-normal font-poppins",
  txtPoppinsRegular1255: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtJCHEadA512: "font-headlinea font-normal",
  txtRobotoRegular1067: "font-normal font-roboto",
  txtPoppinsRegular2335: "font-normal font-poppins",
  txtPoppinsRegular1115: "font-normal font-poppins",
  txtRobotoRegular1493: "font-normal font-roboto",
  txtPoppinsBold1712: "font-bold font-poppins",
  txtPoppinsBold1862: "font-bold font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
