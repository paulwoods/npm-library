import {styled} from "@mui/material/styles";
import {StatOwnerState} from "../../types.tsx";

export const StatUnit = styled('div', {
    name: 'MuiStat',
    slot: 'unit'
})<{ ownerState: StatOwnerState }>((({theme}) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary
})))

