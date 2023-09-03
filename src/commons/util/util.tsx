interface ColorStylesProps {
  serverConfigData: any;
}

export const getColorStyles = (args: ColorStylesProps) => {
  const { serverConfigData } = args;
  let colorStyles = `html {`;

  if (serverConfigData) {
    const configColors = (serverConfigData.data as any)?.colors;

    for (const value in configColors) {
      colorStyles +=
        `--${value}:` + configColors[value as keyof any] + " !important" + ";";
    }

    colorStyles += "}";
  }

  return colorStyles;
};

export default { getColorStyles: getColorStyles };

// import React from "react";

// interface ButtonProps {
//   text: string;
// }

// const Button: React.FC<ButtonProps> = ({ text }) => {
//   return <button>save us</button>;
// };

// export default Button;
