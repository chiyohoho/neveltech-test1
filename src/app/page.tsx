import Aside from "@/components/aside";
import ScrollToTopButton from "@/components/button/scroll.top";
import Main from "@/components/main";
import NavMobile from "@/components/main/nav.mobile";
import { Box, Container, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box className="">
      <Box className="w-full max-540:block hidden">
        <NavMobile />
      </Box>

      <Container maxW='container.lg'>
        <Flex className="pt-10 max-540:pt-0 gap-2">
          <Box className="w-fit pt-5 max-540:hidden">
            <Aside />
          </Box>

          <Box className="w-[calc(100%-160px)] max-540:w-full">
            <Main />
          </Box>
        </Flex>

        <ScrollToTopButton />
      </Container>
    </Box>
  );
}
