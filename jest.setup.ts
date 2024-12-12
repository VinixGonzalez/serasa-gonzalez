import "@testing-library/jest-dom";

if (typeof global.structuredClone === "undefined") {
  global.structuredClone = (value: unknown) =>
    JSON.parse(JSON.stringify(value));
}
