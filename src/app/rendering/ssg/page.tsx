import Image from "next/image";

export default async function SsgPage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const responseJson = await response.json();
  const image = responseJson.message;
  const timestamp = new Date().toISOString();
  return (
    <div>
      SSG ビルド時に生成され固定: {timestamp}
      <Image src={image} width={400} alt="" />
    </div>
  );
}
