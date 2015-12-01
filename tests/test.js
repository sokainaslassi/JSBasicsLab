(function () {
    'use strict';

    /* global JS_BASICS,test,equal,module,start,stop,window,$ */


    module('Test "JSBAsics" module');

    test('Test isNumberEven', function() {
        equal(JS_BASICS.isNumberEven(42), true, '42 should be even');
        equal(JS_BASICS.isNumberEven(-1), false, '-1 should be odd');
        equal(JS_BASICS.isNumberEven(33), false, '33 should be odd');
        equal(JS_BASICS.isNumberEven(0), true, '0 should be even');
        var rnd = Math.floor(Math.random()*1000000)*2;
        equal(JS_BASICS.isNumberEven(rnd), true, 'random even number');
    });

    test('test getFileExtension', function() {
        equal(JS_BASICS.getFileExtension('image.png'), 'png', 'should be "png"');
        equal(JS_BASICS.getFileExtension('perfectlylegal.torrent'),'torrent','should be "torrent"');
        equal(JS_BASICS.getFileExtension('Spaces are ok in file names.txt'),'txt','Spaces are ok in file names');
        equal(JS_BASICS.getFileExtension('archive.tar.gz'),'gz','it is asked for the last extention only');
        equal(JS_BASICS.getFileExtension('no extention here'),false,'return false when no extention');
    });

    test('test longestString', function() {
        equal(JS_BASICS.longestString(['a','ab','abc']),'abc','longest string is the last one');
        equal(JS_BASICS.longestString(['big',[0,1,2,3,4],'tiny']),'tiny','be sure it\'s a string');
        equal(JS_BASICS.longestString(['Holà','\u265E','你好']),'Holà','utf-8...');
        equal(JS_BASICS.longestString(['Holà','\u265E','你好']),'Holà','utf-8...');
        equal(JS_BASICS.longestString([true,false,'lol']),'lol','various types');
        equal(JS_BASICS.longestString([{object: true,mainly: 'to confuse you'},'x']),'x','various types');
    });

    test('test reverseString', function() {
        equal(JS_BASICS.reverseString('Hello World!'), '!dlroW olleH', 'reverse chars in a string');
        equal(JS_BASICS.reverseString('   abc'), 'cba   ', 'reverse chars in a string');
    });

    test('test isPalindrome', function() {
        equal(JS_BASICS.isPalindrome('rats live on no evil star'), true, 'ascii palindrome with space');
        equal(JS_BASICS.isPalindrome('Able was I ere I saw Elba'), true, 'ascii palindrome with upper case');
        equal(JS_BASICS.isPalindrome('مودته تدوم'), true, 'uft8...');
        equal(JS_BASICS.isPalindrome('not this one...'), false, 'no');
    });

    test('test nestedSum', function() {
        equal(JS_BASICS.nestedSum([1,2,3,4,5]), 15, 'flat number array');
        equal(JS_BASICS.nestedSum([[1,2,false],'4','5']), 3, 'nested array and other types');
        equal(JS_BASICS.nestedSum([[[[[[[[[1]]]]]]]], 1]), 2, 'deeply nested array');
        equal(JS_BASICS.nestedSum([['A','B','C', 1,2,3]]), 6, 'deeply nested array + Strings');
        equal(JS_BASICS.nestedSum(['1','2','3',1,2,3]), 6, 'carrefull with  coerced value');
        equal(JS_BASICS.nestedSum(['nope',false,'nada', ['rien']]), 0, 'nothing is 0');
    });


}());
