import { ComponentStory, ComponentMeta } from "@storybook/react";
import App from "../App";
import "../App.css";

export default {
  title: "Components/Todolist",
  component: App,
} as ComponentMeta<typeof App>;

export const Primary: ComponentStory<typeof App> = () => <App />;
