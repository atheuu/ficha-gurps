import Image from "next/image";

export default function Page() {
  return (
    <div className="flex items-center justify-center m-4">
      <div className="bg-white w-full max-w-[210mm] aspect-[210/297] py-14 px-8">
        <Image
          src="/gurps-logo.png"
          alt="Logo do GURPS"
          width={200}
          height={100}
        />
      </div>
    </div>
  );
}
