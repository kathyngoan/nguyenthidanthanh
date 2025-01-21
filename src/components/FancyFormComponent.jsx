import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

const FancyFormComponent = () => {
  const [prices, setPrices] = useState({});
  const [selectedToken, setSelectedToken] = useState(null);
  const [amountToSend, setAmountToSend] = useState("");
  const [amountToReceive, setAmountToReceive] = useState("");
  const [error, setError] = useState(null);
  const [tokenOptions, setTokenOptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const staticTokens = [
      { symbol: "SWTH", name: "Switcheo" },
      { symbol: "BTC", name: "Bitcoin" },
      { symbol: "ETH", name: "Ethereum" },
      { symbol: "USDT", name: "Tether" },
    ];

    const options = staticTokens.map((token) => ({
      value: token.symbol,
      label: (
        <div className="flex items-center space-x-2">
          <img
            src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token.symbol}.svg`}
            alt={`${token.symbol} logo`}
            className="w-6 h-6"
          />
          <span>
            {token.name} ({token.symbol})
          </span>
        </div>
      ),
    }));

    setTokenOptions(options);

    const fetchPrices = async () => {
      try {
        const { data } = await axios.get(
          "https://interview.switcheo.com/prices.json"
        );
        const processedPrices = data.reduce((acc, item) => {
          acc[item.currency] = item.price;
          return acc;
        }, {});
        setPrices(processedPrices);
      } catch (err) {
        setError(`Unable to fetch token price data. Reason: ${err.message}`);
      }
    };

    fetchPrices();
  }, []);

  const handleTokenChange = (selectedOption) => {
    setSelectedToken(selectedOption?.value || null); // Reset if no token is selected
    setAmountToReceive(""); // Reset calculated value
    setError(null); // Clear error
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;

    if (isNaN(value) || value === "") {
      setError("Invalid input. Please enter a numeric value.");
      setAmountToSend("");
      setAmountToReceive("");
      return;
    }

    setAmountToSend(value);
    setError(null);

    if (selectedToken && prices[selectedToken]) {
      const price = prices[selectedToken];

      if (price) {
        const calculatedAmount = (value * price).toFixed(4);
        setAmountToReceive(calculatedAmount);
      } else {
        setAmountToReceive("");
        setError("Price data is unavailable for the selected token.");
      }
    } else {
      setAmountToReceive("");
      setError("Price data is unavailable for the selected token.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are properly filled
    if (!selectedToken) {
      setError("Please select a token.");
      return;
    }

    if (!amountToSend || isNaN(amountToSend) || parseFloat(amountToSend) <= 0) {
      setError("Please enter a valid amount to send.");
      return;
    }

    if (!amountToReceive || amountToReceive === "" || isNaN(amountToReceive)) {
      setError("Amount to receive could not be calculated.");
      return;
    }

    // All checks passed, show the modal
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative max-w-lg mx-auto mt-10">
      <form
        className="p-6 bg-white rounded-lg space-y-4"
        onSubmit={handleSubmit}
        data-aos="fade-in"
      >
        <h5 className="text-2xl font-semibold text-gray-800 title">Swap</h5>

        {error && (
          <div className="text-red-500 text-sm mb-4" role="alert">
            {error}
          </div>
        )}

        <div className="flex flex-col">
          <label
            htmlFor="input-token"
            className="text-gray-700 font-medium mb-1"
          >
            Select Token
          </label>
          <Select
            id="input-token"
            options={tokenOptions}
            onChange={handleTokenChange}
            className="w-full border rounded-md"
            placeholder="Select a Token"
            isClearable
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="input-amount"
            className="text-gray-700 font-medium mb-1"
          >
            Amount to send
          </label>
          <input
            id="input-amount"
            type="text"
            value={amountToSend}
            onChange={handleAmountChange}
            placeholder="Enter amount to send"
            className="p-2 border rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="output-amount"
            className="text-gray-700 font-medium mb-1"
          >
            Amount to receive
          </label>
          <input
            id="output-amount"
            type="text"
            value={amountToReceive}
            readOnly
            placeholder="Calculated amount to receive"
            className="p-2 border bg-gray-100 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 text-white font-medium rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
  hover:from-black hover:via-black hover:to-black 
  focus:border-none hover:border-none
  transition duration-200 font-bold"
        >
          CONFIRM SWAP
        </button>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 space-y-4 text-center">
            <h3 className="text-xl font-semibold uppercase">Swap Confirmed</h3>
            <p>
              Sending: <strong>{amountToSend}</strong> {selectedToken}
            </p>
            <p>
              Receiving: <strong>{amountToReceive}</strong>
            </p>
            <button
              onClick={closeModal}
              className="py-2 px-4 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-600 focus:outline-none focus:border-none hover:border-none transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FancyFormComponent;
