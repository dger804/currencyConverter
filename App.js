import React from "react";
import CurrencyApp from "./src/currency-app"
import { DataExchangeOption } from "./src/MOCK"
import { RoughNotation } from "react-rough-notation";

// todo: use mirageJS using server mock
// todo: use an external API to get datae xchange options

const App = () => {

  return (
    <>
      <h1>
        Currency
        <RoughNotation type="circle" show="true">
          Converter
        </RoughNotation>
      </h1>
      <CurrencyApp
        initialAmount="1"
        initialDataExchangeOption={DataExchangeOption} />
    </>
  )
}

export default App
