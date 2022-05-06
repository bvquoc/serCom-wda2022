import React from "react";
import Image from "next/image";
import Link from "next/link";
import SingleLogo from "./SingleLogo";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="flex-nav-item">
        <SingleLogo />
        <div className="nav-item">
          <Link href="/faq" passHref>
            <a>FAQ</a>
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/donators" passHref>
            <a>Người ủng hộ</a>
          </Link>
        </div>
      </div>
      <div className="flex-nav-item">
        <div className="nav-item">
          <Link href="/login" passHref>
            <a className="login">Đăng nhập</a>
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/register" passHref>
            <a className="register">Đăng kí</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
