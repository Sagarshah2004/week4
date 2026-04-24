import { useEffect, useState, useMemo } from "react";

const Converter = () => {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [rate, setRate] = useState(null);
  const [error, setError] = useState("");

  // Fetch API
  useEffect(() => {
    if (from === to) {
      setRate(1);
      return;
    }

    fetch(`https://api.frankfurter.dev/v1/latest?amount=1&from=${from}&to=${to}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.rates && data.rates[to]) {
          setRate(data.rates[to]);
          setError("");
        } else {
          setError("Invalid response");
        }
      })
      .catch(() => {
        setError("Failed to fetch exchange rate");
      });
  }, [from, to]);

  // Conversion
  const converted = useMemo(() => {
    if (!rate) return 0;
    return (Number(amount) * rate).toFixed(2);
  }, [amount, rate]);

  // Swap
  const swapCurrency = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="container">
      <h2>💱 Currency Converter</h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option>USD</option>
          <option>INR</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>

        <button onClick={swapCurrency}>⇄</button>

        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option>INR</option>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
      </div>

      {error && <p className="error">{error}</p>}

      {rate && (
        <div className="result">
          {amount} {from} = {converted} {to}
          <br />
          Rate: 1 {from} = {rate} {to}
        </div>
      )}
    </div>
  );
};

export default Converter;