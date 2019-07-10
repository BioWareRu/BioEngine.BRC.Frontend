require('mdbootstrap/js/bootstrap');
require('mdbootstrap/js/mdb');
require('wow.js/dist/wow');
import bsCustomFileInput from 'bs-custom-file-input';
(<any>global).bsCustomFileInput = bsCustomFileInput;
import WOW = require('wow.js/dist/wow');

new WOW().init();

require('./blocks/gallery');
require('./blocks/picture');
require('./blocks/twitter');
require('./blocks/twitch');
