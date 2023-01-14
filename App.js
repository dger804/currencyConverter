import React from "react";

const App = () => {
  const dataExchangeOption = [
    {
      "type": "COP",
      "rate": 0.5
    },
    {
      "type": "USD",
      "rate": 0.1
    },
    {
      "type": "EUR",
      "rate": 0.2
    },
  ]

  return (
    <>
      <h1>
        Currency Converter
      </h1>
      <div>
        <div>
          <input placeholder="Currency Amount Field" />
          <select>
            {
              dataExchangeOption.map((option) =>
                <option key={option.type} >{option.type}</option>
              )
            }

          </select>
        </div>
        <div>
          <input placeholder="Currency Amount Field" />
          <select>
            {
              dataExchangeOption.map((option) =>
                <option key={option.type}>{option.type}</option>
              )
            }
          </select>
        </div>
      </div>
    </>
  )
}

export default App
