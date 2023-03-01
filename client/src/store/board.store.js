import { create } from "zustand";
import { persist } from "zustand/middleware";
import BoardService from "../services/board.service";

export const useBoardStore = create(
  persist(
    (set, get) => ({
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

      create: async (data) => {
        set(() => ({ loading: true }));

        try {
          await BoardService.addBoard(data.id, data.name).then((res) => {
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

      delete: async (id) => {
        set(() => ({ loading: true }));

        try {
          await BoardService.deleteBoard(id);
          set(() => ({
            data: get().data.filter((board) => board.id !== id),
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
