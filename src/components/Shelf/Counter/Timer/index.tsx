import "./styles.css";

interface TimeProps {
  title: string;
  value: string;
}

export function ComponentTime({ title, value }: TimeProps) {
  function formatWithLeadingZero(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }

  return (
    <div className="flex flex-col gap-y-1 md:gap-y-0.5 lg:gap-y-1">
      <span className="font-medium text-xs">{title}</span>
      <span className="font-bold text-lg lg:text-[32px] lg:leading-[30px] tracking-[1.28px] flex items-center">
        {formatWithLeadingZero(Number(value))}
      </span>
    </div>
  );
}
