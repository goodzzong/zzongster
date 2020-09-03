import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Signup = () => {
  return (
    <>
      <Head>
        <title>회원가입 | Zzongster</title>
      </Head>
      <AppLayout>
        <div>Hello, signup!</div>
      </AppLayout>
    </>
  );
};

export default Signup;
