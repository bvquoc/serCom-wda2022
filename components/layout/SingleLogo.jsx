import Link from "next/link";
import Image from "next/image";

const SingleLogo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <a>
          <Image
            alt="serCom Logo"
            width="512"
            height="512"
            objectFit="contain"
            src="/icon-512x512.png"
            priority
          />
        </a>
      </Link>
    </div>
  );
};

export default SingleLogo;
