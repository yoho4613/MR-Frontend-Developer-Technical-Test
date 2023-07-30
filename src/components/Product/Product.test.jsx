import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";
import Product from "./Product";
import { addCart } from "../../redux/slices/cart";

import configureStore from "redux-mock-store";

const initialState = {
  id: 1,
  name: "Classic Tee",
  price: 75,
  quantity: 2,
  size: "L",
};

const mockStore = configureStore();
const cartStore = mockStore(initialState);

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: 1,
        title: "Sample Product",
        price: 19.99,
        description: "This is a sample product.",
        imageURL: "https://example.com/sample.jpg",
        sizeOptions: [
          { id: 1, label: "S" },
          { id: 2, label: "M" },
        ],
      }),
  })
);

let store;

beforeEach(() => {
  // Initialize the store with any initial state needed
  store = cartStore;
});

// Mock the redux action
jest.mock("../../redux/slices/cart", () => ({
  addCart: jest.fn(),
}));

describe("Product Component", () => {
  afterEach(() => {
    // Clear any mock functions
    jest.clearAllMocks();
  });

  it("should render without crashing", async () => {
    await act(async () =>
      render(
        <Provider store={store}>
          <Product />
        </Provider>
      )
    );

    // Wait for the product data to be fetched and component to render
    const titleElement = await screen.findByText("Sample Product");
    const priceElement = screen.getByText("$19.99");
    const descriptionElement = screen.getByText("This is a sample product.");

    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it("should update input size when a size button is clicked", async () => {
    render(
      <Provider store={store}>
        <Product />
      </Provider>
    );

    // Wait for the product data to be fetched and component to render
    const sizeButton = await screen.findByText("S");
    fireEvent.click(sizeButton);

    // Check if the input size is updated accordingly
    const selectedSize = screen.getByText("SIZE* S");
    expect(selectedSize).toBeInTheDocument();
  });

  it("should update input quantity when the quantity input changes", async () => {
    render(
      <Provider store={store}>
        <Product />
      </Provider>
    );

    // Wait for the product data to be fetched and component to render
    const quantityInput = await screen.findByRole("spinbutton");
    fireEvent.change(quantityInput, { target: { value: "3" } });

    // Check if the input quantity is updated accordingly
    expect(quantityInput.value).toBe("3");
  });

  it("should display a warning when adding to cart without selecting all details", async () => {
    render(
      <Provider store={store}>
        <Product />
      </Provider>
    );

    // Wait for the product data to be fetched and component to render
    const addToCartButton = await screen.findByText("ADD TO CART");
    fireEvent.click(addToCartButton);

    // Check if the warning is displayed
    const warningElement = screen.getByText("Please select all detail.");
    expect(warningElement).toBeInTheDocument();
  });

  it("should call the addCart action when adding to cart with all details", async () => {
    render(
      <Provider store={store}>
        <Product />
      </Provider>
    );

    // Wait for the product data to be fetched and component to render
    const sizeButton = await screen.findByText("S");
    fireEvent.click(sizeButton);

    const quantityInput = screen.getByRole("spinbutton");
    fireEvent.change(quantityInput, { target: { value: "3" } });

    const addToCartButton = screen.getByText("ADD TO CART");
    fireEvent.click(addToCartButton);

    // Check if the addCart action is called with the correct input
    expect(addCart).toHaveBeenCalledTimes(1);
    expect(addCart).toHaveBeenCalledWith({
      id: 1,
      title: "Sample Product",
      price: 19.99,
      imageURL: "https://example.com/sample.jpg",
      quantity: "3",
      size: "S",
    });
  });
});
