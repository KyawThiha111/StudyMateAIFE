import { createSlice } from "@reduxjs/toolkit";

//Example Data Obj
const ComputerScience = [
    {chapter:1,title:"Introduction to Javacript",content:["Javascript Data Types","What is string in js?","What is number in js?"]},
    {chapter:2,title:"Math operation in Javascript",content:["Arithemtics operations in JS","String Vs Number"]}
]
const English = [
    {chapter:1,title:"Present Tenses",content:["Present Simple Tense","Present Continuous Tense","Present Perfect Tenses","Present Perfect Continuous Tense"]},
    {chapter:2,title:"Wh questions",content:["What questions","Why questions","Who and Whom questions"]}
]
interface LatestlessonType {
     chapter:number,
     title:string,
    subject:string,
    topic:string[]
}


const initialState:LatestlessonType = {
    chapter:2,
    title:"Math operation in Javascript",
    subject:"ComputerScience",
    topic:["Arithemtics operations in JS","String Vs Number"]
}

const latestLessonSlice = createSlice({
    name:"latestlesson",
    initialState,
    reducers:{

    }
})

export default latestLessonSlice.reducer;
