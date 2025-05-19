"use client";

import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();

  console.log(params);
  return <div>page</div>;
};

export default page;
