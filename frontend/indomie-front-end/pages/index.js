import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-4/5 flex flex-col justify-center items-center">
      <Head>
        <title>Indomie To Do</title>
        <meta
          name="description"
          content="Scheduling like never before"
        />
      </Head>

      <main className="h-full w-full flex flex-row justify-between items-center px-16">
        <div className="w-2/5">
          <h1 className="font-sans text-4xl antialiased font-bold	">
            Schedule your works like never before!
          </h1>
        </div>
        <div className="w-1/2 h-full relative">
          <Image
            src="/home.png"
            alt="Illustration"
            layout="fill"
            objectFit="contain"
            objectPosition={"right"}
          />
        </div>
      </main>
    </div>
  );
}
