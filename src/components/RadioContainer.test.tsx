import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { RadioContainer } from "./RadioContainer";

describe("RadioContainer", () => {
  it("should get categories data from api and render them", async () => {
    const mockCategoriesResponse = [
      { id: 1, name: "News" },
      { id: 2, name: "Music" },
      { id: 3, name: "Sports" },
    ];

    const fakeFetchRadioCategories = jest.fn().mockImplementation(() => {
      return Promise.resolve(mockCategoriesResponse);
    });

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

  it("should get programs data from api and render them after category is selected ", async () => {
    // prepare
    // get categories data (mock api request to get categories)
    // render categoris select

    // act
    // click on category
    // get programs data (mock api request to get programs)

    // assert
    // check rendering program items

    // prepare
    const mockCategoriesResponse = [
      { id: 1, name: "News" },
      { id: 2, name: "Music" },
      { id: 3, name: "Sports" },
    ];

    const fakeFetchRadioCategories = jest.fn().mockImplementation(() => {
      return Promise.resolve(mockCategoriesResponse);
    });

    fakeFetchRadioCategories.mockResolvedValue(mockCategoriesResponse);

    const mockProgramsResponse = {
      copyright: "Copyright Sveriges Radio 2023. All rights reserved.",
      programs: [
        {
          name: "Daily news",
          description: "Economy daily news for you",
          programimage: "./img1",
          programurl: "./url1",
        },
        {
          name: "Music news",
          description: "Enjoy classical music",
          programimage: "./img2",
          programurl: "./ur2l",
        },
      ],
    };

    const fakeFetchRadioPrograms = jest.fn().mockImplementation(() => {
      return Promise.resolve(mockProgramsResponse);
    });

    fakeFetchRadioPrograms.mockResolvedValue(mockProgramsResponse);

    render(
      <RadioContainer
        fetchDefaultRadioCategories={fakeFetchRadioCategories}
        fetchDefaultRadioPrograms={fakeFetchRadioPrograms}
      />
    );

    const trigger = screen.getByRole("button");
    act(() => {
      trigger.focus();
    });
    fireEvent.keyDown(trigger, { key: "ArrowDown" });

    await waitFor(() => {
      const CategoryItem = screen.getByTestId("menu-item-News");
      expect(CategoryItem).toBeInTheDocument();
    });

    const selectedItem = screen.getByTestId("menu-item-News");
    act(() => {
      fireEvent.click(selectedItem);
    });

    await waitFor(() => {
      const ProgramItem = screen.getByTestId("program-item-0");
      expect(ProgramItem).toBeInTheDocument();
    });
  });
});
