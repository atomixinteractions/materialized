import R from 'ramda'


export const theme = name => R.path(['theme'].concat(name))

export const cond = (condProp, theme) => props => props[condProp] && R.path(['theme'].concat(theme))
