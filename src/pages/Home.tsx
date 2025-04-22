import { Section, Text, Separator, Flex, Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Section
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
      }}
    >
      <Flex
        gap="4"
        justify="between"
        align="center"
        direction={{ initial: "column", md: "row" }}
        style={{
          width: "100%",
          height: "90%",
          maxWidth: "1800px",
        }}
      >
        <Flex
          align="center"
          direction="column"
          gap="2"
          style={{
            width: "100%",
            maxWidth: "500px",
            textAlign: "center",
            padding: "16px",
          }}
        >
          <Text style={{ fontSize: "3rem", color: "#ff6a00" }} weight="bold">
            MYSHOP
          </Text>
          <Separator
            color="green"
            my="2"
            style={{ width: "50%", height: "3px" }}
          />
          <Text size="5" color="gray" style={{ textAlign: "center" }}>
            Your one stop shop for all the 20 things the API has.
          </Text>

          <Link
            to="products"
            style={{ textDecoration: "none", display: "block" }}
          >
            <Button
              mt="2"
              style={{
                height: "40px",
                cursor: "pointer",
              }}
            >
              Browse here!
            </Button>
          </Link>
        </Flex>

        <img
          src="https://images.unsplash.com/photo-1505846951821-e25bacf2eccd?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Woman posing"
          style={{
            objectFit: "cover",
            objectPosition: "top",
            width: "100%",
            maxWidth: "1000px",
            maxHeight: "1000px",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Flex>
    </Section>
  );
}
