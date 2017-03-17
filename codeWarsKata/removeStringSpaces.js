/**
 * Created by julia.harper on 3/17/17.
 */
'use strict';

module.exports = noSpace;

function noSpace(string){
    const finalString = string.replace(/\s+/g, '');
    return finalString;

}
