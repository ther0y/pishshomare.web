import React, { FC } from "react";
import Head from "next/head";

interface AppHeadProps {
  title?: string;
}

const AppHead: FC<AppHeadProps> = ({ title = "جستجوی اطلاعات تماس" }) => {
  return (
    <Head>
      <title>پیش شماره | {title}</title>
      <meta
        name="description"
        content="پیش شماره: سرویس جستجوی سریع اطلاعات تماس‌، کد استان‌ها، کد شهرها، شماره‌ی اپراتورهای موبایل، پیش‌ شماره‌ی کشورها و شماره تلفن سفارت ها."
      />
    </Head>
  );
};

export default AppHead;
