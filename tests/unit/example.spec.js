import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("Load component", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.exists()).toBeTruthy();
  });
});
