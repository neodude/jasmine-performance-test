function nestedBlock(nestingDepth, index) {
  if (nestingDepth == 0) {
    return;
  } else {
    describe('Suite ' + index + ' at depth ' + nestingDepth, function() {
      it("jquery", function() {
        expect($('a')).not.toEqual($('p'));
      });
 
      nestedBlock(nestingDepth - 1, index);
    });
  }
}

for (i=0; i<50; i++) {
  nestedBlock(10, i);
}