import { useEffect, useReducer } from "react";

const changeState = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_ISPENDING":
      return { ...state, isPending: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
export function useFetch(url) {
  const [state, dispatch] = useReducer(changeState, {
    data: null,
    error: null,
    isPending: false,
  });

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: "SET_ISPENDING", payload: true });
      try {
        const request = await fetch(url);
        if (!request.ok) {
          throw new Error("Something went wrong :)");
        }
        const data = await request.json();
        dispatch({ type: "SET_DATA", payload: data });
        dispatch({ type: "SET_ISPENDING", payload: false });
        dispatch({ type: "SET_ERROR", payload: null });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
        dispatch({ type: "SET_ISPENDING", payload: false });
        console.log(error.message);
      }
    };
    getData();
  }, [url]);
  return { ...state };
}
