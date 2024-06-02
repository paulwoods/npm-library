import {styled} from "@mui/material/styles";
import {StatOwnerState} from "../../types.tsx";

export const StatValue = styled('div', {
    name: 'MuiStat',
    slot: 'value'
})<{ ownerState: StatOwnerState }>((({theme}) => ({
    ...theme.typography.h3
})))

