import { ContentLoader } from "@nimbleuikit/atoms/build/utils";
import { Loader } from "@nimbleuikit/atoms/build/utils/Loader";

export default function Home() {
  return (
    <>
      Hello World
      {<Loader color="red" />}
      {<ContentLoader foregroundColor="pink" backgroundColor="lightpink" />}
    </>
  );
}
