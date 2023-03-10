import {
  render,
  waitFor,
  screen,
  fireEvent,
  act,
} from "@testing-library/react";
import { CategoriesSelect } from "./CategoriesSelect";

describe(" CategoriesSelect", () => {
  it("should call hendleOnchange after selecting category", async () => {
    const handleOnchange = jest.fn();

    render(
      <CategoriesSelect
        handleOnchange={handleOnchange}
        selectedOption={""}
        genereteId={() => (Math.random() * 10).toString()}
        categoryList={[
          { id: 1, name: "News" },
          { id: 2, name: "Music" },
          { id: 3, name: "Sports" },
        ]}
      />
    );

    const trigger = screen.getByRole("button");
    act(() => {
      trigger.focus();
    });
    fireEvent.keyDown(trigger, { key: "ArrowDown" });

    const selectedItem = screen.getByTestId("menu-item-News");
    act(() => {
      fireEvent.click(selectedItem);
    });

    await waitFor(() => {
      expect(selectedItem).toBeInTheDocument();

      expect(handleOnchange).toHaveBeenCalled();
    });
  });
});
