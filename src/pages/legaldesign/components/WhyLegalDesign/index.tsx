import {
  Heading,
  Flex,
  Button,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function WhyLegalDesign() {
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
      w="100%"
      maxW={["390px", "390px", "1400"]}
      mx="auto"
      h="499px"
      mt="-12rem"
      flexDir="column"
      align="center"
    >
      <Heading
        as="h1"
        fontFamily="Raleway"
        textAlign="center"
        maxW={["199px", "199px", "320px"]}
        fontSize={["30px", "30px", "36px", "48px"]}
        lineHeight={["40px", "40px", "48px", "55px"]}
        fontWeight="600"
        w="100%"
        h="auto"
        mt={isWideVersion ? "5rem" : "0"}
      >
        Porque usar{" "}
        <Text color="pink.900" as="span">
          Legal Design?
        </Text>
      </Heading>

      <Text
        maxW={["329px", "329px", "529px", "855px"]}
        w="100%"
        textAlign="center"
        fontSize="1rem"
        lineHeight="24px"
        py="1rem"
      >
        A resposta é simples: Documentos em Legal Design geram resultados
        melhores. É muito difícil entender um documento jurídico. Por isso,
        aplicamos o Legal Design neles para gerar mais vendas, aumentar a
        satisfação do cliente (Net Promoter Score – NPS), eliminar burocracia,
        evitar inadimplemento, aumentar a experiência do usuário e aumentar as
        taxas de sucesso no judiciário. Para ter esse resultado, aplicamos
        técnicas de design e experiência do usuário nos seus documentos.
      </Text>

      <Button
        px="10px"
        w="197px"
        h="50px"
        color="white"
        bgColor="pink.900"
        type="button"
        fontSize="14px"
      >
        Quero ver mais exemplos
      </Button>
    </Flex>
  );
}
