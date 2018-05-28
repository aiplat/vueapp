
import common from './actions/common.js'
import index from './actions/index.js'
import apps from './actions/apps.js'
import donate from './actions/donate.js'
const ac = $.extend({}, common, index, apps, donate)

export default ac
