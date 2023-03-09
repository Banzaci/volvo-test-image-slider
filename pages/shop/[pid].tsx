import React from "react";
import { useRouter } from "next/router";

const Learn = () => {
  const router = useRouter();
  const { pid } = router.query;
  return <p>Shop: {pid}</p>;
}

export default Learn;
