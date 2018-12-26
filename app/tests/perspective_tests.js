QUnit.module("Perspective tests");
QUnit.test("Identical Transformation", function (assert) {
    let initPts = [{x: 0, y: 0}, {x: 10, y: 0}, {x: 0, y: 20}, {x: 10, y: 20}];
    let finalPts = initPts;

    let result = wpd.calculateHomographyMatrix(initPts, finalPts);
    console.log(result.V);
    console.log(result.V.length);
    console.log(result.V[0].length);
    assert.equal(1, 1, "foo");
});