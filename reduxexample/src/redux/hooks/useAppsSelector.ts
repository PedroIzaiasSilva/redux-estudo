import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RooState} from "../store";

export const useAppSelector: TypedUseSelectorHook<RooState> = useSelector;