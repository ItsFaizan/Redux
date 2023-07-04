import React from "react";
import { useDispatch } from "react-redux";
import { setCount } from "../redux/slices/countSlice";

export default function Input() {
   const dispatch = useDispatch();
    return (
        <div>
            <input type="number" placeholder="Enter a number" onChange={(e) => dispatch(setCount(e.target.value))} />
        </div>  
    );
}