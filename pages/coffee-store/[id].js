import { useRouter } from "next/router";
import Link from "next/link";
const CoffeeStore = () => {
  const Router = useRouter();
  return (<div>
    <Link href="/"><a>Back to Home</a></Link>
  </div>);
};

export default CoffeeStore;