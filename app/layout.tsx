import type { Metadata } from 'next';
import { pretendard } from './fonts/pretendard';
import './globals.css';

export const metadata: Metadata = {
  title: 'Donto',
  description: '예산 관리 기반 체크리스트',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ko"
      className={pretendard.variable}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
