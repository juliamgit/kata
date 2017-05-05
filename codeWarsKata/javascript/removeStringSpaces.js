'use strict';

module.exports = noSpace;

function noSpace(string){
    const finalString = string.replace(/\s+/g, '');
    return finalString;

}
