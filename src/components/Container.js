import Head from "next/head";
import CustomCursor from "./CustomCursor";

export default function Container({ children }) {
  return (
    <div>
      <Head>
        <title>Ahmad Muslih Zain</title>
        <meta
          name="description"
          content="Ahmad Muslih Zain's personal website"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <CustomCursor />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
