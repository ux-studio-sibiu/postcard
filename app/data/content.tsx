import type { ReactNode } from "react";

// Shared page content reused by the desktop pages and the mobile one-pager so
// copy lives in one place. Each entry renders as an <AccordionItem> on both
// surfaces; `content` is a ReactNode so items can hold rich markup (spans,
// links) as well as plain strings.
export type AccordionContent = {
  title: string;
  content: ReactNode;
};

export const serviceItems: AccordionContent[] = [
  { title: "Unique digital solutions", content: (<>
      We design and develop custom web solutions, with focus on cultural, educational and 
      creative projects.

      {/* Rather than relying on generic patterns, 
      we aim to create unique solutions shaped by each project's character and goals.<br/> */}

      <span>→</span> We welcome ambitious creative directions, bold ideas and experimentation.
      <span>→</span> Our ambition is to think along with your direction, and develop optimal designs and functions. 
  
  </>)

  },
  
  // We design and develop custom web solutions, with focus on
  // cultural, educational and creative projects.

  // Rather than relying on generic patterns, 
  // we aim to create unique solutions shaped by each project's character and goals.

  // We welcome ambitious creative directions, bold ideas and experimentation.
  // Our ambition is to think along with your direction, and develop optimal designs and functions.
  


  // create work that feels authentic, purposeful, and genuinely usefull.
  // transform them  into polished digital experiences. that balance originality with usability.

  // Every project is a collaboration effort, to develop optimal design and function.

  
  { title: "Complete content control", content: "Manage your content independently without technical barriers." },
  { title: "Modern design", content: (
    <>
      <span>Influenced by contemporary design principles and graphic design tradition, we create products that balance clarity, usability and bold visual expression. </span>
      <span>Design is shaped by context, function and your vision.</span>
    </>
  ) },
  { title: "Custom functionality", content: 
    "Built specifically for your needs, no compromises." 
  },
  // Your website is designed to evolve
  
  { title: "Collaboration", content: "Close collaboration creates stronger products. By working together over time, we can respond to changing needs, improve details, and shape a more practical solution. For this reason, ux.studio.sibiu remains involved beyond delivery, supporting the evolution of the product." },
];
