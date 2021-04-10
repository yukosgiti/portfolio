import { Button } from "@chakra-ui/button";
import { useClipboard } from "@chakra-ui/hooks";
import { HStack, LinkBox, LinkOverlay, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React, { createElement } from "react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  src: string;
  copy?: boolean;
}

export const CvContactLink = ({ icon, src, copy }: Props) => {
  const { value, onCopy, hasCopied } = useClipboard(src);
  const toast = useToast();
  const handleCopyLinkToClipboard = (e: React.MouseEvent<any>) => {
    onCopy();
    toast({
      title: src,
      description: "Bağlantı kopyalandı.",
      status: "info",
    });
  };
  return (
    <React.Fragment>
      <LinkBox>
        <LinkOverlay
          href={copy ? undefined : src}
          target={copy ? undefined : "__blank"}
          referrerPolicy="no-referrer-when-downgrade"
        >
          <HStack>
            {createElement(icon)}
            <Button
              variant="link"
              colorScheme="blue"
              onClick={handleCopyLinkToClipboard}
            >
              {src}
            </Button>
          </HStack>
        </LinkOverlay>
      </LinkBox>
    </React.Fragment>
  );
};
