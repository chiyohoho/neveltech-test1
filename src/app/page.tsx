import Aside from "@/components/aside";
import ScrollToTopButton from "@/components/button/scroll.top";
import Main from "@/components/main";
import NavMobile from "@/components/main/nav.mobile";
import { Box, Button, Center, Container, Flex, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";

export default function Home() {
  return (
    <Box className="">
      <Box className="w-full mb-5 max-540:block hidden">
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

        <Box className="w-full max-540:block hidden ">
          <Center className="w-full">
            <Button className="flex items-center gap-1 w-[90%] py-6 mt-5 my-10 bg-[#f2f2f2] text-black">
              <Text fontWeight={'bold'}>
                Load More
              </Text>

              <FaPlus fontWeight={'bold'} />
            </Button>
          </Center>
        </Box>

        <ScrollToTopButton />
      </Container>
    </Box>
  );
}
