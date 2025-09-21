import { Icon, Input } from "../../../../components";
import styled from "styled-components";

const SearchContainer = ({ className, searchPhrase, onChange }) => {
  return (
    <div className={className}>
      <Input value={searchPhrase} placeholder="Поиск по заголовкам..." onChange={onChange} />
      <Icon inactive={true} id="fa-search" size="22px" />
    </div>
  );
};

export const Search = styled(SearchContainer)`
  display: flex;
  position: relative;
  width: 340px;
  height: 40px;
  margin: 20px auto 0px;

  & > input {
    padding: 8px 36px 8px 8px;
  }

  & > div {
    position: absolute;
    right: 13px;
    top: 5px;
  }
`;
