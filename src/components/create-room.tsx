import Image from "next/image";

export function CreateRoom() {
  return (
    <div className="flex items-center justify-center w-48 h-48 border rounded-full cursor-pointer">
      <Image
        src="/images/romantic.jpg"
        alt="image-1"
        width={200}
        height={200}
        className="object-contain rounded-full opacity-5"
      />
    </div>
  );
}
