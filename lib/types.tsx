import {Theme as MuiTheme} from "@mui/material/styles/createTheme";
import {ComponentsOverrides, ComponentsVariants} from "@mui/material/styles";

export interface StatProps {
    value: string
    unit: string
    variant?: string
}

export interface StatOwnerState extends StatProps {
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
