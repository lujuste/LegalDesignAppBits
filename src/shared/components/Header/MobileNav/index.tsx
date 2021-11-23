import Reveal from "react-reveal/Fade";

import { MotionVStack, MotionText } from "../../../styles/animation";

export default function MobileNav() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <Reveal top>
        <MotionVStack
          display="flex"
          flexDir="column"
          h="100vh"
          w="100%"
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          mt="-5rem"
          spacing={"7"}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {[
            "Legal Design",
            "Consultoria",
            "Treinamentos",
            "Cursos",
            "Blog",
            "Contrato Automático",
          ].map((index) => (
            <MotionText
              key={index}
              initial="hidden"
              animate="visible"
              variants={item}
              color="white"
              fontWeight="bold"
              fontSize="24"
              whileTap={{ scale: 0.9, rotate: 0 }}
            >
              {index}
            </MotionText>
          ))}
        </MotionVStack>
      </Reveal>
    </>
  );
}
