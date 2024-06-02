import React from "react";
import {useTheme, useThemeProps} from "@mui/material";
import {StatProps} from "../../types.tsx";
import {StatRoot, StatUnit, StatValue} from "../../main.ts";

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(function Stat(inProps, ref) {

    const props = useThemeProps({props: inProps, name: 'MuiStat'})
    const {value, unit, variant, ...other} = props;
    const ownerState = {...props, variant}

    const theme = useTheme();

    return (
        <StatRoot ref={ref} ownerState={ownerState} {...other}>
            <StatValue ownerState={ownerState}>library: {theme.palette.mode} mode</StatValue>
            <StatValue ownerState={ownerState}>{value}</StatValue>
            <StatUnit ownerState={ownerState}>{unit}</StatUnit>
        </StatRoot>
    )
})
