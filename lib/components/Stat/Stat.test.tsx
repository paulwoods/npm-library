import renderer from 'react-test-renderer'
import {describe, expect, it} from "vitest";
import {Stat} from "./Stat.tsx";

describe('Stat component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<Stat unit="units" value="123"/>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})