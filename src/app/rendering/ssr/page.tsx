import Image from "next/image";
export const dynamic = "force-dynamic"; // SSR強制

export default async function SsrPage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-store",
  });
  const responseJson = await response.json();
  const image = responseJson.message;
  const timestamp = new Date().toISOString();
  return (
    <div>
      SSR 毎回リロード: {timestamp}
      <Image src={image} width={400} alt="" />
    </div>
  );
}
