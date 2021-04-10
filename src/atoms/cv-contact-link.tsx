import { Button } from "@chakra-ui/button";
import { useClipboard } from "@chakra-ui/hooks";
import { HStack, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import theme from "@chakra-ui/theme";
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
    if (!copy) return;
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
          aria-label={`Go to ${src}`}
          href={copy ? undefined : src}
          target={copy ? undefined : "__blank"}
          referrerPolicy="no-referrer-when-downgrade"
        >
          <HStack>
            {createElement(icon)}
            <Button
              fontSize={[theme.fontSizes.sm, theme.fontSizes.md]}
              variant="link"
              colorScheme="blue"
              tabIndex={copy ? undefined : -1}
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
