import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// FAQ-style accordion component
export default function FAQAccordion() {
  return (
    <>
      <Accordion sx={{ background: "#a77501ff", color: "white" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} sx={{ background: "#a77501ff" }}>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>What is Material-UI?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ background: "#e6f0ff", color: "#a77501ff" }}>
          <Typography>
            Material-UI (MUI) is a comprehensive React UI framework built on top of Google's Material Design principles. It's like having a fully-stocked toolbox of beautifully designed, accessibility-friendly components ready to use right out of the box. Think of it as the Netflix of UI libraries – it has everything you need, and it just works seamlessly! MUI includes everything from basic buttons and text fields to complex data grids and date pickers. It's incredibly flexible, highly customizable, and backed by an active community of developers who are constantly improving and maintaining it. Whether you're building a simple dashboard or a complex enterprise application, Material-UI provides the foundation to create professional, consistent, and stunning user interfaces without reinventing the wheel. Plus, it follows Material Design's guiding principles like responsive design, meaningful motion, and bold typography – making your app look modern and polished every single time.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ background: "#a77501ff", color: "white", mt: 1 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />} sx={{ background: "#a77501ff" }}>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>Why use MUI?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ background: "#e6f0ff", color: "#a77501ff" }}>
          <Typography>
            Why use MUI? Because life's too short to build UI components from scratch!  MUI saves developers countless hours by providing pre-built, thoroughly tested components that follow Material Design best practices. Here are the game-changing reasons: First, it dramatically speeds up development – you can create professional-looking interfaces in a fraction of the time. Second, consistency is guaranteed across your entire application; no more worrying about buttons looking different on different pages. Third, accessibility is built-in from the ground up, making your app usable for everyone, including people with disabilities. Fourth, the customization options are phenomenal – you can theme entire components with just a few CSS properties, and the styled-engine gives you complete control over styling. Fifth, MUI components are production-ready and used by countless Fortune 500 companies and startups alike. Sixth, the documentation is absolutely stellar – you'll find examples and API docs for everything. Seventh, it integrates seamlessly with other libraries and tools. And finally, you get an incredibly active community and regular updates that keep you ahead of the curve. In short, MUI lets you focus on what matters – building amazing features for your users, not wrestling with CSS and component APIs!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
