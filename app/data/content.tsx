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

      <span className="arrow-faint">→</span> We welcome ambitious creative directions, bold ideas and experimentation.
      <span className="arrow-faint">→</span> Rather than relying on generic patterns, our ambition is to think-along with your direction, and develop optimal designs and functions. 
  
  </>)

  },
  
  // create work that feels authentic, purposeful, and genuinely usefull.
  // transform them  into polished digital experiences. that balance originality with usability.

  // Every project is a collaboration effort, to develop optimal design and function.

  
  
  { title: "Modern design", content: (
    <>
      Design is shaped by context, function and your vision.
      We value contemporary design principles and graphic design tradition.
      Our products balance clarity, usability and bold visual expression.
      
    </>
  ) },

    { title: "Complete content control", 
    content: 
    (<>
      Your website is designed to evolve: adapt to change, and ready to grow alongside your project.
      After initial release, you have full control, even from your mobile: update text, images, and pages independently 
      without technical barriers.
    </>)
    
     },
  

  { title: "Built around your project", content: 
    (<>
    A website can do more than present information - it can simplify the way you work.
    We develop custom functionality that follows your specific workflow, and can cover:

    <span className="service-list">
      <span className="service-item">- portfolio management</span>
      <span className="service-item">- appointment booking</span>
      <span className="service-item">- registrations (qr code, email)</span>
      <span className="service-item">- custom forms</span>
      <span className="service-item">- document generation</span>
      <span className="service-item">- content delivery</span>
      <span className="service-item">- map views</span>
      <span className="service-item">- we welcome bold ideas</span>
    </span>
    </>)
  },
  // Your website is designed to evolve
  
  { title: "Collaboration", content: "Close collaboration creates stronger products. By working together over time, we can respond to changing needs, improve details, and shape a more practical solution. For this reason, ux.studio.sibiu remains involved beyond delivery, supporting the evolution of the product." },
];
