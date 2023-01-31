import { Box, Text } from "native-base";

const CryptoData = ({
    name,
    symbol,
    price_usd,
    percent_change_24h,
  }: {
    name: string;
    symbol: string;
    price_usd: string;
    percent_change_24h: string;
  }) => {
    return (
      <Box bg="white" p="4" my="2" mx="4" borderRadius="md">
        <Text fontSize="xl" fontWeight="bold">
          {name} ({symbol})
        </Text>
        <Text>${price_usd}</Text>
        <Text>{percent_change_24h}%</Text>
      </Box>
    );
  };
  
  export default CryptoData;
  

