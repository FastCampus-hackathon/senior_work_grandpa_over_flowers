import { GetJobDataFetcher } from "../hooks/DataFetcher";
import Main from "./Main";
import SearchResult from "./SearchResult";

export default function SearchContainer() {
  const [data] = GetJobDataFetcher();
  return (
    <>
      <Main data={data} />
      <SearchResult />
    </>
  );
}
