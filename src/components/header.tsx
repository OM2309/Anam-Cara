import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <div className="flex justify-between items-center  py-8 ">
      <p className="italic cursive text-lg font-bold">
        Anam <span className="text-[#CBA35C]">Cara</span>
      </p>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
