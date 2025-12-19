export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-1 p-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md cursor-pointer">
      <h3 className="text-gray-900 font-semibold">프로젝트 타이틀</h3>
      <h4 className="text-gray-600 text-sm">날짜</h4>
      <h5 className="text-gray-700 text-sm">예산</h5>
    </div>
  );
}
