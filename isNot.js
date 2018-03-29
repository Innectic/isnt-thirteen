
const isThirteen = require("is-thirteen");

const isNot = (x) => {
	return {
		thirteen: () => !isThirteen(x).thirteen(),
		roughly: {
			thirteen: () => !isThirteen(x).roughly.thirteen()
		},
		returning: {
			thirteen: () => !isThirteen(x).returning.thirteen()
		},
		not: {
			thirteen: () => !isThirteen(x).not.thirteen()
		},
		divisible: {
			by: {
				thirteen: () => !isThirteen(x).divisible.by.thirteen()
			}
		},
		square: {
			of: {
				thirteen: () => !isThirteen(x).square.of.thirteen()
			}
		},
		greater: {
			than: {
				thirteen: () => !isThirteen(x).greater.than.thirteen()
			}
		},
		less: {
			than: {
				thirteen: () => !isThirteen(x).less.than.thirteen()
			}
		},
		within: (y) => {
			return {
				of: {
					thirteen: () => !isThirteen(x).within(y).of.thirteen()
				}
			}
		},
		yearOfBirth: () => !isThirteen(x).yearOfBirth(),
		plus: (y) => !isThirteen(x).plus(y),
		minus: (y) => !isThirteen(x).minus(y),
		times: (y) => !isThirteen(x).minus(y),
		dividedby: (y) => !isThirteen(x).dividedby(y),
		canSpell: {
			thirteen: () => !isThirteen(x).canSpell.thirteen()
		}
	}
}

module.exports = isNot;
