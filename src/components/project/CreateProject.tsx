'use client';

import { useState } from 'react';
import BottomSheet from '../ui/BottomSheet';
import Image from 'next/image';
import Button from '../ui/Button';

export default function CreateProject() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="px-2.5 py-1.5 text-sm hover:bg-orange-600"
      >
        새 이벤트
      </Button>
      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
      >
        <form className="flex flex-col gap-10 px-2.5 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">새 이벤트 생성</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
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
              />
            </div>
          </div>
          <Button className="h-10">생성하기</Button>
        </form>
      </BottomSheet>
    </>
  );
}
