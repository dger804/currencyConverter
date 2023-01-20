import React from "react";
import CurrencyApp from "./src/currency-app"
import { DataExchangeOption } from "./src/MOCK"
// todo: use mirageJS using server mock
// todo: use an external API to get datae xchange options

const App = () => {

  return (
    <>
      <h1>
        Currency Converter
      </h1>
      <CurrencyApp
        initialAmount="1"
        initialDataExchangeOption={DataExchangeOption} />
    </>
  )
}

export default App
