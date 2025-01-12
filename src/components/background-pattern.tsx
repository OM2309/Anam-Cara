import GridPattern from "./ui/grid-pattern";

export function BackgroundPattern() {
  return (
    <GridPattern
      width={20}
      height={20}
      x={-1}
      y={-1}
      className={
        "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
      }
    />
  );
}
