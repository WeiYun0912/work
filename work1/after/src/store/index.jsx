import { create } from "zustand";

const useCourseRecords = create((set) => ({
  textVisible: false,
  setTextVisible: () => set({ textVisible: true }),
  setTextInvisible: () => set({ textVisible: false }),
}));

export const setTextVisible = () => {
  useCourseRecords.getState().setTextVisible();
};

export const setTextInvisible = () => {
  useCourseRecords.getState().setTextInvisible();
};

export const useTextVisible = () => {
  return useCourseRecords((state) => state.textVisible);
};
