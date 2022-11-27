import { Selector } from "testcafe";

export default class HomePage {
  constructor() {
    this.title = Selector('[test-dat-id="hello-title"]');

    this.testData = {
      title: "Poll-Form Component",
    };
  }
}
