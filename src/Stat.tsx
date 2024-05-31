// noinspection JSUnusedGlobalSymbols

import {ComponentsOverrides, ComponentsVariants, styled, Theme as MuiTheme} from "@mui/material/styles";
import React from "react";
import {useThemeProps} from "@mui/material";

interface StatProps {
    value: string
    unit: string
    variant?: string
}

interface StatOwnerState extends StatProps {
}

type Theme = Omit<MuiTheme, 'components'>;

declare module '@mui/material/styles' {
    interface ComponentNameToClassKey {
        MuiStat: 'root' | 'value' | 'unit';
    }

    interface ComponentsPropsList {
        MuiStat: Partial<StatProps>;
    }

    interface Components {
        MuiStat?: {
            defaultProps?: ComponentsPropsList['MuiStat'];
            styleOverrides?: ComponentsOverrides<Theme>['MuiStat'];
            variants?: ComponentsVariants['MuiStat'];
        };
    }
}

const StatRoot = styled('div', {
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
}))

const StatValue = styled('div', {
    name: 'MuiStat',
    slot: 'value'
})<{ ownerState: StatOwnerState }>((({theme}) => ({
    ...theme.typography.h3
})))

const StatUnit = styled('div', {
    name: 'MuiStat',
    slot: 'unit'
})<{ ownerState: StatOwnerState }>((({theme}) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary
})))

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
