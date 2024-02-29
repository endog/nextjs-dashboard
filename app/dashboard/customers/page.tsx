import { testFunction } from "./action";
import TestClientComponent from "./page.client";
import { testClass } from "./testClass";

export default function Page() {
  console.log("チェックログ");
  const cl = new testClass();
  cl.getLog();
  console.log("cl", cl);
  return (
    <>
      <p>Customers Page(このページはNextの動きを確かめるために使って見る)</p>
      <p>{cl.getTest()}</p>
      <p>{testFunction()}</p>
      <TestClientComponent />
    </>
  );
}
