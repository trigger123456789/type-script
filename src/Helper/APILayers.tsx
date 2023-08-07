
import { IBoard } from "../Interfaces/Interface";
import { ApiMockResponse } from "../ApiMockData/Data";

const LocalStorageKeyName = "tarun-boards";

export function fetchBoardList(): Promise<IBoard[]> {
  return new Promise((resolve) => {
    const localStorageData = JSON.parse(
      localStorage.getItem(LocalStorageKeyName) || "[]"
    );
    const BoardList: IBoard[] = localStorageData.length
      ? localStorageData
      : ApiMockResponse;
    resolve(BoardList);
  });
}

export function updateLocalStorageBoards(boards: IBoard[]) {
  localStorage.setItem(LocalStorageKeyName, JSON.stringify(boards));
}
