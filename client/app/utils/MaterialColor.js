"use strict";

import MaterialPalette from './MaterialPalette'

class MaterialColor {
	constructor(value) {
		this.color = value;
		this.ligth = this.getLigth(value);
		this.dark = this.getDark(value);
	}

	getLigth(value) {
		if (MaterialPalette[value]) {
			return MaterialPalette[value].ligth;
		} else {
			return value;
		}
	}

	getDark(value) {
		if (MaterialPalette[value]) {
			return MaterialPalette[value].dark;
		} else {
			return value;
		}
	}
}

export default MaterialColor;
