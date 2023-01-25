import React, { useEffect, useState } from "react";

export default function CurrencyApp({ initialAmount, initialDataExchangeOption }) {
  const [currency, setCurrency] = useState(initialAmount)
  const [from, setFrom] = useState("COP")
  const [to, setTo] = useState("USD")

  useEffect(() => {
    convert()
  }, [])

  const convert = () => {
    const finalRate = initialDataExchangeOption.filter((item) => {
      if (item.base === from) {
        const rate = item.rates
        console.log(rate)
        console.log(to)
        if (Object.keys[rate] === to) {
          console.log(Object.values(rate))
        }
      }
    })

    const result = currency / finalRate
    console.log(result)

    return result
  }

  return (
    <>
      <div>
        <div>
          <input
            placeholder="Currency Amount Field"
            defaultValue={initialAmount}
            onChange={(e) => setCurrency(e.target.value)}
          />
          <select onChange={(e) => setFrom(e.target.value)}>
            {
              initialDataExchangeOption.map((option) =>
                <option key={option.base} >{option.base}</option>
              )
            }
          </select>
        </div>
        <div>
          <input type="text" id='a' placeholder="Currency Amount Field" />
          <select value={to} onChange={(e) => {
            setTo(e.target.value)
            document.getElementById('a').value = convert()

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