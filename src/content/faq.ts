export type FaqItem = { q: string; a: string[] };
export type FaqSection = { id: string; title: string; subtitle: string; items: FaqItem[] };

export const faqSections: FaqSection[] = [
  {
    id: "faq",
    title: "Frequently Asked Questions",
    subtitle: "Quick answers to the most common questions about your Mercury Call Desk professional AI phone coverage",
    items: [
      { q: "How quickly can my AI assistant start handling calls?", a: ["Your Mercury Call Desk assistant can start handling calls within 5 - 10 minutes of set up completion. Unlike basic answering services that require weeks of configuration, our intelligent system is designed for immediate deployment. Our team handles your technical set up during your onboarding process, ensuring your assistant is trained on your business and ready to provide professional customer service from day one."] },
      { q: "What makes Mercury Call Desk different from basic call answering services?", a: ["Unlike basic answering services that simply take messages, your Mercury Call Desk assistant engages in intelligent conversations, qualifies leads, handles complex inquiries, and integrates with your business systems. While traditional services use simple phone trees, our AI understands context, learns your business processes, and provides personalized responses that build customer relationships and drive real business results."] },
      { q: "Do I need to install any special equipment or software?", a: ["No special equipment or software installation is required. Your Mercury Call Desk assistant works with your existing phone system or can operate completely independently with its own dedicated number. For Growth, Pro, and Enterprise customers, our team handles all technical integration during setup, ensuring seamless operation without disrupting your current business processes."] },
      { q: "Can I keep my existing business phone number?", a: ["Absolutely! You can keep your existing business number and simply forward calls to your Mercury Call Desk assistant, or have the assistant work alongside your current phone setup. We also provide new local numbers if you prefer dedicated lines for different purposes (sales, support, appointments, etc.). Our flexible setup accommodates any business phone configuration."] },
      { q: "How do I forward calls from my existing cell phone number to my assistant? Do I have to port my number?", a: [
        "No, you don't need to port your number or leave your current carrier! You can keep your existing cell phone number and carrier while forwarding calls to your Mercury Call Desk assistant using simple call forwarding features.",
        "Most cell phone carriers support call forwarding using dialing codes. To forward calls from your existing cell phone to your assistant, dial *61 followed by your assistant's 10-digit phone number (example: *61-555-123-4567). This sets up conditional call forwarding, which forwards calls when your phone is busy or unanswered.",
        "For unconditional forwarding (all calls go directly to your assistant), most carriers use *21 followed by the number. To turn off call forwarding, typically dial #21# or #61# depending on your forwarding type.",
        "Important notes: call forwarding methods can vary by carrier (Verizon, AT&T, T-Mobile, etc.); some carriers may charge for call forwarding services; test the setup by having someone call your cell phone to ensure calls reach your assistant; contact your carrier's customer service and ask how to set up \"conditional\" or \"unconditional\" call forwarding for your plan.",
      ] },
    ],
  },
  {
    id: "service",
    title: "Understanding Your Service",
    subtitle: "How your Mercury Call Desk assistant works and what it can do",
    items: [
      { q: "What types of conversations can my AI assistant handle?", a: ["Your Mercury Call Desk assistant handles complex business conversations including lead qualification, appointment scheduling, customer support inquiries, order processing, emergency routing, and detailed product/service questions. Unlike simple chatbots, it understands context, handles interruptions naturally, and can manage multi-topic conversations while maintaining professionalism that reflects your brand."] },
      { q: "How does the AI know about my specific business and industry?", a: ["During setup, our team trains your assistant using your business information, FAQ documents, service details, pricing, policies, and industry-specific requirements. Your assistant learns your company's unique processes, terminology, and customer service standards. This training ensures accurate, knowledgeable responses that sound like they're coming from an experienced team member who truly understands your business."] },
      { q: "Can my assistant handle calls in different languages?", a: ["Yes! Your Mercury Call Desk assistant supports 40+ languages with automatic language detection. It can seamlessly switch between languages during conversations and maintains the same professional, knowledgeable tone regardless of the language used. This capability allows you to serve diverse customer bases without language barriers limiting your business growth."] },
      { q: "What happens when my assistant encounters a question it can't answer?", a: ["When your assistant encounters complex situations beyond its training, it follows customized escalation protocols. This might include transferring the call to your team, taking detailed messages for follow-up, scheduling callback appointments, or directing callers to specific resources. You'll receive notifications about these interactions so you can continuously improve your assistant's capabilities."] },
      { q: "Can my assistant make outbound calls for my business?", a: [
        "Yes! Your Mercury Call Desk assistant can make outbound calls for a wide variety of business purposes, making it a powerful tool for proactive customer engagement and business growth.",
        "Popular outbound calling uses include sales outreach, customer follow-up, appointment confirmations, lead nurturing, payment reminders, survey and feedback calls, event reminders, and reactivation campaigns.",
        "Your assistant maintains the same professional, knowledgeable tone during outbound calls as it does for inbound conversations. It can access customer history, follow scripted talking points, and handle objections naturally while maintaining your brand's voice and standards.",
        "Availability: Outbound calling is included with Pro and Enterprise tier service and can be configured during setup with custom scripts, calling schedules, and specific business objectives to maximize results and ROI.",
      ] },
    ],
  },
  {
    id: "integration",
    title: "Business Integration",
    subtitle: "Connecting with your existing tools and workflows",
    items: [
      { q: "How does my assistant integrate with my CRM and calendar?", a: ["Your Mercury Call Desk assistant seamlessly connects with popular CRM systems (Salesforce, HubSpot, Pipedrive) and calendar applications (Google Calendar, Outlook) to automatically capture lead information, schedule appointments, and update customer records in real-time. This integration ensures every interaction is recorded and actionable, eliminating manual data entry and preventing lost opportunities."] },
      { q: "Can my assistant process payments during phone calls?", a: ["Yes, with Stripe integration, your assistant can securely process payments, handle billing inquiries, and manage subscription changes during conversations. All payment processing follows industry security standards, ensuring customer financial information remains protected while providing convenient payment options that can increase conversion rates and customer satisfaction."] },
      { q: "What custom workflows can be set up for my business?", a: ["Custom workflows are tailored to your specific business processes and available with Pro tier service. Examples include automated appointment reminders, lead nurturing sequences, customer onboarding processes, support ticket creation, inventory checks, and multi-step sales processes. Our team designs these workflows during your onboarding to maximize efficiency and customer experience."] },
      { q: "How do I track which marketing channels are driving phone calls?", a: ["Our Lead Tracker feature (available in Pro tier) provides detailed attribution reporting showing exactly which marketing campaigns, websites, ads, or referral sources generated each phone call. This data includes conversion rates, revenue attribution, and ROI insights, helping you optimize marketing spend and focus on the channels that drive the highest-value customers."] },
    ],
  },
  {
    id: "optimization",
    title: "Optimization & Results",
    subtitle: "Maximizing performance and measuring success",
    items: [
      { q: "How can I improve my assistant's performance over time?", a: ["Your assistant continuously improves through conversation analysis and periodic training updates. Review call summaries and analytics to identify common questions or issues, then work with our team to refine responses and add new capabilities. Pro tier customers receive priority optimization support through dedicated Slack channels for faster improvements and enhanced performance."] },
      { q: "What analytics and reporting do I receive?", a: ["Comprehensive analytics include call volume patterns, conversation success rates, customer satisfaction scores, peak calling times, conversion metrics, and revenue impact tracking. Advanced analytics (Growth tier and above) provide deeper insights into caller intent, conversation topics, and optimization opportunities. All data is presented in easy-to-understand dashboards for actionable business intelligence."] },
      { q: "How do I know if my assistant is providing good customer experiences?", a: ["Quality monitoring includes call recordings, conversation transcripts, and AI-generated summaries highlighting key interaction points. Customer satisfaction can be tracked through follow-up surveys, successful appointment completions, and conversion rates. Our reporting identifies both successful interactions and areas for improvement, ensuring consistently high-quality customer experiences."] },
      { q: "Can I add more assistants or phone lines as my business grows?", a: ["Absolutely! Your service scales with your business needs. Add multiple assistants for different departments, locations, or specialized functions (sales, support, emergencies). Each assistant can be trained for specific roles while maintaining consistent quality. Upgrade your plan anytime to accommodate growth, with seamless transitions that don't disrupt your existing operations."] },
    ],
  },
  {
    id: "support",
    title: "Technical Support",
    subtitle: "Troubleshooting and technical assistance",
    items: [
      { q: "What should I do if my assistant isn't answering calls?", a: ["First, verify your call forwarding settings are correctly configured. Check that your business hours and availability settings match your expectations. If issues persist, contact our support team immediately—we provide rapid response for service interruptions. Pro tier customers have access to priority support channels for fastest resolution times."] },
      { q: "How do I request changes to my assistant's responses or behavior?", a: ["Submit optimization requests through your customer portal or contact our support team with specific examples of desired changes. Include conversation context, preferred responses, and business reasoning. Our team typically implements minor adjustments within 24-48 hours, with more complex modifications scheduled based on complexity and your service tier."] },
      { q: "Is my customer data secure and compliant with privacy regulations?", a: ["Yes, all customer data is protected with enterprise-grade security including end-to-end encryption, secure data handling protocols, and compliance with GDPR, CCPA, and industry-specific regulations like HIPAA for healthcare businesses. Our infrastructure meets SOC 2 Type 2 standards, ensuring your customer information remains confidential and protected at all times."] },
      { q: "What are the system requirements and uptime guarantees?", a: ["Mercury Call Desk operates on enterprise-grade cloud infrastructure with 99.9% uptime guarantee. No special equipment or software is required on your end—just a working phone line or internet connection. Our redundant systems ensure continuous service, and any rare outages are quickly resolved with automatic failover protection for uninterrupted business operations."] },
    ],
  },
  {
    id: "billing",
    title: "Billing & Account",
    subtitle: "Payment, billing, and account management",
    items: [
      { q: "How does billing work for different service tiers?", a: ["Billing is straightforward with transparent monthly pricing: Starter ($1,595/month), Growth ($1,995/month), and Pro ($3,995/month). Each tier includes specific features and usage limits with no hidden fees. Overage charges are clearly defined, and you can upgrade or downgrade anytime. Annual payment options provide additional savings for long-term commitments."] },
      { q: "Can I change my plan or cancel anytime?", a: ["Yes, you can upgrade, downgrade, or cancel your service anytime without long-term contracts or cancellation fees. Plan changes take effect at your next billing cycle, and you retain access to all features through the end of your current billing period. Downgrades may require adjusting features to match your new tier's capabilities."] },
      { q: "Are there any setup fees or additional charges?", a: ["There are no setup fees for any service tier. Monthly pricing includes all standard features listed in your plan. Additional charges may apply for premium add-ons like extra phone numbers, advanced integrations, or custom development work. All potential charges are clearly disclosed before activation, ensuring transparent pricing with no surprises."] },
      { q: "How do I access my usage reports and billing history?", a: ["Access detailed usage reports and billing history through your customer dashboard or by contacting our support team. Reports include call volumes, feature usage, conversion metrics, and cost breakdowns. Automated monthly statements provide comprehensive billing details with exportable data for accounting and business analysis purposes."] },
    ],
  },
];
