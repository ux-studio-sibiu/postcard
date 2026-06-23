"use client";

import { useState } from "react";
import "./concept-layout.scss";

// Proof of concept: two full-viewport panes side by side. On mobile the page is
// a fixed 100vw x 100svh overlay; only one pane shows at a time and a button
// slides horizontally to the other (CSS transform on the track, no Swiper).
// Each pane scrolls vertically inside its own .pane-scroll element, so the
// document itself never scrolls and the browser navbar stays put. Desktop just
// shows both panes side by side.
export function ConceptLayout() {
  const [active, setActive] = useState(0);

  return (
    <div className="nsc-concept-layout">
      <div className={`track${active === 1 ? " is-second" : ""}`}>
        <section className="pane first">
          <div className="pane-scroll">
            <div className="pane-bar">
              <span className="pane-tag">Pane one</span>
              <button type="button" className="slide-btn" onClick={() => setActive(1)}>
                Next &rarr;
              </button>
            </div>
            <h1>First panel</h1>
            <p>
              This pane fills exactly one viewport width and one small-viewport
              height (100svh). Because scrolling happens inside this box rather
              than on the page itself, the browser address bar never collapses.
            </p>
            <p>
              Scroll down to confirm the inner scroll works independently, then
              tap Next to slide across to the second panel. Your scroll position
              here is preserved when you come back.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
            <button type="button" className="slide-btn block" onClick={() => setActive(1)}>
              Next &rarr;
            </button>
          </div>
        </section>

        <section className="pane second">
          <div className="pane-scroll">
            <div className="pane-bar">
              <span className="pane-tag">Pane two</span>
              <button type="button" className="slide-btn" onClick={() => setActive(0)}>
                &larr; Back
              </button>
            </div>
            <h1>Second panel</h1>
            <p>
              Same deal here: a full-viewport box with its own vertical scroll.
              The track holding both panes is twice as wide and simply shifts by
              -50% under a transform transition.
            </p>
            <p>
              Because the slide is button-driven, there is no horizontal swipe
              gesture competing with this vertical scroll.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
            <button type="button" className="slide-btn block" onClick={() => setActive(0)}>
              &larr; Back
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
