import { useState } from "react";
import { styled } from "@nimbleuikit/atoms/utils";
import { theme } from "~/theme/theme";
import { MasterButton } from "../MasterButton";
import { Text } from "@nimbleuikit/atoms";

const CodeBlock = styled(Text)({
  backdropFilter: "blur(5px)",
  borderRadius: "20px",
  padding: "1rem",
  color: theme.colors.darkAccent,
  fontStyle: "italic",
  fontFamily: "Monospace",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: `1px solid ${theme.colors.secondary}`,
});

const CopiedMessage = styled("div")({
  position: "fixed",
  bottom: "100%",
  right: "0%",
  backgroundColor: theme.colors.primary,
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  zIndex: theme.zIndices.high,
});

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Error in copying text: ", err);
  }
};

const CodeComponent: React.FC = () => {
  const code = "npm install @nimbleuikit/atoms";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  return (
    <CodeBlock fontSize={[1, 2, 3, 4, 4, 5]}>
      <code>{code}</code>
      <MasterButton
        onClick={handleCopy}
        themeVariant="nav"
        fontColor="accent"
        fontSize="large"
        icon="Copy"
      ></MasterButton>
      {copied && <CopiedMessage>Copied!</CopiedMessage>}
    </CodeBlock>
  );
};

export default CodeComponent;
