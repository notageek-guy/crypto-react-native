import { Box, ScrollView, Text } from "native-base";
import { useEffect, useState, memo } from "react";
import CryptoData from "./CryptoData";
function Crypto() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const MemoizedCryptoData = memo(CryptoData);
  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);
  console.log(data[0]);
  return (
    <ScrollView flex="1">
      <Box flex="1" safeArea>
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          Crypto
        </Text>
        {loading && <Text textAlign="center">Loading...</Text>}
        {error && <Text>Error</Text>}
        {data.map((coin: any) => (
          <MemoizedCryptoData key={coin.id} {...coin} />
        ))}
      </Box>
    </ScrollView>
  );
}

export default Crypto;
