import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { RadioContainer } from "./RadioContainer";

describe("RadioContainer", () => {
  const mockCategoriesResponse = [
    { id: 1, name: "News" },
    { id: 2, name: "Music" },
    { id: 3, name: "Sports" },
  ];

  const fakeFetchRadioCategories = jest.fn().mockImplementation(() => {
    return Promise.resolve(mockCategoriesResponse);
  });

  it("should get data from api and render them", async () => {
    fakeFetchRadioCategories.mockResolvedValue(mockCategoriesResponse);

    render(
      <RadioContainer fetchDefaultRadioCategories={fakeFetchRadioCategories} />
    );
  
    const trigger = screen.getByRole("button");
    act(() => {
      trigger.focus();
    });
    fireEvent.keyDown(trigger, { key: "ArrowDown" });

    // assert
    await waitFor(() => {
      const CategoryItem = screen.getByTestId("menu-item-News");
      expect(CategoryItem).toBeInTheDocument();
    });
  });
});
