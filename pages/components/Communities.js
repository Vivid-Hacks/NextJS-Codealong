import React from "react";
import { chakra, Box, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import Image from "next/image"
const Choc = () => {
    const Feature = (props) => {
        return (
            <Box width="100%" height="100%">
                <Image src={props.image} alt="Logo" width="100%" height="50px"></Image>
            </Box>
        );
    };
    return (
        <Flex
            bg="#edf3f8"
            _dark={{ bg: "#3e3e3e" }}
            p={20}
            w="auto"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                px={8}
                py={20}
                mx="auto"
                bg="white"
                _dark={{ bg: "gray.800" }}
                shadow="xl"
            >
                <Box textAlign={{ lg: "center" }}>
                    <chakra.p
                        mt={2}
                        fontSize={{ base: "3xl", sm: "6xl" }}
                        lineHeight="8"
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        _light={{ color: "gray.900" }}
                    >
                        Home to the world&apos;s most trusted communities

                    </chakra.p>
                    <chakra.p
                        mt={10}
                        maxW="2xl"
                        fontSize="xl"
                        mx={{ lg: "auto" }}
                        color="gray.500"
                        _dark={{ color: "gray.400" }}
                    >
                        Flow is easy to use and powerful to build with. Every aspect of the platform was designed from the ground up to support exceptional user experience at mainstream scale.
                        <br />
                        Originally conceived by the team behind CryptoKitties, Flow today is a decentralized network supported and built on by a growing community of  brands and Web3 builders.
                    </chakra.p>
                </Box>
                <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                    spacingX={{ base: 16, lg: 24 }}
                    spacingY={20}
                    mt={6}
                >
                   <Feature image="/1.png"/>
                   <Feature image="/2.png"/>
                   <Feature image="/3.png"/>
                   <Feature image="/4.png"/>
                   <Feature image="/5.png"/>
                   <Feature image="/6.png"/>
                   <Feature image="/7.png"/>
                   <Feature image="/8.png"/>
                   <Feature image="/9.png"/>
                   <Feature image="/10.png"/>
                   <Feature image="/11.png"/>
                   <Feature image="/12.png"/>
                </SimpleGrid>
            </Box>
        </Flex>
    );
};
export default Choc;