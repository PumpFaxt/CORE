import type { Children as ReactChildren } from "react-dom";

export type FormSubmitEvent = SubmitEvent & { currentTarget: HTMLFormElement };

export type Children = ReactChildren;
