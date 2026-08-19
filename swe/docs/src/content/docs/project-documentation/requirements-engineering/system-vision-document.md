---
title: System Vision Document
---

> **LOCUTO-RIO: OPEN-SOURCE WEB PLATFORM FOR MODEL-DRIVEN PROTOTYPING**
>
> This document consolidates the conceptual formulation of the project, being structured in two fundamental parts: an **executive summary**, focused on the demonstration of value and user narratives, and the respective **technical appendices**, oriented towards the operational structuring, system constraints and architectural guidelines.

## Executive Summary

### Core Purpose and Value Proposition

The system consists of an open-source, model-driven web application,
designed to eliminate the need for direct designer intervention in the prototyping phase during requirements gathering. This solution empowers business analysts and teams
outside the IT department to autonomously produce high-fidelity prototypes and static code. In this way, the need to program source code or operate highly complex technical tools is eliminated.

### Nature and Functioning of the Solution

The solution aims to replace the traditional workflow of designing visual schemes
(wireframes) and the subsequent coding of static prototypes with interfaces driven by
specific forms for each type of artifact. To this end, the development of a dedicated assistant for the design of institutional and
promotional pages (hotsites) is foreseen, as well as an assistant specialized in the production of forms for data management operations (create, consult, update and remove records) in institutional applications.

The sustainability and effectiveness of the solution are based on the functional separation of three fundamental stakeholders in the process:

1. **The design team** takes on visual governance and accessibility requirements, being responsible for creating and maintaining page layout files and institutional layout components.
1. **Users without technical skills** build, customize, and configure pages through exclusively visual interfaces and guided wizards, without needing direct access to the source code or the specifics of formatting languages.
1. **Development teams** benefit from the direct export of clean, structured, and semantic user interface code, which allows for quick and efficient integration into the processing engines and internal logic of the organization's applications.

### User Stories

The user stories presented below operationalize the workflows and concretely demonstrate the value generated for the different stakeholders in the solution.

- **US01 – AUTONOMOUS VISUAL PARAMETERIZATION (BUSINESS ANALYST / NON-TECHNICAL USERS)**
    - **As a** Business Analyst / Non-technical User,
    - **I want to** generate high-fidelity prototypes by completing form-guided wizards (e.g., CRUD form wizard or institutional pages),
    - **So that** I can validate business rules and interfaces with stakeholders without writing any code or using complex design tools.
- **US02 – VISUAL GOVERNANCE AND STANDARDIZATION (UI/UX DESIGNER)**
    - **As a** Designer responsible for the institutional Design System,
    - **I want to** create and maintain standardized templates in templating engines,
    - **So that** all interfaces generated across the organization maintain strict visual consistency, accessibility best practices, and centralized aesthetic governance.
- **US03 – SEMANTIC CODE EXPORT (SOFTWARE ENGINEER)**
    - **As a** Software Developer / Backend Engineer,
    - **I want to** export clean, semantic, and structured static UI code from the generated prototypes,
    - **So that** I can integrate them directly into backend platforms (PHP, Java, JavaScript).

## Technical Appendices

### Pressupostos Técnicos Fundamentais

- **Template-Driven Paradigm [Required]:** The system must maintain a strict functional separation between the data/parameter layer (provided via forms) and the aesthetic presentation layer (managed by layout files).
    - *Rationale:* This strict separation ensures that visual layout changes made by the design team do not corrupt the data entered by analysts and end users, also allowing for retroactive aesthetic updates of microsites and forms without the need to re-enter data.
- **Template Engine [Desirable]:** The system compiler should initially use Handlebars technology for deterministic rendering and compilation of visual artifacts.
    - *Rationale:* Handlebars is a compilation technology without complex logic integrated into the templates (logicless templates), which simplifies learning for the UI/UX design team and prevents the accidental introduction of logic bugs into the presentation layer.
- **Styling and Design System Structure [Desirable]:** The system should initially adopt the Bootstrap framework as the basis for its corporate styling components, ensuring native screen responsiveness and visual grid consistency.
    - *Rationale:* Choosing Bootstrap leverages existing technical skills within the development team and ensures immediate accessibility consistency and compatibility across multiple web browsers.
- **Cross-Platform Output Interoperability [Required]:** The interface code generated by the system must be agnostic and ready for immediate integration into the organization's main corporate environments and internal processing platforms (such as PHP, Java, or JavaScript).
    - *Rationale:* This allows the exported code to be agnostic to specific backend stacks, avoiding vendor lock-in and allowing different development teams to consume the same clean interface.

### Operational and Engineering Constraints
- **Code Isolation for End Users [Required]:** The business interface intended for analysts and corporate users must hide and prevent any direct editing of HTML tags, CSS stylesheets, or markdown.
    - *Rationale:* This restriction is critical to prevent users without software engineering or web design skills from altering formatting elements that could break the institutional visual identity, corrupt layout compatibility, or violate web accessibility regulations.
- **Semantic Quality of Output Code [Required]:** The compilation and export engine must generate clean and semantic code, prohibiting the introduction of redundant tags, unnecessary inline styles, or spurious nested code.
    - *Rationale:* The generated code is intended to be integrated directly into production corporate systems by engineering teams. Clean code eliminates the "dirty code" pattern common in WYSIWYG generators and facilitates the maintenance, debugging, and security auditing of applications.
