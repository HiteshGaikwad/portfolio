'use client'
import { Provider } from "react-redux";
import Store from "./store";


export default function Providers({children}){
    return(
        <Provider store={Store}>
            {children}
        </Provider>
    )
}