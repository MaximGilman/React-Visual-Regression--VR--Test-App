import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import App from "../App";
export default {
  title: "Components/Todolist",
  component: App,
} as Meta;

export const AppTemplate: Story = () => <App />;
