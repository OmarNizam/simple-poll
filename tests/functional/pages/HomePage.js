import { Selector } from "testcafe";

export default class HomePage {
  constructor() {
    this.HomePageUrl = "http://localhost:8080";
    this.title = Selector('[test-data-id="title"]');

    // Question Input & text & label
    this.questionInput = Selector('[test-data-id="question-input"]');
    this.questionText = Selector('[test-data-id="question-text"]');
    this.questionInputLabel = Selector('[test-data-id="question-input-label"]');

    // Input validation error
    this.questionInputValidation = Selector(
      '[test-data-id="question-input-validation"]'
    );
    this.option2InputValidation = Selector(
      '[test-data-id="option-input-validation-1"]'
    );

    // Options Inputs
    this.optionsInput = Selector('[test-data-id="options-input"]');
    this.options1Input = this.optionsInput.nth(0);
    this.options2Input = this.optionsInput.nth(1);
    this.options3Input = this.optionsInput.nth(2);
    this.options4Input = this.optionsInput.nth(3);
    this.options5Input = this.optionsInput.nth(4);
    this.options6Input = this.optionsInput.nth(5);
    this.options7Input = this.optionsInput.nth(6);
    this.options8Input = this.optionsInput.nth(7);
    this.options9Input = this.optionsInput.nth(8);
    this.options10Input = this.optionsInput.nth(9);

    // Options Labels
    this.option1Label = Selector('[test-data-id="option-label-0"]');
    this.option2Label = Selector('[test-data-id="option-label-1"]');
    this.option3Label = Selector('[test-data-id="option-label-2"]');
    this.option4Label = Selector('[test-data-id="option-label-3"]');
    this.option5Label = Selector('[test-data-id="option-label-4"]');
    this.option6Label = Selector('[test-data-id="option-label-5"]');
    this.option7Label = Selector('[test-data-id="option-label-6"]');
    this.option8Label = Selector('[test-data-id="option-label-7"]');
    this.option9Label = Selector('[test-data-id="option-label-8"]');
    this.option10Label = Selector('[test-data-id="option-label-9"]');

    // Add Buttons
    this.addButtonOption2 = Selector('[test-data-id="add-button-option-1"]');
    this.addButtonOption3 = Selector('[test-data-id="add-button-option-2"]');
    this.addButtonOption4 = Selector('[test-data-id="add-button-option-3"]');
    this.addButtonOption5 = Selector('[test-data-id="add-button-option-4"]');
    this.addButtonOption6 = Selector('[test-data-id="add-button-option-5"]');
    this.addButtonOption7 = Selector('[test-data-id="add-button-option-6"]');
    this.addButtonOption8 = Selector('[test-data-id="add-button-option-7"]');
    this.addButtonOption9 = Selector('[test-data-id="add-button-option-8"]');
    this.addButtonOption10 = Selector('[test-data-id="add-button-option-9"]');

    // Delete Buttons
    this.deleteButtonOption3 = Selector(
      '[test-data-id="delete-button-option-2"]'
    );

    // Reset Button

    this.resetButton = Selector('[test-data-id="reset-button"]');

    // test data

    this.testData = {
      title: "Create Simple Poll!",
      questionText: "What is your favorite coding language?",
      questionInputLabelText: "Poll Question:",
      questionInputValidationErrText: "You reach the max limit 80!",
      option2InputValidationErrText: "You reach the max limit 80! for option 2",
      option1LabelDeafultText: "option-1",
      option2LabelDeafultText: "option-2",
      option1LabelText: "Java Script",
      option2LabelText: "HTML",
      option3LabelText: "SASS",
      option4LabelText: "HTML",
      option10LabelText: "Last option",
    };
  }
}
