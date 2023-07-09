import { Box } from "@nimbleuikit/atoms";
import { ContentLoader } from "@nimbleuikit/atoms/utils";
import { Loader } from "@nimbleuikit/atoms/utils";

export default function Home() {
  return (
    <>
      Hello World
      {<Loader color="red" />}
      {<ContentLoader foregroundColor="pink" backgroundColor="lightpink" />}
    </>
  );
}
