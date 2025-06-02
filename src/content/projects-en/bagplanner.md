---
title: BagPlanner
subtitle: AI Travel Assistant for Smart, Stress-Free Packing
image: /assets/images/projects/bagplanner.webp
url: https://bagplanner.com
highlighted: true
order: 1
---

BagPlanner is an intelligent travel assistant that we designed to revolutionize the way users prepare for their trips. Leveraging AI, the platform generates personalized and optimized packing lists based on destination, travel dates, planned activities, and even real-time weather forecasts. This ensures that users pack exactly what they need, eliminating the stress of overpacking or forgetting essential items, making trip preparation seamless and efficient.

The solution, which I co-founded with my partner [Elizabeth de la Paz](https://elijs.dev/), features a modern web frontend built with Nuxt.js (Vue.js) and TypeScript (led by [Elizabeth de la Paz](https://elijs.dev/)), a robust backend powered by Supabase (PostgreSQL, Edge Functions with TypeScript/Deno), and dedicated API services developed in Python with FastAPI, for which I, Leynier Gutiérrez, was responsible for the architecture and main development. This combination guarantees high performance, a smooth user experience, and a scalable architecture.

## Our Role in the Project

As co-founders and lead developers of BagPlanner, [Elizabeth de la Paz](https://elijs.dev/) and I have led the project from its initial concept to its current MVP, working in close collaboration:

- **[Elizabeth de la Paz](https://elijs.dev/) (elijs.dev)**: Led the frontend development. She was responsible for creating an intuitive, attractive, and responsive user experience using Nuxt.js, Vue.js, and TypeScript. Her passion for frontend technologies and creating inclusive platforms was key to shaping the interface our users interact with.
- **Me**: I led the backend architecture and development. This included implementing the AI logic, configuring and managing the Supabase infrastructure, developing the API services in Python/FastAPI, and the crucial integration of payment systems. My main focus was to ensure the scalability, security, and efficiency of BagPlanner's core system.

We jointly managed all technical aspects and the product vision, ensuring a robust, scalable, and user-centric platform.

## Technical Details and Interesting Aspects

### Frontend (Website) - Led by [Elizabeth de la Paz](https://elijs.dev/)

[Elizabeth de la Paz](https://elijs.dev/) handled most of the frontend development, creating a modern and efficient interface.

**Technologies:**

- **Nuxt.js & Vue.js**: Main frameworks for building a reactive, modern, and server-rendered (or statically generated) user interface.
- **TypeScript**: Main language for frontend development, improving code quality, maintainability, and scalability.
- **Pinia**: For centralized and type-safe state management throughout the application.
- **Vue-i18n**: Integrated for internationalization, with initial support for English and Spanish.
- **Tailwind CSS** (assumed due to modern structure): Utility-first CSS framework for rapid and customizable design. (Consider adding explicitly if this is the case)

**Highlights:**

- AI-Powered Packing Experience: Users receive smart packing lists tailored to their specific trip details.
- Interactive and User-Friendly Interface: Designed for ease of use, from entering trip details and managing packing lists to handling subscriptions and user profiles, with a strong focus on UX/UI.
- Responsive Design: Ensures a consistent and optimal experience on desktop, tablet, and mobile devices.
- Secure User Accounts: Includes user registration, login, profile management (including avatar uploads), and access to billing and subscription details.
- Real-Time Capabilities: Potential for real-time updates and notifications leveraging Supabase features.
- Focus on Inclusive UX/UI: A conscious effort to create an accessible and enjoyable platform for all users.

### Backend & Infrastructure - Led by Me

I was in charge of the architecture and development of the entire backend and infrastructure.

**Technologies:**

- **Supabase (BaaS)**:
  - **PostgreSQL**: The primary relational database for storing all application data (users, trips, packing items, plans, credits, referrals, etc.).
  - **TypeScript/Deno**: Used to develop Supabase Edge Functions, which handle significant serverless backend logic like AI list generation and Stripe integration.
  - **Supabase Auth**: Provides secure authentication and authorization for users.
  - **Supabase Storage**: Used to store user-uploaded files, such as avatars.
- **Python & FastAPI**: Employed to create dedicated backend API services, potentially for more complex business logic or calculations not suitable for Edge Functions.
- **SQL**: Used to define the database schema and write migrations.
- **Stripe SDK**: For robust and secure integration of payment processing for subscriptions and credit purchases.

**Highlights:**

- Scalable Full-Stack Architecture: A modern setup combining Nuxt.js for the frontend, Supabase for full BaaS capabilities, and FastAPI for specialized backend services in Python.
- AI-Driven Logic: The core algorithms that analyze trip data and generate personalized packing suggestions are primarily implemented via Supabase Edge Functions.
- Comprehensive Data Model: A well-structured PostgreSQL database, managed with declarative schemas and SQL migrations.
- Secure Payment and Subscription System: Deep integration with Stripe to handle various payment scenarios and webhooks.
- Advanced Credit System: A flexible system for acquiring and using credits, with a detailed transaction history.
- Integrated Referral Program: Designed to incentivize user growth, with automated logic for tracking and reward distribution.
- Efficient Serverless Computing: Supabase Edge Functions (TypeScript/Deno) are leveraged for critical backend tasks.

### DevOps & Tools (Managed by Me)

I also handled the setup and management of DevOps tools.

**Technologies:**

- **Git & GitHub**: For version control, collaborative development, and repository management.
- **GitHub Actions**: Implemented for CI/CD pipelines, automating testing, building, and deployment processes.
- **Pre-commit Hooks**: Configured to enforce code quality standards.
- **Python & Typer**: Used to create a custom CLI tool for various development and administrative tasks.

**Highlights:**

- Automated Development Lifecycle: CI/CD pipelines that streamline the process from development to production.
- Code Quality Assurance: Automated checks and standards.
- Custom CLI for Enhanced Productivity: The Python-based CLI tool simplifies common workflows.
- Structured Project Management: A well-organized repository with clear development guidelines and practices.

## Our Impact on the Project

As a co-founding team, our combined impact has been instrumental in taking BagPlanner from an idea to a functional MVP:

**[Elizabeth de la Paz](https://elijs.dev/)'s Contribution:**

- Led and executed the complete frontend development, creating an attractive, responsive, and user-friendly interface with Nuxt.js and TypeScript.
- Designed the user flow and overall platform experience, ensuring it was intuitive and accessible.
- Implemented client-side state management with Pinia and application internationalization.

**My Contribution:**

- Architected and developed the backend systems and cloud infrastructure, database, and serverless functions.
- Designed and implemented the core AI-driven packing list generation logic.
- Integrated Stripe for secure payment processing and handled critical webhooks.
- Established DevOps practices and created the custom CLI tool.

**Joint Achievements:**

- Defined the technical and product vision for the project.
- Designed and implemented the complete user lifecycle management system, including authentication, profiles, subscription plans, and the credit system.
- Developed the customer referral system to encourage organic user acquisition.

## Conclusion

BagPlanner stands as an innovative solution that my partner [Elizabeth de la Paz](https://elijs.dev/) and I have built to significantly simplify the often stressful task of trip preparation through the use of AI and modern web technologies. Our collaboration as co-founders and lead developers demonstrates a strong command of full-stack development, the application of AI in a practical context, the utilization of cloud-native services, and the ability to take a complex, user-centric product from an idea to a functional Minimum Viable Product. The project showcases our combined expertise in a cutting-edge technology stack (Nuxt.js, TypeScript, Python, FastAPI, Supabase, Stripe) and a deep commitment to building scalable, high-quality, and impactful software solutions.
