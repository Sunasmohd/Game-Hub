import { Button, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;

  if (children?.toString().length! <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children?.toString().substring(0, limit)+'...';

  return (
    <Text>
      {summary}
      <Button color='blue.300' onClick={() => setExpanded(!expanded)} marginX={1} size="xs">
        {expanded ? "Show Less" : "See More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
