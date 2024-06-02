import {styled} from "@mui/material/styles";
import {StatOwnerState} from "../../types.tsx";

export const StatRoot = styled('div', {
    name: 'MuiStat',
    slot: 'root'
})<{ ownerState: StatOwnerState }>(({theme, ownerState}) => ({
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(0.5),
        padding: theme.spacing(3, 4),
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
        letterSpacing: '-0.025em',
        fontWeight: 600,
        ...ownerState.variant === 'outlined' && {
            border: `2px solid ${theme.palette.divider}`
        }
    }
))



