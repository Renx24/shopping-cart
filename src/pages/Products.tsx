import { useState } from "react";
import {
  Grid,
  Button,
  Card,
  Heading,
  Separator,
  Section,
  Text,
  Box,
  Callout,
} from "@radix-ui/themes";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};

type ProductsProps = {
  products: Product[];
  cart: Product[];
  addToCart: (product: Product) => void;
};

export default function Products({ products, cart, addToCart }: ProductsProps) {
  const [popup, setPopup] = useState<{ visible: boolean; product?: Product }>({
    visible: false,
  });

  function handleAddToCart(product: Product) {
    addToCart(product); // Use the function passed from App
    setPopup({ visible: true, product });

    setTimeout(() => setPopup({ visible: false }), 3000);
  }

  return (
    <Section p="6">
      <Text weight="bold" size="8" mb="4">
        Products
      </Text>
      <Separator mb="4" style={{ width: "150px" }} />
      <Grid
        gap="4"
        style={{
          justifyItems: "center",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
        columns="4"
      >
        {products.map((item) => (
          <Card
            key={item.id}
            style={{
              width: "300px",
              height: "450px",
              padding: "16px",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                objectFit: "scale-down",
                width: "100%",
                height: "230px",
                borderRadius: "8px",
              }}
            />
            <Heading
              as="h2"
              size="4"
              mt="2"
              mb="1"
              style={{ textAlign: "center" }}
            >
              {item.title}
            </Heading>
            <Box mx="1" mt="1" style={{ textAlign: "center" }}>
              <Text size="4" weight="bold" color="orange">
                ${item.price.toFixed(2)}
              </Text>
              <Separator my="2" mx="auto" style={{ width: "80%" }} />
              <Button
                onClick={() => handleAddToCart(item)}
                style={{
                  color: "white",
                  padding: "8px 16px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
              >
                {cart.some((cartItem) => cartItem.id === item.id)
                  ? "Remove from cart"
                  : "Add to cart"}
              </Button>
            </Box>
          </Card>
        ))}
      </Grid>
      {popup.visible && popup.product && (
        <Callout.Root
          variant="soft"
          highContrast
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            width: "300px",
          }}
        >
          <Callout.Text size="3" weight="medium">
            {cart.some((cartItem) => cartItem.id === popup.product?.id) ? (
              <>
                Added <Text weight="bold">{popup.product.title}</Text> to the
                cart!
              </>
            ) : (
              <>
                Removed <Text weight="bold">{popup.product.title}</Text> from
                the cart!
              </>
            )}
          </Callout.Text>
        </Callout.Root>
      )}
    </Section>
  );
}
