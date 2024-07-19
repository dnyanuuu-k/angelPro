"use client";
import React, { useEffect, useState } from "react";
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
import Deposit from "@/app/Deposit";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import Profile from "./profile";

const calculateInrAmount = (usdtVol) => {
  if (usdtVol > 0 && usdtVol < 500) {
    // console.log(usdtVol * 92);
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
  // const bodyStyle = document.body.style
  // const [isLocked, setIsLocked] = useState(
  //   bodyStyle.overflowY === hidden
  // )

  const [showModal, setShowModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [state] = useForm("mrbzgkjq");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [usdtVol, setUsdtVol] = useState("");
  const [phone, setPhone] = useState("");
  const [txref, setTxref] = useState("");
  const [accnum, setAccnum] = useState("");
  const [accifsc, setAccifsc] = useState("");
  const [accname, setAccname] = useState("");

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!usdtVol || !phone || !txref || !accnum || !accifsc || !accname) {
      alert("All the fields are required.");
      return;
    }

    try {
      // const res = await fetch("http://localhost:3000/api/sellusdts", {
      const res = await fetch("/api/sellusdts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          usdtVol,
          phone,
          txref,
          accnum,
          accifsc,
          accname,
        }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                <Button
                  as={"a"}
                  w={{ base: "full", md: "100%" }}
                  fontSize={"sm"}
                  size="lg"
                  fontWeight={600}
                  // variant={"link"}
                  href={"#"}
                  color={"white"}
                  bg={"red"}
                  _hover={{
                    bg: "black",
                  }}
                  onClick={() => signOut()}
                >
                  Sign Out
                </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1} bg={"gray.50"}>
            <Stack
              p={{ base: 4, sm: 6, md: 8 }}
              spacing={{ base: 8 }}
              flex="1"
              width="100%"
            >
              <Stack spacing={2} align="center">
                <Heading
                  color={"gray.800"}
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                >
                  Sell&nbsp;
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, #fe5823, #fe5823)"
                    bgClip="text"
                  >
                    USDT
                  </Text>
                </Heading>
                <Link href="#prices">
                  <Button
                    size="lg"
                    w={{ base: "full", md: "100%" }}
                    bg={"#fe5823"}
                    color={"white"}
                    onClick={() => setShowModal(true)}
                  >
                    Deposit
                  </Button>
                  <Button
                    className="mt-3"
                    size="lg"
                    w={{ base: "full", md: "100%" }}
                    bg={"#fe5823"}
                    color={"white"}
                    onClick={() => setShowProfile(true)}
                  >
                    Profile
                  </Button>
                </Link>
                {/* <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                Please place your order to sell crypto.
              </Text> */}
              </Stack>
              <form onSubmit={handleSubmit} flex="1" width="100%">
                <Stack spacing={4} flex="1" width="100%">
                  <Box position="relative" padding="4">
                    <Divider />
                    <AbsoluteCenter px="4">Order details</AbsoluteCenter>
                  </Box>
                  <InputGroup>
                    <Input
                      type="number"
                      bg={"white"}
                      placeholder="USDT sell amount"
                      min="1"
                      id="usdt"
                      name="usdt"
                      required
                      value={usdtVol}
                      onChange={(e) => setUsdtVol(e.target.value)}
                    />
                    <InputRightAddon marginRight={3}>USDT</InputRightAddon>
                    <InputRightAddon>
                      = {calculateInrAmount(usdtVol)} INR
                    </InputRightAddon>
                  </InputGroup>
                  <ValidationError
                    prefix="USDT"
                    field="usdt"
                    errors={state.errors}
                  />
                  <InputGroup>
                    <InputLeftAddon>+91</InputLeftAddon>
                    <Input
                      type="tel"
                      bg={"white"}
                      placeholder="Mobile phone number"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                    />
                  </InputGroup>
                  <FormControl>
                    <Input
                      placeholder="Blockchain transaction reference ID"
                      bg={"white"}
                      id="txref"
                      name="txref"
                      value={txref}
                      onChange={(e) => setTxref(e.target.value)}
                      required
                    />
                    <FormHelperText>
                      <Text>
                        Address: <b>TPoeK8TsEUGAHSWFzEsUrvZTBXtMFuXwNo</b>
                      </Text>
                      <Text>
                        Deposit network: <b> TRON TRC-20</b>
                      </Text>
                    </FormHelperText>
                  </FormControl>

                  <ValidationError
                    prefix="Transaction reference"
                    field="txref"
                    errors={state.errors}
                  />
                  <Box position="relative" padding="5">
                    <Divider />
                    <AbsoluteCenter px="4">Your Bank account</AbsoluteCenter>
                  </Box>
                  <Input
                    placeholder="Account number"
                    bg={"white"}
                    id="accnum"
                    name="accnum"
                    value={accnum}
                    onChange={(e) => setAccnum(e.target.value)}
                    required
                  />
                  <ValidationError
                    prefix="Account number"
                    field="accnum"
                    errors={state.errors}
                  />
                  <Input
                    placeholder="IFSC code"
                    bg={"white"}
                    id="accifsc"
                    name="accifsc"
                    value={accifsc}
                    onChange={(e) => setAccifsc(e.target.value)}
                    required
                  />
                  <ValidationError
                    prefix="IFSC code"
                    field="accifsc"
                    errors={state.errors}
                  />
                  <Input
                    placeholder="Account holder name"
                    bg={"white"}
                    id="accname"
                    name="accname"
                    value={accname}
                    onChange={(e) => setAccname(e.target.value)}
                    required
                  />
                  <ValidationError
                    prefix="Account name"
                    field="accname"
                    errors={state.errors}
                  />
                </Stack>
                <Button
                  type="submit"
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bg="#fe5823"
                  color={"white"}
                  onClick={onOpen}
                >
                  Submit
                </Button>
              </form>
            </Stack>
          </Flex>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Order placed successfully
                </AlertDialogHeader>

                <AlertDialogBody>
                  Your order is processing. Our support channel{" "}
                  <Link
                    href="https://wa.me/918696300285?text=Hello%2C%20I%20need%20help%20with%20my%20order"
                    isExternal
                  >
                    Contact us on whatsapp
                  </Link>
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button colorScheme="green" onClick={onClose} ml={3}>
                    OK
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Stack>
        {showModal && <Deposit onClose={() => setShowModal(false)} />}
        {showProfile && <Profile onClose={() => setShowProfile(false)} />}
      </Container>
    </div>
  );
}
