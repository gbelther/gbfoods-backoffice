import { useMemo } from "react";

import "./styles.scss";

type Props = {
  text?: string;
  size?: "extra-small" | "small" | "medium" | "large" | "extra-large";
  color?: string;
};

const Heading = ({ text = "", size = "medium", color }: Props) => {
  const styles = useMemo(() => {
    if (!!color) {
      return {
        color,
      };
    }

    return undefined;
  }, [color]);

  return (
    <div className="c-heading">
      <p className={`c-heading--text-${size}`} style={styles}>
        {text}
      </p>
    </div>
  );
};

export default Heading;
