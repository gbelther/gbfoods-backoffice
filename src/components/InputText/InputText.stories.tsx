import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputText from "./InputText";

export default {
  title: "InputText",
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <div
    style={{
      backgroundColor: "#000",
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <InputText {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  label: "Input Text Label",
  placeholder: "Digite seu texto",
};
