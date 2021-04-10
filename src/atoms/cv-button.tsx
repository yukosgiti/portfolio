import { Button } from "@chakra-ui/button";
import theme from "@chakra-ui/theme";
import React from "react";

interface Props {
  text: string;
}

export const CvButton = ({ text }: Props) => {
  return (
    <React.Fragment>
      <Button
        variant="ghost"
        borderRadius="none"
        _hover={{
          // border: "1px solid red",
          borderBottomWidth: theme.sizes[1],
          borderColor: theme.colors.red[700],
          borderBottomStyle: "solid",
        }}
      >
        {text}
      </Button>
    </React.Fragment>
  );
};
