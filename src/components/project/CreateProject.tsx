'use client';

import { useEffect, useState } from 'react';
import BottomSheet from '../ui/BottomSheet';
import Image from 'next/image';
import Button from '../ui/Button';
import { createEvent, updateEvent } from '@/services/events';
import { ProjectEvent } from '@/types/event';

interface Props {
  open: boolean;
  initialData?: ProjectEvent | null;
  onClose: () => void;
  onCreated: () => void;
}

export default function CreateProject({ open, initialData, onClose, onCreated }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', start_date: '', end_date: '', total_budget: '' });
  const isEdit = Boolean(initialData);

  useEffect(() => {
    if (!initialData) return;

    setForm({
      name: initialData.name,
      start_date: initialData.start_date,
      end_date: initialData.end_date,
      total_budget: String(initialData.total_budget),
    });
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const payload = {
      name: form.name,
      start_date: form.start_date,
      end_date: form.end_date,
      total_budget: Number(form.total_budget),
    };

    try {
      if (isEdit && initialData) {
        await updateEvent(initialData.id, payload);
      } else {
        await createEvent(payload);
      }

      onClose();
      onCreated();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <BottomSheet
        open={open}
        onClose={onClose}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 px-2.5 py-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">새 이벤트 생성</h2>
            <button
              type="button"
              onClick={onClose}
            >
              <Image
                src="/images/icons/deleteIcon.svg"
                alt="닫기"
                width={30}
                height={30}
              />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="title">이름</label>
              <input
                id="title"
                name="title"
                required
                placeholder="새 이벤트의 이름을 적어주세요."
                className="border-b border-gray-300 p-1"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="flex items-center gap-5">
              <div className="flex-1">
                <label
                  htmlFor="startDate"
                  className="mr-2"
                >
                  시작일
                </label>
                <input
                  id="startDate"
                  name="startDate"
                  type="date"
                  required
                  className="w-full border-b border-gray-300 p-1"
                  value={form.start_date}
                  onChange={(e) => setForm({ ...form, start_date: e.target.value })}
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="endDate"
                  className="mr-2"
                >
                  종료일
                </label>
                <input
                  id="endDate"
                  name="endDate"
                  type="date"
                  required
                  className="w-full border-b border-gray-300 p-1"
                  value={form.end_date}
                  onChange={(e) => setForm({ ...form, end_date: e.target.value })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="budget">예산</label>
              <input
                id="budget"
                name="budget"
                type="number"
                required
                placeholder="전체 예산을 적어주세요."
                className="border-b border-gray-300 p-1"
                value={form.total_budget}
                onChange={(e) => setForm({ ...form, total_budget: e.target.value })}
              />
            </div>
          </div>
          <Button
            className="h-10"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? '생성 중...' : '생성하기'}
          </Button>
        </form>
      </BottomSheet>
    </>
  );
}
