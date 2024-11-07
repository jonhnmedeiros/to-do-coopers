import { ChangeEvent, Dispatch, SetStateAction } from "react";

const TodoSearchbar = (props: {
  queryString: string;
  setQueryString: Dispatch<SetStateAction<string>>;
}) => {
  const { queryString, setQueryString } = props;
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryString(e.target.value);
    props.setQueryString(e.target.value);
  };
  return (
    <>
      <input
        className="rounded-md border-slate-200 border-2 pl-3"
        type="text"
        value={queryString}
        onChange={(e) => searchHandler(e)}
      ></input>
    </>
  );
};

export default TodoSearchbar;
