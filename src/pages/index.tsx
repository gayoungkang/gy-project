import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();
  const [root, setRoot] = useState("/home");

  useEffect(() => {
    if (router.pathname === "/" && root !== "/") {
      router.push(root);
    }
  }, [router.pathname, root]);

  return null;
};

export default IndexPage;