- **Licensing and Governance [Required]:** The system project must be governed under a non-reciprocal Open Source license model (such as MIT or BSD).
    - *Rationale:* A permissive and non-reciprocal license allows the generator to be integrated, extended, or encapsulated in proprietary internal applications of the organization without the legal obligation to expose the commercial backend code of these corporate solutions.

### Initial Structure of Components and Roles

| Profile / Actor       | Operational Responsibility       | Artifacts & Technologies Involved       |
| :------------- | :------------ | :------------- | 
| **Design Team**  | Visual governance, accessibility, layout modeling and design system rules. | Template files (Handlebars), CSS Framework (Bootstrap), Visual Tokens. | 
| **Business & Marketing** | Content parameterization, data composition, and screen flow definition via wizards. | Specialized Assistants (Institutional Pages, Academic CRUD), Visual Forms. |
| **Development** | Consumption of the generated clean UI code and coupling with services, APIs, and backend logic. | Semantic HTML5, Structured CSS3, Backend Stacks (PHP, Java, JavaScript). |

## Guidelines for Detailed Requirements Engineering

For subsequent phases of software specification and development, future collaborators should prioritize:

1. **Wizard Catalog:** Formal mapping of all fields required for each hotsite category or data form.
    - *Rationale:* Necessary to structure the JSON data model that will feed the template engine, serving as the basis for the development of visual validations for administrative interfaces.
1. **Syntactic and Semantic Validation Mechanism:** Implementation of automated tests in the compilation engine to certify the W3C validity of the generated interface code.
    - *Rationale:* Essential to ensure in an automated way that no model produced by designers or data input by users results in invalid HTML code that may fail in certain browsers or screen readers for accessibility.
1. **Export Module:** Detailed specification of the compressed package of static files (HTML, structured CSS, JS, and local dependencies) exported by the system.
    - *Rationale:* Ensures that the final artifact can be introduced directly and without additional manual adaptation steps into corporate continuous integration and continuous delivery (CI/CD) pipelines.

## Glossary

- **API (Application Programming Interface):** A set of rules and protocols that allows different computer applications to communicate and share data and functionalities automatically, securely, and without human intervention.
- **Web Accessibility:** The set of software design and development practices that ensures that anyone, regardless of their physical or cognitive abilities, can access, navigate, and use websites and computer applications without barriers.
- **Bootstrap:** One of the most widely adopted visual styling frameworks in web development. It allows the creation of aesthetic components that automatically adapt to computer, tablet, and mobile phone screens (responsiveness).
- **CI/CD (Continuous Integration / Continuous Delivery):** An automated practice in software engineering where code changes made by programmers are automatically integrated, tested, and published to production, saving time and eliminating manual verification steps.
- **CRUD (Create, Read, Update, Delete):** Acronym summarizing the four basic data manipulation operations that an end user can perform on a database.
- **Design System:** A centralized repository of reusable visual components, design patterns, and aesthetic tokens (such as colors and typography) that serve as the single source of visual truth for all platforms within an organization.
- **Handlebars:** A computer modeling engine (template engine) used to load aesthetic files and deterministically combine them with parameter or data files, generating the final page in a readable format.
- **Hotsite:** A website focused on a specific campaign, product, event, or purpose of short or medium duration, developed under its own visual identity.
- **Semantic HTML5:** A language used to describe the structure of web pages that employs special tags to explicitly express the purpose of each component (e.g., using ```<header>``` for header, ```<nav>``` for navigation, etc.), facilitating accessibility for screen readers and indexing by search engines.
- **JSON (JavaScript Object Notation):** A standard text file format, extremely lightweight, structured, and easy to read, universally used on the Web to send and receive data between computer systems.
- **Permissive Open Source License (e.g., MIT or BSD):** A type of software licensing that grants free rights to use, modify, and distribute the software privately or integrated, without imposing a legal obligation to make subsequent proprietary commercial developments public.
- **Logicless Templates:** Aesthetic display files that only define the layout of data on the screen without mixing in computing logic or backend processing, isolating the design layer from potential system bugs. 
- **Markdown:** A very lightweight markup language that allows text formatting (bold, lists, titles) using common keyboard characters, widely used in the documentation and READMEs of open-source software.
- **Template-Driven Paradigm:** A software engineering pattern in which user-entered data is kept strictly separate and isolated from aesthetic display layouts, allowing design changes without impacting stored data.
- **Visual Tokens (Design Tokens):** Fundamental atomic variables (e.g., exact definitions of spacing, typography, and corporate color palettes) that feed and ensure the uniform maintenance of brand identity across all of the organization's IT platforms.
- **Vendor Lock-in:** A phenomenon in which an organization becomes dependent on a single vendor, system, or specific technology stack due to severe technical difficulties and the high financial cost of migrating to another platform.
- **W3C (World Wide Web Consortium):** An international community that establishes common technical guidelines and standards to ensure that all web browsers render HTML and CSS elements in a perfectly identical and semantic way.
- **WYSIWYG (What You See Is What You Get):** Interface editors that automatically generate code as the user drags or draws visual components. Although easy to operate, they tend to produce inefficient, inappropriate, and redundant code that hinders the backend (known in the industry as "dirty code").