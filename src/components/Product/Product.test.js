import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Product from "./Product";
import { StateContext } from "../../context/StateContext";

// Mock fetchProductDetail function
jest.mock("./Product", () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

describe("Product Component", () => {
  beforeEach(() => {
    // Mock the fetchProductDetail function

    const { container } = render(
      <StateContext>
        <Product />
      </StateContext>
    );
    console.log(container.innerHTML)
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("displays warning if not all details are selected before adding to cart", () => {
    render(
      <StateContext>
        <Product />
      </StateContext>
    );

    // Find the ADD TO CART button and click it
    const addToCartButton = screen.getByRole("button", { name: "ADD TO CART" });
    fireEvent.click(addToCartButton);

    // ... Your assertions for displaying the warning message ...
  });

  it("renders without crashing", () => {
    render(
      <StateContext>
        <Product />
      </StateContext>
    );

    const { container } = render(
      <StateContext>
        <Product />
      </StateContext>
    );

    console.log(container.innerHTML);

    const productComponent = screen.getByTestId("mock-product");
    expect(productComponent).toBeInTheDocument();
  });

  it("displays warning if not all details are selected before adding to cart", () => {
    render(
      <StateContext>
        <Product />
      </StateContext>
    );

    // Find the ADD TO CART button and click it
    const addToCartButton = screen.getByRole("button", { name: "ADD TO CART" });
    console.log(addToCartButton);
    fireEvent.click(addToCartButton);

    // Find the warning message
    const warningMessage = screen.getByText("Please select all detail.");
    expect(warningMessage).toBeInTheDocument();
  });

  it("adds product to cart when all details are selected and 'ADD TO CART' is clicked", () => {
    render(
      <StateContext>
        <Product />
      </StateContext>
    );

    // Mock the product data returned from fetchProductDetail
    const mockProduct = {
      title: "Mock Product",
      price: 10.99,
      description: "This is a mock product.",
      sizeOptions: [
        { id: 1, label: "S" },
        { id: 2, label: "M" },
      ],
      imageURL: "https://example.com/mock-product.jpg",
    };

    // Set the product data in the mock fetchProductDetail implementation
    Product.mockImplementation(() => (
      <div data-testid="mock-product">Mock Product Component</div>
    ));
    Product.mock.calls[0][0].fetchProductDetail = async () => mockProduct;

    // Find the size button and click it to select a size
    const sizeButton = screen.getByText("S");
    fireEvent.click(sizeButton);

    // Find the quantity input and set the quantity
    const quantityInput = screen.getByLabelText("Quantity");
    fireEvent.change(quantityInput, { target: { value: "3" } });

    // Find the ADD TO CART button and click it
    const addToCartButton = screen.getByText("ADD TO CART");
    fireEvent.click(addToCartButton);

    // Ensure the product is added to the cart with the correct details
    const cart = screen.getByTestId("cart"); // Assuming there's a "cart" element in the cart component
    console.log(cart);
    expect(cart).toHaveTextContent("Mock Product");
    expect(cart).toHaveTextContent("Size: S");
    expect(cart).toHaveTextContent("Quantity: 3");
  });
});
