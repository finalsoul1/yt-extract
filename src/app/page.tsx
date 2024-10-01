import { Box, Button, Center } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box maxW="960px" mx="auto">
      <main>
        <Center h="100vh">
          <Link href="/yte">
            <Button size="lg">Go to YTE</Button>
          </Link>
        </Center>
      </main>
    </Box>
  );
}
