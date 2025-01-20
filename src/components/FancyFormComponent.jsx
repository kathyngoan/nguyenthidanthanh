import { useState, useEffect } from "react";
import axios from "axios";

const FancyFormComponent = () => {
  const [tokens, setTokens] = useState([]); // Danh sách token
  const [prices, setPrices] = useState({});
  const [selectedToken, setSelectedToken] = useState("");
  const [amountToSend, setAmountToSend] = useState("");
  const [amountToReceive, setAmountToReceive] = useState("");
  const [error, setError] = useState(null);
  const [tokenImages, setTokenImages] = useState({});

  useEffect(() => {
    // Danh sách token tĩnh
    const staticTokens = [
      { symbol: "SWTH", name: "Switcheo" },
      { symbol: "BTC", name: "Bitcoin" },
      { symbol: "ETH", name: "Ethereum" },
      { symbol: "USDT", name: "Tether" },
    ];
    setTokens(staticTokens);

    // Tải ảnh token
    const fetchTokenImages = async () => {
      const images = {};
      for (const token of staticTokens) {
        const imageUrl = `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token.symbol}.svg`;
        images[token.symbol] = imageUrl;
      }
      setTokenImages(images);
    };

    fetchTokenImages();

    // Lấy giá từ API
    const fetchPrices = async () => {
      try {
        const { data } = await axios.get("https://interview.switcheo.com/prices.json");
        const processedPrices = data.reduce((acc, item) => {
          acc[item.currency] = item.price;
          return acc;
        }, {});
        setPrices(processedPrices);
      } catch (err) {
        setError("Unable to fetch token price data. Please try again later.");
      }
    };

    fetchPrices();
  }, []);

  const handleTokenChange = (e) => {
    setSelectedToken(e.target.value);
    setAmountToReceive("");
    setError(null);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setAmountToSend(value);
      if (selectedToken && prices[selectedToken]) {
        const price = prices[selectedToken];
        setAmountToReceive((value * price).toFixed(4));
      } else {
        setError("Price data is unavailable for the selected token.");
        setAmountToReceive("");
      }
    } else {
      setError("Invalid input. Please enter a numeric value.");
    }
  };

  // Xử lý Submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngừng việc reload trang khi submit
    if (selectedToken && amountToSend && !error) {
      alert(`Swap confirmed!\nSending ${amountToSend} ${selectedToken}\nReceiving ${amountToReceive} in total.`);
    } else {
      setError("Please make sure all fields are filled correctly.");
    }
  };

  return (
    <form className="swap-form" onSubmit={handleSubmit}>
      <h5>Swap</h5>

      {error && <div className="error-message">{error}</div>}

      <label htmlFor="input-token">Select Token</label>
      <select
        id="input-token"
        value={selectedToken}
        onChange={handleTokenChange}
        required
      >
        <option value="">Select a Token</option>
        {tokens.map((token) => (
          <option key={token.symbol} value={token.symbol}>
            {token.name} ({token.symbol})
          </option>
        ))}
      </select>

      <div>
        {selectedToken && tokenImages[selectedToken] && (
          <img
            src={tokenImages[selectedToken]}
            alt={`${selectedToken} logo`}
            className="token-image"
            width={50}
            height={50}
          />
        )}
      </div>

      <label htmlFor="input-amount">Amount to send</label>
      <input
        id="input-amount"
        type="text"
        value={amountToSend}
        onChange={handleAmountChange}
        placeholder="Enter amount to send"
        required
      />

      <label htmlFor="output-amount">Amount to receive</label>
      <input
        id="output-amount"
        type="text"
        value={amountToReceive}
        readOnly
        placeholder="Calculated amount to receive"
      />

      <button type="submit">CONFIRM SWAP</button>
    </form>
  );
};

export default FancyFormComponent;
