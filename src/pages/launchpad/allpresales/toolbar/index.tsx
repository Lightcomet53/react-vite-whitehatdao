import ListBtnGroup from "./ListBtnGroup";
import SearchInput from "./SearchInput";
import Categories from "./Catgories";

interface PropsType {
  style: string;
  setStyle: (value: string) => void,
  tab: string;
  setTab: string;
}

const Toolbar: React.FC<PropsType> = ({ style, setStyle, tab, setTab }) => {
  return (
    <div className="flex justify-between items-center my-4">
      <div className="flex items-center">
        <ListBtnGroup style={style} setStyle={setStyle} />
        <div className="ml-4 w-[300px]">
          <SearchInput />
        </div>
      </div>
      <Categories tab={tab} setTab={setTab} />
    </div>
  )
}
export default Toolbar;