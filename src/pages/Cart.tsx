import { Cross1Icon } from "@radix-ui/react-icons";
import { Text, Section, Separator, Flex, Card, Button } from "@radix-ui/themes";

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

type CartProps = {
  cart: Product[];
  removeFromCart: (productId: number) => void;
};

export default function Cart({ cart, removeFromCart }: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Section p="6">
      <Text weight="bold" size="8" mb="4">
        Cart
      </Text>
      <Separator mb="4" style={{ width: "150px" }} />
      {cart.length === 0 ? (
        <Text size="4">Your cart is empty.</Text>
      ) : (
        <>
          <Flex gap="1" direction="column">
            {cart.map((item) => (
              <Card
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Cross1Icon
                  style={{
                    cursor: "pointer",
                    color: "red",
                    marginRight: "8px",
                  }}
                  onClick={() => removeFromCart(item.id)}
                />
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    objectFit: "scale-down",
                    height: "70px",
                    width: "70px",
                    margin: "0 5px",
                  }}
                />
                <Flex m="2" direction="column" gap="1" style={{ flex: 1 }}>
                  <Text size="4" weight="bold">
                    {item.title}
                  </Text>
                  <Text size="3">${item.price.toFixed(2)}</Text>
                </Flex>
              </Card>
            ))}
          </Flex>
          <Separator my="4" />
          <Text size="5" weight="bold">
            Total: ${total.toFixed(2)}
          </Text>
          <Separator my="2" />

          <Button>Proceed to Checkout</Button>
        </>
      )}
    </Section>
  );
}
