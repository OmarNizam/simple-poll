import { Selector } from "testcafe";

export default class HomePage {
  constructor() {
    this.HomePageUrl = "http://localhost:8080";
    this.title = Selector('[test-data-id="title"]');
    this.questionInput = Selector('[test-data-id="question-input"]');
    this.questionText = Selector('[test-data-id="question-text"]');
    this.questionInputLabel = Selector('[test-data-id="question-input-label"]');

    this.testData = {
      title: "Create Simple Poll!",
      questionText: "What is your favorite coding language?",
      questionInputLabelText: "Poll Question:",
    };
  }
}
