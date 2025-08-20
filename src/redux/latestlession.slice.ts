import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LatestlessonType {
  chapter: number;
  title: string;
  subject: string;
  topic: string[];
}

const initialState: LatestlessonType = {
  chapter: 2,
  title: "Math operation in Javascript",
  subject: "ComputerScience",
  topic: ["Arithemtics operations in JS", "String Vs Number"],
};

const latestLessonSlice = createSlice({
  name: "latestlesson",
  initialState,
  reducers: {
    //  Replace the entire lesson
    setLatestLesson(state, action: PayloadAction<LatestlessonType>) {
      return action.payload;
    },

    // Update specific fields (like title, subject, chapter, etc.)
    updateLessonField(
      state,
      action: PayloadAction<Partial<LatestlessonType>>
    ) {
      Object.assign(state, action.payload);
    },

    //  Add a new topic to the topic list
    addTopic(state, action: PayloadAction<string>) {
      state.topic.push(action.payload);
    },
  },
});

export const { setLatestLesson, updateLessonField, addTopic } =
  latestLessonSlice.actions;

export default latestLessonSlice.reducer;
