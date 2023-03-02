import { ProgramData } from "./ProgramsList";

interface RadioItemProps {
  item: ProgramData;
}

export function RadioItem({ item }: RadioItemProps) {
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <img src={item.programimage} />
    </div>
  );
}
