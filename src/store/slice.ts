import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IState {
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    email_address: string,
    address: string,
    currentPage: number,
    isDone?: boolean,
}

const initialState:IState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email_address: '',
    address: '',
    currentPage: 1,
    isDone: false
}

export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        nextPage: (state) => {
            state.currentPage += 1
        },
        prevPage: (state) => {
            state.currentPage -= 1
        },
        setFirstName: (state, payload:PayloadAction<string>) => {
            state.firstName = payload.payload
        },
        setLastName: (state, payload:PayloadAction<string>) => {
            state.lastName = payload.payload
        },
        setDateOfBirth: (state, payload:PayloadAction<string>) => {
            state.dateOfBirth = payload.payload
        },
        setEmailAddress: (state, payload:PayloadAction<string>) => {
            state.email_address = payload.payload
        },
        setAddress: (state, payload:PayloadAction<string>) => {
            state.address = payload.payload
        },
        setDoneOrNot: (state) => {
            state.isDone = true
        }
    }
})

export const {nextPage, prevPage, setFirstName, setLastName, 
            setDateOfBirth, setEmailAddress, setAddress, setDoneOrNot} = slice.actions

export default slice.reducer