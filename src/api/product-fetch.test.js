import { fetchProduct } from "./product";

const initialState = {
  id: 1,
  name: "Classic Tee",
  price: 75,
  quantity: 2,
  size: "L",
};

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(initialState)
}))

it("get data from api", async () => {
  const result = await fetchProduct()

  expect(result.id).toBe(1)
  expect(result.name).toBe("Classic Tee")
  expect(result.price).toBe(75)
  expect(result.quantity).toBe(2)
  expect(result.size).toBe("L")
})

