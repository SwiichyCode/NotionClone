import { create } from "zustand";
import { persist } from "zustand/middleware";
import BoardService from "../views/dashboard/services/board.service";

type Board = {
  id?: string;
  name?: string;
  emoji?: string;
  owner?: string;
};

type BoardStore = {
  data: Board[];
  loading: boolean;
  hasErrors: boolean;
  fetch: () => Promise<void>;
  create: (data: Board) => Promise<void>;
  delete: (id: string) => Promise<void>;
};

export const useBoardStore = create<BoardStore>()(
  persist(
    (set: any, get) => ({
      data: [],
      loading: false,
      hasErrors: false,

      fetch: async () => {
        set(() => ({ loading: true }));

        try {
          const response = await BoardService.getBoards();
          set(() => ({ data: response.data, loading: false }));
        } catch (error) {
          set(() => ({ hasErrors: true, loading: false }));
        }
      },

      create: async (data: any) => {
        set(() => ({ loading: true }));

        try {
          await BoardService.addBoard(data).then((res) => {
            if (res) {
              BoardService.getBoards().then((res) => {
                if (res) {
                  set(() => ({ data: res.data, loading: false }));
                } else {
                  set(() => ({
                    hasErrors: true,
                    loading: false,
                  }));
                }
              });
            }
          });
        } catch (error) {
          set(() => ({ hasErrors: true, loading: false }));
        }
      },

      delete: async (id: any) => {
        set(() => ({ loading: true }));

        try {
          await BoardService.deleteBoard(id);
          set(() => ({
            data: get().data.filter((board: any) => board.id !== id),
            loading: false,
          }));
        } catch (error) {
          set(() => ({ hasErrors: true, loading: false }));
        }
      },
    }),
    {
      name: "board",
      getStorage: () => localStorage,
    }
  )
);
