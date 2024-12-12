import { atom, selector } from "recoil";

export const todoAtom = atom({
    key:'todoAtom',
    default:[],
})

export const filterAtom = atom({
    key:"filter",
    default:""
})

export const filteredTodoSelector = selector({
    key:"fiterTodo",
    get:({get}) =>{
        const todos = get(todoAtom);
        const filter = get(filterAtom);

        return todos.filter(x => x.title.includes(filter) || x.des.includes("filter"));

    }
})