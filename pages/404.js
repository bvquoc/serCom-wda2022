import Link from "next/link";
import Head from "next/head";
export default function Custom404() {
  return (
    <>
      <Head>
        <title>Không tìm thấy trang</title>
      </Head>
      <div className="custom404">
        <h1>Oooops... Không tìm thấy trang</h1>
        <Link href="/" passHref>
          <a>
            <h3>Trở về trang chính</h3>
          </a>
        </Link>
      </div>
    </>
  );
}