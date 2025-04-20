import {
  Container,
  Section,
  Text,
  Separator,
  AspectRatio,
  Flex,
} from "@radix-ui/themes";

export default function Home() {
  return (
    <Section p="4">
      <Container>
        <Text size="8" weight="bold">
          MyShop
        </Text>
        <Separator my="4" style={{ width: "150px" }} />
        <Text size="4">Explore, browse and check out with ease.</Text>
        <AspectRatio ratio={16 / 7}>
          <img
            src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
            alt="A wide monitor"
            style={{
              objectFit: "scale-down",
              width: "100%",
              height: "100%",
              borderRadius: "var(--radius-2)",
            }}
          />
        </AspectRatio>
        <Separator my="4" style={{ width: "100%" }} />
        <Flex gap="4">
          <AspectRatio ratio={16 / 7}>
            <img
              src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
              alt="A jacket for women"
              style={{
                objectFit: "scale-down",
                width: "100%",
                height: "100%",
                borderRadius: "var(--radius-2)",
              }}
            />
          </AspectRatio>
          <Separator
            orientation="vertical"
            mx="1"
            style={{ height: "400px" }}
            m="auto"
          />
          <AspectRatio ratio={16 / 7}>
            <img
              src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
              alt="A hard drive"
              style={{
                objectFit: "scale-down",
                width: "100%",
                height: "100%",
                borderRadius: "var(--radius-2)",
              }}
            />
          </AspectRatio>
        </Flex>
      </Container>
    </Section>
  );
}
