import {HexIndex} from "../models/models";

export function hexGetLength(hex: HexIndex): number {
    if (hex.Q > 0 !== hex.R > 0) {
        return Math.max(Math.abs(hex.Q), Math.abs(hex.R));
    }
    return Math.abs(hex.Q + hex.R);
}

export function hexSubtract(lhs: HexIndex, rhs: HexIndex): HexIndex {
    return {
        Q: lhs.Q - rhs.Q,
        R: lhs.R - rhs.R
    }
}

export function hexDistance(h1: HexIndex, h2: HexIndex) {
    return hexGetLength(hexSubtract(h1, h2));
}

