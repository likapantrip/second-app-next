import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h2>トップページ</h2>
      <p>Welcome to Second App</p>
      <br />
      <Link href="/create">新規作成画面へ</Link>
    </div>
  );
}
