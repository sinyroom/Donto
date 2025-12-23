import { cn } from '@/lib/cn';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  budget: number;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ProjectCard({ id, title, startDate, endDate, budget, onEdit, onDelete }: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((v) => !v);
  };

  const handleEdit = () => {
    onEdit(id);
    setOpen(false);
  };

  const handleDelete = () => {
    onDelete(id);
    setOpen(false);
  };

  return (
    <div className="relative flex items-start justify-between p-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md cursor-pointer">
      <div className="flex flex-col gap-1">
        <h3 className="text-gray-900 font-semibold">{title}</h3>
        <h4 className="text-gray-600 text-sm">
          {startDate} ~ {endDate}
        </h4>
        <h5 className="text-gray-700 text-sm">{budget.toLocaleString()}원</h5>
      </div>
      <div onClick={handleClick}>
        <Image
          src="/images/icons/MoreIcon.svg"
          alt="편집"
          width={20}
          height={20}
        />
      </div>

      {open && (
        <div className="absolute right-6 top-10 flex flex-col gap-2 border border-gray-300 bg-white rounded-lg z-10 shadow-lg">
          <button
            type="button"
            className="text-gray-700 px-3 py-2 border-b border-gray-300"
            aria-label="수정하기"
            onClick={handleEdit}
          >
            수정하기
          </button>
          <button
            type="button"
            className="text-gray-700 px-3 pb-2"
            aria-label="삭제하기"
            onClick={handleDelete}
          >
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
}
