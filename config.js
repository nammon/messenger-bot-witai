'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN || 'KH2BFZNZEX77F25R4Q5FN56TZG5XYHD7'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAADrDUHPurcBAFxidtH0Q6OwvOjuZB3AUqRliBjPH8kU8ghOPiclZBBbnKjsdOJWZAuj4o8BEkckqVFyqYkKBjFjydV5ZCNZC355NZCaN9ZA3hYcJIXHLUvmwBZB6xO5J3A845jevWQrRhC7y3ta49oz12ZCrbmz1PoLZCVRyD0VD8OAZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'i_am_alone_bot_is_password'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}