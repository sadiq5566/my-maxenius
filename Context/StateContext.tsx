import { createContext } from "react";
import { ContextInterface } from "../Interfaces/ContextInterface";

const StateContext = createContext<ContextInterface>({});
export default StateContext;
