
// + increases temperature
// - decreases temperature
// Reset to 20°C
// Show "Cold", "Normal", or "Hot"

import { useState } from "react";

const START_TEMP = 20;

function TemperaturePractice() {

  const [temperature, setTemperature] = useState(START_TEMP);

  function changeTemperature(value) {
    if (value === 0) {
      setTemperature(START_TEMP);
    } else if (value === -1) {
      setTemperature(temperature - 1);
    } else {
      setTemperature(temperature + 1);
    }
  }

  function Status() {
    if (temperature < 15) {
      return "Cold";
    } else if (temperature > 25) {
      return "Hot";
    } else {
      return "Normal";
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-amber-100 to-orange-200 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h1 className="text-2xl font-bold text-gray-800">Temperature Practice</h1>

        <div className="mt-6 text-center">
          <p className="text-5xl font-extrabold text-orange-700">{temperature}°C</p>

          <p className="text-xl font-semibold text-gray-700">
            {Status()}
          </p>

        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button onClick = {() => changeTemperature(-1) }
            className="rounded-lg bg-sky-600 px-5 py-2 text-xl font-bold text-white transition hover:bg-sky-700"
          >
            -
          </button>

          <button onClick = {() => changeTemperature(0) }
            className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
          >
            Reset to 20°C
          </button>

          <button onClick = {() => changeTemperature("1") }
            className="rounded-lg bg-rose-600 px-5 py-2 text-xl font-bold text-white transition hover:bg-rose-700"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default TemperaturePractice;