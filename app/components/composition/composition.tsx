import type { ReactNode } from "react";
import "./composition.scss";

// The two equal square boxes that make up the page body. The left box holds
// the image swiper; the right box holds whichever panel the active nav link
// resolves to. Either side can be swapped — this component only owns layout.
export function Composition({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="nsc-composition">
      <div className="composition-box composition-left">{left}</div>
      <div className="composition-box composition-right">{right}</div>
    </div>
  );
}
