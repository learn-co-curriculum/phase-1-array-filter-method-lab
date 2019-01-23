const expect = chai.expect;

describe('index.js', function () {
  describe('shortTutorials()', function () {
    it('has a shortTutorials() function', function () {
      expect(shortTutorials).to.exist
    });
  });

  describe('shortTutorials()', function () {
    it('returns an array with title case tutorial names', function () {
      expect(shortTutorials).to.have.all.members(
        [
          "What Does The This Keyword Mean?",
          "What Is The Contutorialuctor OO Pattern?",
          "Implementing Blockchain Web API",
          "The Test Driven Development Workflow",
          "What Is NaN And How Can We Check For It",
          "What Is The Difference Between StopPropagation And PreventDefault?",
          "Immutable State And Pure Functions",
          "What Is The Difference Between == And ===?",
          "What Is The Difference Between Event Capturing And Bubbling?",
          "What Is JSONP?"
      ]
      )
    });
  });
});
