interface Props {
  title: string;
  startDate: string;
  endDate: string;
  budget: number;
}

export default function ProjectCard({ title, startDate, endDate, budget }: Props) {
  return (
    <div className="flex flex-col gap-1 p-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md cursor-pointer">
      <h3 className="text-gray-900 font-semibold">{title}</h3>
      <h4 className="text-gray-600 text-sm">
        {startDate} ~ {endDate}
      </h4>
      <h5 className="text-gray-700 text-sm">{budget.toLocaleString()}원</h5>
    </div>
  );
}
