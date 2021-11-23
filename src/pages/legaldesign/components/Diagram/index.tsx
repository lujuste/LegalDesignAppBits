import {
  Flex,
  Icon,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import DiagramIcon from "./DiagramIcon";

export default function Diagram() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
    "2xl": true,
  });

  return (
    <Flex
      maxW={["350px", "350px", "380px", "1400px"]}
      w="100%"
      h={isWideVersion ? "710px" : "100%"}
      mx="auto"
      pb={["5rem", "5rem", "1rem", "0"]}
      flexDir="column"
      mt={["0", "0", "-3rem", "-2rem"]}
    >
      {isWideVersion ? (
        <>
          <Flex px="1rem" justify="space-between" mt="2rem">
            <Flex maxW="400px" flexDir="column">
              <Heading
                fontFamily="Raleway"
                color="#B19BC7"
                fontWeigth="600"
                fontSize="2.5rem"
                mb="0.90rem"
              >
                Design
              </Heading>
              <Text
                display="block"
                fontSize="1rem"
                lineHeight="24px"
                fontWeight="400"
              >
                Na elaboração dos documentos jurídicos passamos por uma fase
                inicial de design thinking para verificarmos quem são os
                usuários que interagem com aquele documento (mapeamento), quais
                os problemas que eles enfrentam com ele e a finalidade daquele
                documento. Após essa fase, alteramos a linguagem do texto do
                documento e inserimos elementos gráficos que auxiliam na
                compreensão do documento.
              </Text>
            </Flex>

            <Flex maxW="400px" flexDir="column">
              <Heading
                fontFamily="Raleway"
                color="#BB73A9"
                fontWeigth="600"
                fontSize="2.5rem"
                mb="0.90rem"
              >
                Direito
              </Heading>
              <Text fontSize="1rem" fontWeight="400">
                Na elaboração dos documentos jurídicos passamos por uma fase
                inicial de design thinking para verificarmos quem são os
                usuários que interagem com aquele documento (mapeamento), quais
                os problemas que eles enfrentam com ele e a finalidade daquele
                documento. Após essa fase, alteramos a linguagem do texto do
                documento e inserimos elementos gráficos que auxiliam na
                compreensão do documento.
              </Text>
            </Flex>
          </Flex>
          <Flex mx="auto" transform="translateY(-160px)" flexDir="column">
            <Flex mx="auto" justify="center">
              <Icon mx="1rem" w="100%" h="auto" as={DiagramIcon} />
            </Flex>
            <Heading
              fontFamily="Raleway"
              color="#F08B94"
              fontWeigth="600"
              fontSize="2.5rem"
              mb="0.90rem"
              mt="2rem"
              textAlign="center"
            >
              User Experience
            </Heading>
            <Text
              textAlign="center"
              maxW="900px"
              fontSize="1rem"
              fontWeight="400"
            >
              Na elaboração dos documentos jurídicos passamos por uma fase
              inicial de design thinking para verificarmos quem são os usuários
              que interagem com aquele documento (mapeamento), quais os
              problemas que eles enfrentam com ele e a finalidade daquele
              documento. Após essa fase, alteramos a linguagem do texto do
              documento e inserimos elementos gráficos que auxiliam na
              compreensão do documento.
            </Text>
          </Flex>
        </>
      ) : (
        <>
          <Icon as={DiagramIcon} w="100%" h="auto" />
          <Flex mx="auto" flexDir="column">
            <Heading
              fontSize="1.875rem"
              color="#B19BC7"
              fontFamily="Raleway"
              fontWeight="600"
              mb="1rem"
              mt="3rem"
            >
              Design
            </Heading>
            <Text
              maxW={["329px", "329px", "629px", "855px"]}
              h="100%"
              fontsize="1rem"
              textAlign="left"
            >
              Na elaboração dos documentos jurídicos passamos por uma fase
              inicial de design thinking para verificarmos quem são os usuários
              que interagem com aquele documento (mapeamento), quais os
              problemas que eles enfrentam com ele e a finalidade daquele
              documento. Após essa fase, alteramos a linguagem do texto do
              documento e inserimos elementos gráficos que auxiliam na
              compreensão do documento.
            </Text>
            <Heading
              fontSize="1.875rem"
              color="#BB73A9"
              fontFamily="Raleway"
              fontWeight="600"
              mb="1rem"
              mt="2rem"
            >
              Direito
            </Heading>
            <Text
              maxW={["329px", "329px", "629px", "855px"]}
              h="100%"
              fontsize="1rem"
              textAlign="left"
            >
              Na elaboração dos documentos jurídicos passamos por uma fase
              inicial de design thinking para verificarmos quem são os usuários
              que interagem com aquele documento (mapeamento), quais os
              problemas que eles enfrentam com ele e a finalidade daquele
              documento. Após essa fase, alteramos a linguagem do texto do
              documento e inserimos elementos gráficos que auxiliam na
              compreensão do documento.
            </Text>
            <Heading
              fontSize="1.875rem"
              color="#F08B94"
              fontFamily="Raleway"
              fontWeight="600"
              mb="1rem"
              mt="2rem"
            >
              UserExperience
            </Heading>
            <Text
              maxW={["329px", "329px", "629px", "855px"]}
              h="100%"
              fontsize="1rem"
              textAlign="left"
              pb={["0", "0", "1rem", "1rem"]}
            >
              Na elaboração dos documentos jurídicos passamos por uma fase
              inicial de design thinking para verificarmos quem são os usuários
              que interagem com aquele documento (mapeamento), quais os
              problemas que eles enfrentam com ele e a finalidade daquele
              documento. Após essa fase, alteramos a linguagem do texto do
              documento e inserimos elementos gráficos que auxiliam na
              compreensão do documento.
            </Text>
          </Flex>
        </>
      )}
    </Flex>
  );
}
