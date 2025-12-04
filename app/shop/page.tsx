import ArchivePage from "../components/sections/ArchivePage";
import { fetchSize } from "../lib/data";

export default async function Page() {
  const size = await fetchSize();
  return (
    <>
      <ArchivePage size={size} />
    </>
  );
}
