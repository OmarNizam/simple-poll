import { Selector } from "testcafe";

export default class HomePage {
  constructor() {
    this.HomePageUrl = "http://localhost:8080";
    this.title = Selector('[test-data-id="title"]');
    this.questionInput = Selector('[test-data-id="question-input"]');
    this.questionText = Selector('[test-data-id="question-text"]');
    this.questionInputLabel = Selector('[test-data-id="question-input-label"]');
    this.questionInputValidation = Selector(
      '[test-data-id="question-input-validation"]'
    );
    this.option2InputValidation = Selector(
      '[test-data-id="option-input-validation-1"]'
    );

    this.optionsInput = Selector('[test-data-id="options-input"]');
    this.options3Input = this.optionsInput.nth(2);
    this.option3Label = Selector('[test-data-id="option-label-2"]');

    this.addButtonOption2 = Selector('[test-data-id="add-button-option-1"]');

    // test data

    this.testData = {
      title: "Create Simple Poll!",
      questionText: "What is your favorite coding language?",
      questionInputLabelText: "Poll Question:",
      questionInputValidationErrText: "You reach the max limit 80!",
      option2InputValidationErrText: "You reach the max limit 80! for option 2",
      option3LabelText: "SASS",
    };
  }
}
