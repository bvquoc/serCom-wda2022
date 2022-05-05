import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>serCom</h1>
      <Link href="/login">
        <button>Login</button>
      </Link>
      <Link href="/register">
        <button>Register</button>
      </Link>
    </>
  );
}
