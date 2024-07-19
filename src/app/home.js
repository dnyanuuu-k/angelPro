"use client";
import * as React from "react";
import {
  Image,
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  InputGroup,
  InputLeftAddon,
  useColorModeValue,
  useBreakpointValue,
  IconProps,
  Icon,
  Divider,
  AbsoluteCenter,
  InputRightAddon,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Badge,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Link,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";

import { signIn, signOut, useSession } from "next-auth/react";
const calculateInrAmount = (usdtVol) => {
  if (usdtVol > 0 && usdtVol < 500) {
    console.log(usdtVol * 92);
    return usdtVol * 92;
  } else if (usdtVol >= 500 && usdtVol <= 1087) {
    return usdtVol * 92;
  } else if (usdtVol > 1087 && usdtVol <= 2151) {
    return usdtVol * 93;
  } else if (usdtVol > 2151 && usdtVol <= 10000) {
    return usdtVol * 94;
  } else {
    return usdtVol * 94;
  }
};

export default function SplitScreen() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   async function fetchUsers() {
  //     const response = await fetch("/api/user");
  //     const data = await response.json();
  //     setUsers(data);
  //   }

  //   fetchUsers();
  // }, []);

  const session = useSession();
  // console.log(session);
  return (
    <div id="sell">
      <Container
        as={SimpleGrid}
        maxW={"10xl"}
        spacing={{ base: 10, lg: 32 }}
        p={0}
      >
        <Stack direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"} bg="#222222">
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Stack direction={"row"}>
                <Text
                  textTransform={"uppercase"}
                  color={"orange.200"}
                  fontWeight={600}
                  fontSize={"sm"}
                  bg={useColorModeValue("orange.500", "orange.900")}
                  p={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  +32K Trades
                </Text>
                <Text
                  textTransform={"uppercase"}
                  fontWeight={600}
                  fontSize={"sm"}
                  bg="#0a0a0a"
                  p={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  {/* <Image
                  src="https://www.supa-palette.com/images/brands/gumroad.svg"
                  width="10"
                  display="inline"
                /> */}
                   ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
                </Text>
              </Stack>

              <Heading fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}>
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: useBreakpointValue({ base: "20%", md: "30%" }),
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "#fe5823",
                    zIndex: -1,
                  }}
                  color="white"
                >
                  AngelPro.Online
                </Text>
                <br />{" "}
                <Text color={"#fe5823"} as={"span"}>
                  Trade USDT
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "3xl", lg: "2xl" }} color="#bebebe">
                Angel pro is the #1 place to buy and sell USDT which is free,
                and safe with 24/7 support.
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Link href="#prices">
                  <Button
                    size="lg"
                    w={{ base: "full", md: "100%" }}
                    bg={"#fe5823"}
                    color={"white"}
                  >
                    Price
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    size="lg"
                    w={{ base: "full", md: "100%" }}
                    variant="outline"
                    color="white"
                    hover={{ color: "black" }}
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link>
                  <Button
                    as={"a"}
                    w={{ base: "full", md: "100%" }}
                    fontSize={"sm"}
                    size="lg"
                    fontWeight={600}
                    // variant={"link"}
                    href={"#"}
                    color={"white"}
                    bg={"blue"}
                    _hover={{
                      bg: "red",
                    }}
                    onClick={() => signIn("google")}
                  >
                    Sign In with Google
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </div>
  );
}
