// this is delaying something
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const removeSpace = (string) => string.replace(/\s+/g, '');
const __ = _.noConflict();
