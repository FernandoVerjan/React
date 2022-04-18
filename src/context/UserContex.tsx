import { createContext } from "react";

const UserContext = createContext({
    name: {
        title: '',
        first: '',
        last: '',
    },
    picture: {
        large:'',
        medium:'',
        thumbnail:'',
    }
});

export default  UserContext;