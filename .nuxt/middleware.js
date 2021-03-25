const middleware = {}

middleware['auth1'] = require('..\\src\\middleware\\auth1.ts')
middleware['auth1'] = middleware['auth1'].default || middleware['auth1']

middleware['i18n'] = require('..\\src\\middleware\\i18n.ts')
middleware['i18n'] = middleware['i18n'].default || middleware['i18n']

export default middleware
