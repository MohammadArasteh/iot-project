import Dialog from "./Dialog";
import React, * as react from "react";
import { ButtonProps } from "@mui/material/Button/Button";
import { LoadingButton } from "../button";
import { DialogProps } from "@mui/material";

export type ConfirmModalAction<T> = {
  title: string;
  value: T;
  onClick?(): Promise<void>;
  buttonProps?: ButtonProps;
};

type ConfirmParams<T> = {
  title?: string;
  content: React.ReactNode;
  actions: Array<ConfirmModalAction<T>>;
};

export type ConfirmDialogRef = {
  confirm<T>(params: ConfirmParams<T>): Promise<ConfirmModalAction<T>["value"]>;
};

const ConfirmDialog = react.forwardRef(
  (
    props: Omit<DialogProps, "onClose" | "open">,
    ref: react.Ref<ConfirmDialogRef>
  ) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [actions, setActions] = React.useState<
      Array<ConfirmModalAction<any>>
    >([]);
    const [content, setContent] = React.useState<React.ReactNode>();
    const [title, setTitle] = React.useState<string | undefined>();
    const resolveRef = react.useRef<any>();

    const resolve = (value: unknown) => {
      setOpen(false);
      resolveRef.current(value);
    };

    const actionButtons = actions.map((action, index) => (
      <ConfirmModalActionButton key={index} {...action} resolve={resolve} />
    ));

    react.useImperativeHandle(ref, () => {
      return {
        confirm(params) {
          setOpen(true);
          setActions(params.actions);
          setTitle(params.title);
          setContent(params.content);
          return new Promise((resolve) => {
            resolveRef.current = resolve;
          });
        },
      };
    });

    return (
      <Dialog
        open={open}
        onClose={() => resolve(false)}
        renderActions={() => actionButtons}
        title={title}
        dialogProps={{
          maxWidth: "xs",
          fullWidth: true,
          ...props,
        }}
      >
        {content}
      </Dialog>
    );
  }
);

type ConfirmModalActionButtonProps<T> = ConfirmModalAction<T> & {
  resolve: (value: T | PromiseLike<T>) => void;
};
const ConfirmModalActionButton = <T,>(
  props: ConfirmModalActionButtonProps<T>
) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const onButtonClick = async () => {
    setLoading(true);
    if (props.onClick) await props.onClick();
    props.resolve(props.value);
    setLoading(false);
  };

  return (
    <LoadingButton
      onClick={onButtonClick}
      {...props.buttonProps}
      loading={loading}
    >
      {props.title}
    </LoadingButton>
  );
};

export default ConfirmDialog;
