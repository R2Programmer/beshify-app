import { Flex, HStack, Input, Stack, Text, useToast } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import BackgroundTheme from "./components/BackgroundTheme";
import CardComponents from "./components/CardComponents";

function App() {
  const [text, setText] = useState("");
  const toast = useToast();

  const generateText = () => {
    const trimedText = text.trim();
    if (trimedText.length > 0) {
      const replacedValue = trimedText.replace(/\s+/g, " ");
      const newValue = replacedValue.replace(/\s/g, "🤸");
      setText(newValue);
      return newValue;
    } else {
      setText(trimedText);
    }
  };

  const copyText = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    toast({
      title: "🤸Beshify Beshie🤸",
      description: "Text Copied Successfully",
      status: "success",
      duration: 3000,
      isClosable: false,
    });
  };

  return (
    <>
      <Flex
        height={"100vh"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack>
          <Text
            fontSize={{ base: "4xl", md: "4px", lg: "6xl" }}
            fontFamily={"Shrikhand, cursive"}
          >
            🤸Beshify Beshie🤸
          </Text>
          <Stack>
            <HStack>
              <Input
                placeholder="Enter Text"
                onChange={(event) => setText(event.target.value)}
              />
              <BackgroundTheme />
            </HStack>
            {text.length > 0 && (
              <CardComponents
                text={text}
                generateText={generateText}
                copyText={copyText}
              />
            )}
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}

export default App;
