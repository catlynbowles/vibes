import React from "react";
import Image from "next/image";

export default function Monster() {
  const src = "https://i.stack.imgur.com/SBv4T.gif";
  return <Image loader={() => src} src={src} height="30" width={50} alt="" />;
}
