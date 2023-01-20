import React, { useState } from "react";

export default function CurrencyApp({ initialAmount, initialDataExchangeOption }) {
  const [currency, setCurrency] = useState(initialAmount)
  const [from, setFrom] = useState("COP")
  const [to, setTo] = useState("USD")

  const convert = () => {




    const finalRate = initialDataExchangeOption[0].rates.USD



    return finalRate * currency
  }



  return (
    <>
      <div>
        <div>
          <input
            placeholder="Currency Amount Field"
            value={currency} />
          <select defaultValue={from} onChange={(e) => setFrom(e.target.value)}>
            {
              initialDataExchangeOption.map((option) =>
                <option key={option.base} >{option.base}</option>
              )
            }

          </select>
        </div>
        <div>
          <input name='a' placeholder="Currency Amount Field" />
          <select defaultValue={to} onChange={(e) => {

            document.getElementById('a').value = convert()
            setTo(e.target.value)


          }} >
            {
              initialDataExchangeOption.map((option) =>
                <option key={option.base}>{option.base}</option>
              )
            }
          </select>
        </div>
      </div>
    </>
  )
}