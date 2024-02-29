"use client";

import { testOnClickFunction } from "./action";

export default function TestClientComponent() {
  return (
    <div>
      <p>test111</p>
      <input
        type="button"
        onClick={async () => {
          await testOnClickFunction();
        }}
        value="ここをクリック"
        className="bg-blue-500"
      />
    </div>
  );
}
