// noinspection JSUnusedGlobalSymbols

import React from "react";
import {useThemeProps} from "@mui/material";
import {StatProps} from "../../types.tsx";
import {StatRoot} from "../../main.ts";
import {StatValue} from "../../main.ts";
import {StatUnit} from "../../main.ts";

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(function Stat(inProps, ref) {
    const props = useThemeProps({props: inProps, name: 'MuiStat'})
    const {value, unit, variant, ...other} = props;

    const ownerState = {...props, variant}

    return (
        <StatRoot ref={ref} ownerState={ownerState} {...other}>
            <StatValue ownerState={ownerState}>{value}</StatValue>
            <StatUnit ownerState={ownerState}>{unit}</StatUnit>
        </StatRoot>
    )
})
