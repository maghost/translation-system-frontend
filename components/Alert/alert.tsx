import cn from "classnames";

import { AlertProps as Props } from "./types";

import styles from "./alert.module.scss";

function Alert(props: Props) {
  const { children, type } = props;

  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}

export { Alert };
