import { Button } from "../../../../components";
import styled from "styled-components";

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
  return (
    <div className={className}>
      <Button disabled={page === 1} onClick={() => setPage(1)}>
        В начало
      </Button>
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Предыдущая
      </Button>
      <div className="current-page">Страница: {page}</div>
      <Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
        Следующая
      </Button>
      <Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
        В конец
      </Button>
    </div>
  );
};

export const Pagination = styled(PaginationContainer)`
  display: flex;
  justify-content: center;
  position: absolute;
  margin: 0 0 10px;
  padding: 0 25px;
  bottom: 140px;
  width: 100%;

  & button {
    margin: 0 5px;
  }

  & .current-page {
    width: 100%;
    height: 32px;
    margin: 0px 5px;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    border: 1px solid #000;
  }
`;
