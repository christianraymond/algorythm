describe('The avosDeals function', function(){
  it('It should return the list of avos deals', function(){
    var expected = ["1 for R3"," 2 for R7"," 3 for R10"," 5 for R14.50."];
    assert.deepEqual(expected, available("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.") );
  });
});
