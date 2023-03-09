import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { RadioContainer } from "./RadioContainer";

describe("RadioContainer", () => {
  const mockCategoriesResponse = [
    { id: 1, name: "News" },
    { id: 2, name: "Music" },
    { id: 3, name: "Sports" },
  ];

  const fakeFetchRadioCategories = jest.fn().mockImplementation(() => {
    console.log("we are here????");
    console.log(Promise.resolve(mockCategoriesResponse));

    return Promise.resolve(mockCategoriesResponse);
  });

  it("should get data from api and render them", async () => {
    fakeFetchRadioCategories.mockResolvedValue(mockCategoriesResponse);

    render(
      <RadioContainer fetchDefaultRadioCategories={fakeFetchRadioCategories} />
    );
    await waitFor(() => {
      console.log("Component rendered");
    });

    // const input = screen.getByTestId("form-control") 
    // fireEvent.click(input);
       const select = screen.getByTestId("select");
       fireEvent.click(select);

    // assert
    await waitFor(() => {
      // expect(screen.getByText("News")).toBeInTheDocument();
      // expect(screen.getByText("Music")).toBeInTheDocument();
      // expect(screen.getByText("Sports")).toBeInTheDocument();

      const CategoryItem = screen.getByTestId(1);
      expect(CategoryItem).toBeInTheDocument();
    });
  });
});
