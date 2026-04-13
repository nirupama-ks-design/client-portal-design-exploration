const workflowPages = {
  "chapter-7": {
    id: "chapter-7",
    title: "Chapter 7 Bankruptcy",
    summary: "Your Chapter 7 filing is 29% complete — here's what needs your attention.",
    progressPercent: 51,
    completedTasks: 8,
    totalTasks: 14,
    defaultTab: "workflow",
    tabs: ["workflow", "documents", "invoices"],
    sections: [
      {
        tone: "orange",
        countLabel: "4 Pending Tasks",
        paragraphs: [
          "Thanks for providing the necessary info to pull your credit report and booking your initial documents meeting. Please upload the initial documents prior to our meeting and complete the required credit counseling course by going to www.abacuscc.org/en/start.php then use attorney code ACC72497 when it asks for payment. This will waive the cost and alert us once you have completed the course.",
          "After your initial documents meeting, upload the requested additional documents. Also, add all of your income sources to your income organizer. Add the most recent 6 months of paystubs and continue to add pay stubs until we are ready to file.",
          "Next, complete your client questionnaire. You will notice information has been pre-populated from your credit report. While working through it, feel free to message us within your discussion panel if you have any questions."
        ],
        tasks: [
          {
            icon: "upload",
            title: "Upload required documents",
            subtitle: "3 of 4 documents uploaded",
            route: "#task/bankruptcy-document-checklist",
            actionLabel: "View"
          },
          {
            icon: "list",
            title: "Complete bankruptcy client questionnaire",
            subtitle: "Required before filing — certificate needed",
            route: "#task/client-questionnaire",
            actionLabel: "View"
          },
          {
            icon: "signature",
            title: "Review Petition Draft",
            subtitle: "Your attorney will share this when ready",
            disabled: true,
            actionLabel: "Locked"
          }
        ]
      },
      {
        tone: "green",
        countLabel: "2 Completed Tasks",
        trailingSymbol: "−",
        paragraphs: [
          "Thanks again for signing your contract and completing your payment for pre-petition services.",
          "To move forward with the preparation of your bankruptcy petition, please book your initial documents meeting.",
          "Each day that passes pushes your financial freedom date further away. You made the difficult and right decision to take control of your financial health. So, let's work together expeditiously to get you filed, get your discharge and start to rebuild your credit so you can achieve your goals."
        ],
        tasks: [
          {
            icon: "calendar",
            title: "Initial documents meeting",
            subtitle: "Completed March 24 at 8:30 AM",
            route: "#task/initial-documents-meeting",
            completed: true
          },
          {
            icon: "upload",
            title: "Get Credit report",
            subtitle: "Completed March 23 at 12:30 PM",
            route: "#task/credit-report-main-debtor",
            actionLabel: "View",
            completed: true
          }
        ]
      }
    ],
    documents: {
      label: "Chapter 7 - Bankruptcy Document Checklist",
      rows: [
        {
          id: "terms-and-agreements",
          title: "Terms and Agreements",
          subtitle: "12 Items",
          viewRoute: "#task/retainer-agreement",
          canDownload: true
        },
        {
          id: "chapter-7-client-document-checklist",
          title: "Chapter 7 - Client Document Checklist",
          subtitle: "14 Items",
          viewRoute: "#task/bankruptcy-document-checklist",
          canDownload: true,
          children: [
            {
              id: "tax-returns",
              title: "2022, 2023, and 2024 Tax Returns",
              subtitle: "5 Items",
              files: [
                "Tax Return 2021.pdf",
                "Tax Return 2022.pdf",
                "Tax Return 2023.pdf",
                "Tax Return 2024.pdf",
                "Tax Return 2025.pdf"
              ]
            },
            {
              id: "drivers-license",
              title: "Driver's License",
              subtitle: "2 Items"
            },
            {
              id: "credit-counseling-certificate",
              title: "Credit Counseling Certificate",
              subtitle: "2 Items"
            }
          ]
        }
      ]
    },
    invoices: [
      {
        title: "Pre-petition services",
        status: "Auto-pay active",
        amount: "$350.00",
        detail: "Next scheduled payment: April 12"
      },
      {
        title: "Filing fee reserve",
        status: "Pending",
        amount: "$338.00",
        detail: "Collected before petition filing"
      }
    ]
  },
  "retainer-workflow": {
    id: "retainer-workflow",
    title: "Chapter 7 Retainer",
    summary: "Your engagement agreement and billing setup are stored in this workflow.",
    progressPercent: 100,
    completedTasks: 1,
    totalTasks: 1,
    defaultTab: "workflow",
    tabs: ["workflow"],
    sections: [
      {
        tone: "green",
        countLabel: "1 Completed Task",
        paragraphs: [
          "Your Chapter 7 engagement agreement has been signed and archived to your matter record.",
          "The legal operations team has already opened the matter and tied the signed agreement to your client file.",
          "If you need a fresh copy of the agreement or billing receipt, you can request it directly from case chat."
        ],
        tasks: [
          {
            icon: "signature",
            title: "Retainer agreement signing",
            subtitle: "Signed and completed",
            route: "#task/retainer-agreement",
            actionLabel: "View",
            completed: true
          }
        ]
      }
    ]
  },
  call: {
    id: "call",
    title: "Initial Phone Consultation",
    summary: "Your intake call captured the main facts for your Chapter 7 case opening.",
    progressPercent: 65,
    completedTasks: 2,
    totalTasks: 3,
    defaultTab: "workflow",
    tabs: ["workflow"],
    sections: [
      {
        tone: "orange",
        countLabel: "1 Pending Task",
        paragraphs: [
          "Your intake team documented the goals for your filing during the consultation and set up the next onboarding steps for you.",
          "The only open item in this workflow is the intake questionnaire, which helps the team confirm employment, household, and creditor details before the matter moves forward."
        ],
        tasks: [
          {
            icon: "list",
            title: "Intake questionnaire",
            subtitle: "Please complete before attorney review",
            route: "#task/intake-questionnaire",
            actionLabel: "View"
          }
        ]
      },
      {
        tone: "green",
        countLabel: "1 Completed Task",
        paragraphs: [
          "Your initial phone consultation was completed successfully and the intake summary is already attached to your matter.",
          "If you want to revisit the meeting notes or ask follow-up questions, use the case chat and your team will reply there."
        ],
        tasks: [
          {
            icon: "calendar",
            title: "Initial phone consultation meeting",
            subtitle: "Completed March 24 at 8:30 AM",
            route: "#task/initial-phone-consultation",
            actionLabel: "View",
            completed: true
          }
        ]
      }
    ]
  }
};

const taskPages = {
  "bankruptcy-document-checklist": {
    id: "bankruptcy-document-checklist",
    workflowId: "chapter-7",
    title: "Bankruptcy Document Checklist",
    summary: "Your Chapter 7 filing is 29% complete — here's what needs your attention.",
    ctaLabel: "Submit for Review",
    progressPercent: 25,
    outstandingCount: 15,
    rows: [
      {
        title: "Government-issued photo ID",
        description: "Driver's license, state ID, or passport. Must be current and unexpired.",
        status: "Required"
      },
      {
        title: "Marriage certificate",
        description: "Original or certified copy issued by the county clerk where the marriage was registered.",
        status: "Required"
      },
      {
        title: "Federal and State tax returns (last 3 years)",
        description: "Include all schedules and attachments. Both spouses' returns are required if filed separately during the marriage.",
        status: "Required"
      },
      {
        title: "Recent pay stubs (last 3 months)",
        description: "Most recent consecutive pay stubs showing gross and net income. Self-employed clients should provide a current profit & loss statement instead.",
        status: "Required"
      },
      {
        title: "Bank and financial account statements (last 6 months)",
        description: "All checking, savings, money market, and brokerage accounts. Include accounts held jointly and separately.",
        status: "Required"
      },
      {
        title: "Retirement and pension account statements",
        description: "401(k), IRA, pension, deferred compensation, or any retirement benefit accrued during the marriage. Include the most recent quarterly statement.",
        status: "Required"
      },
      {
        title: "Business ownership documents",
        description: "If either spouse owns a business: Articles of incorporation, partnership agreement, most recent business tax returns, and a current valuation or balance sheet.",
        status: "Optional"
      }
    ]
  },
  "retainer-agreement": {
    id: "retainer-agreement",
    workflowId: "retainer-workflow",
    title: "Retainer Agreement",
    summary: "Review and sign the engagement packet so your matter can stay moving.",
    ctaLabel: "Mark as Signed",
    progressPercent: 100,
    checklistTitle: "Signing Checklist",
    checklistRows: [
      "Confirm the spelling of your legal name and mailing address.",
      "Review the scope of services and the Chapter 7 fee terms.",
      "Sign and date the agreement on the signature page."
    ]
  },
  "client-questionnaire": {
    id: "client-questionnaire",
    workflowId: "chapter-7",
    title: "Client Questionnaire",
    summary: "Finish the remaining intake questions so the legal team can finalize your filing packet.",
    ctaLabel: "Continue Questionnaire",
    progressPercent: 42,
    checklistTitle: "Questionnaire Sections",
    checklistRows: [
      "Household and dependent details",
      "Income and employer information",
      "Creditor and asset disclosures"
    ]
  },
  "intake-questionnaire": {
    id: "intake-questionnaire",
    workflowId: "call",
    title: "Intake Questionnaire",
    summary: "Complete the intake questionnaire so your team can prepare the next stage of onboarding.",
    ctaLabel: "Continue Questionnaire",
    progressPercent: 40,
    checklistTitle: "Intake Topics",
    checklistRows: [
      "Case goals and timeline",
      "Household and contact details",
      "Creditors, income, and recent financial changes"
    ]
  },
  "initial-documents-meeting": {
    id: "initial-documents-meeting",
    workflowId: "chapter-7",
    title: "Initial Documents Meeting",
    summary: "Your initial document review meeting has been completed.",
    ctaLabel: "View Meeting Notes",
    progressPercent: 100,
    checklistTitle: "What Was Covered",
    checklistRows: [
      "Reviewed the first round of client documents",
      "Confirmed the next upload list for the filing packet",
      "Outlined the timeline for questionnaire completion"
    ]
  },
  "credit-report-main-debtor": {
    id: "credit-report-main-debtor",
    workflowId: "chapter-7",
    title: "Credit Report Pull - Main Debtor",
    summary: "Completed on March 28",
    ctaLabel: "Download PDF",
    layout: "credit-report",
    tabs: ["Credit Report", "Previous Bankruptcies", "Property Data"],
    personalInformation: [
      { label: "Full name", value: "Jordan Mercer" },
      { label: "Date of birth", value: "June 14, 1991" },
      { label: "SSN", value: "XXX-XX-8842" },
      { label: "Current address", value: "1847 Grove St, Apt 4B, San Francisco, CA 94117" },
      { label: "Employer", value: "Bayside Cafe (Part-time)" },
      { label: "Phone", value: "(628) 304-7712" }
    ],
    scoreSummary: [
      { bureau: "Equifax", score: 542, rating: "Poor" },
      { bureau: "Experian", score: 538, rating: "Poor" },
      { bureau: "TransUnion", score: 551, rating: "Poor" }
    ],
    extractedData: {
      providerViews: [
        {
          provider: "GLADE_AI",
          summary: {
            id: "GL:7f2a91c8-04e2-4b87-a1d3",
            reportGenerated: 1744156800000,
            creditFileSecurityFreezeFlag: false,
            reportType: "US_3B"
          }
        }
      ],
      subject: {
        currentName: {
          firstName: "JORDAN",
          lastName: "MERCER",
          middleName: null,
          suffix: null
        },
        currentAddress: {
          line1: "1847 GROVE ST APT 4B",
          city: "SAN FRANCISCO",
          state: "CA",
          postalCode: "94117",
          countryCode: "USA"
        },
        homePhone: "(628) 304-7712",
        dateOfBirth: "1991-06-14",
        employerName: "BAYSIDE CAFE"
      },
      tradelines: [
        {
          creditorName: "CHASE BANK USA NA",
          accountNumber: "xxxx-xxxx-4821",
          accountType: "REVOLVING",
          status: "OPEN"
        }
      ]
    }
  },
  "initial-phone-consultation": {
    id: "initial-phone-consultation",
    workflowId: "call",
    title: "Initial Phone Consultation",
    summary: "Your first consultation call has been completed and documented.",
    ctaLabel: "View Consultation Notes",
    progressPercent: 100,
    checklistTitle: "Call Summary",
    checklistRows: [
      "Discussed your filing goals and timing",
      "Captured key household and creditor notes",
      "Outlined the next portal tasks and case chat follow-up"
    ]
  }
};

function makeFirmHash(firmId, section, id, tab) {
  const prefix = firmId === "glade" ? "glade-" : "";
  if (section === "home") {
    return `#${prefix}home`;
  }
  if (section === "support") {
    return `#${prefix}support`;
  }
  if (section === "workflow") {
    return `#${prefix}workflow/${id}${tab ? `/${tab}` : ""}`;
  }
  if (section === "task") {
    return `#${prefix}task/${id}`;
  }
  return "#home";
}

function safeReadFirmStorage() {
  try {
    return localStorage.getItem("portalFirm");
  } catch {
    return null;
  }
}

function safeWriteFirmStorage(firmId) {
  try {
    localStorage.setItem("portalFirm", firmId);
  } catch {
    // no-op in restricted contexts
  }
}

function getStoredFirm() {
  return safeReadFirmStorage() === "glade" ? "glade" : "van-horn";
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

const gladeWorkflowPages = {
  "glade-onboarding": {
    id: "glade-onboarding",
    title: "Glade New Client Onboarding",
    summary: "Your Glade New Client Onboarding is 40% complete — here's what needs your attention.",
    progressPercent: 40,
    completedTasks: 2,
    totalTasks: 5,
    defaultTab: "workflow",
    tabs: ["workflow", "documents"],
    layout: "glade-onboarding",
    invoice: {
      title: "Customization Fee",
      balance: "$2,500.00",
      assignee: "Assigned to Laila G."
    },
    steps: [
      {
        stepLabel: "Step 1",
        title: "Custom Terms Request",
        status: "completed",
        body: [
          "We are thrilled that you'd like to implement Glade to streamline your practice. Please review & digitally sign our contract. This contains details on your per workflow pricing and any customization fees.",
          "Next, pay the Glade customization fee invoice.",
          "We will also ask for important documents along with process details regarding your current practice. This will help us set you up for success."
        ],
        tasks: [
          {
            title: "Glade.ai has requested you to sign the agreement",
            subtitle: "Glade Contract is signed",
            status: "completed"
          }
        ]
      },
      {
        stepLabel: "Step 2",
        title: "These 2 tasks must be completed before moving on",
        status: "active",
        body: [
          "Thank you for paying your customization fee. Let's get rolling!",
          "Please complete the questionnaire to help us understand your firm's processes & upload the documents as soon as possible.",
          "Once these are complete, we'll set up a call to walk through your set up.",
          "We look forward to working with you!",
          "Please complete your assignments below before moving on to the next step. Have questions? Ask in the Case Chat."
        ],
        tasks: [
          {
            title: "Business Process Discovery Questionnaire",
            subtitle: "Completed on Apr 9 at 6:33 PM",
            status: "completed"
          },
          {
            title: "Business Assets & Details Document Checklist",
            subtitle: "10 required documents under review",
            status: "active",
            actionLabel: "View",
            route: makeFirmHash("glade", "task", "glade-business-assets-checklist")
          }
        ]
      },
      {
        stepLabel: "Step 3",
        title: "This task must be completed before moving on.",
        status: "next",
        body: [
          "Thanks for finishing the Questionnaire & Document Uploads!",
          "Please book a call with us to have our first review of your attorney-facing dashboard. We will base your set up on the documents & details gathered so far.",
          "The booking will be our first review, but do not hesitate to reach out with any questions in the discussion panel. We're always happy to hop on a call in the meantime as well, just let us know.",
          "Prior to our call, we will work on setting up your dashboard & workflows.",
          "Can't wait to have our first review! Thanks again."
        ],
        tasks: [
          {
            title: "Glade Onboarding First Review",
            subtitle: "Meeting",
            status: "active",
            icon: "calendar",
            actionLabel: "Schedule",
            route: makeFirmHash("glade", "task", "glade-onboarding-first-review")
          }
        ]
      },
      {
        stepLabel: "Step 4",
        title: "Dashboard & Workflow Setup Review",
        status: "locked",
        body: []
      },
      {
        stepLabel: "Step 5",
        title: "Go Live",
        status: "locked",
        body: []
      }
    ],
    documents: {
      label: "Glade New Client Onboarding Documents",
      rows: [
        {
          id: "glade-terms-and-agreements",
          title: "Terms & Agreements",
          subtitle: "1 item",
          children: [
            {
              id: "glade-custom-terms",
              title: "customTerms-DJSL... (PDF)",
              subtitle: "1 day ago",
              files: [
                "Download Certificate",
                "Make a correction"
              ]
            }
          ]
        },
        {
          id: "glade-business-assets",
          title: "Business Assets & Details Document Checklist",
          subtitle: "12 items",
          viewRoute: makeFirmHash("glade", "task", "glade-business-assets-checklist"),
          children: [
            {
              id: "glade-articles",
              title: "Articles of Incorporation / Organization",
              subtitle: "1 item"
            },
            {
              id: "glade-logo",
              title: "Company Logo",
              subtitle: "1 item"
            },
            {
              id: "glade-invoice-example",
              title: "Example of Current Invoice",
              subtitle: "1 item"
            },
            {
              id: "glade-photo-id",
              title: "Government issued Photo ID",
              subtitle: "1 item"
            },
            {
              id: "glade-phone-bill",
              title: "Phone bill with the company or sole proprietor's name on it",
              subtitle: "1 item"
            },
            {
              id: "glade-additional-docs",
              title: "Any additional documentation that is sent to clients",
              subtitle: "1 item"
            },
            {
              id: "glade-credit-course-pdfs",
              title: "Credit Counseling Course Informational PDFs",
              subtitle: "1 item"
            },
            {
              id: "glade-voided-check",
              title: "Voided Check or Signed Bank Letter",
              subtitle: "1 item"
            },
            {
              id: "glade-ch7-retainer",
              title: "Chapter 7 Retainer Agreement",
              subtitle: "2 items"
            },
            {
              id: "glade-ch13-retainer",
              title: "Chapter 13 Retainer Agreement",
              subtitle: "2 items"
            }
          ]
        }
      ]
    }
  }
};

const gladeTaskPages = {
  "glade-business-assets-checklist": {
    id: "glade-business-assets-checklist",
    workflowId: "glade-onboarding",
    title: "Business Assets & Details Document Checklist",
    summary: "10 of 12 documents uploaded. The remaining uploads are needed before your first review.",
    ctaLabel: "Submit for Review",
    progressPercent: 83,
    outstandingCount: 2,
    rows: [
      {
        title: "Voided Check or Signed Bank Letter",
        description: "Upload one of these documents for payout and account verification.",
        status: "Required"
      },
      {
        title: "Any additional documentation sent to clients",
        description: "Upload any intake PDFs, agreements, or guides currently shared with clients.",
        status: "Required"
      }
    ]
  },
  "glade-onboarding-first-review": {
    id: "glade-onboarding-first-review",
    workflowId: "glade-onboarding",
    title: "Glade Onboarding First Review",
    summary: "Select a date and time for your first review with the Glade onboarding team.",
    ctaLabel: "Book Review",
    progressPercent: 0,
    checklistTitle: "Before Booking",
    checklistRows: [
      "Confirm your primary contact information.",
      "Share any onboarding questions in the case chat.",
      "Have your uploaded documents available during the call."
    ]
  }
};

const state = {
  firmId: "van-horn",
  userName: "Lilian",
  profileInitials: "CN",
  homeGreeting: "Good Afternoon, Lilian",
  homeLeadText: "Your Chapter 7 filing is",
  homeHeroPercent: 29,
  meeting: {
    title: "341 Meeting of Creditors",
    subtitle: "10:00 AM PST on Friday, March 15",
    pending: false
  },
  payments: {
    remainingBalance: "$2188.00 USD",
    progressPercent: 56
  },
  supportPage: {
    heading: "Support Chat",
    messages: []
  },
  progressPercent: 51,
  completedTasks: 8,
  totalTasks: 14,
  toastTimer: null,
  activePanel: null,
  mobileCarouselIndex: 0,
  route: { name: "home" },
  documentTreeExpanded: {
    "chapter-7-client-document-checklist": false,
    "tax-returns": false,
    "drivers-license": false,
    "credit-counseling-certificate": false
  },
  tasks: [
    {
      id: "documents",
      icon: "upload",
      title: "Upload required documents",
      subtitle: "3 of 4 documents uploaded",
      route: "#task/bankruptcy-document-checklist"
    },
    {
      id: "questionnaire",
      icon: "list",
      title: "Complete bankruptcy client questionnaire",
      subtitle: "Required before filing — certificate needed",
      route: "#task/client-questionnaire"
    },
    {
      id: "retainer",
      icon: "signature",
      title: "Sign retainer agreement",
      subtitle: "Chapter 7 Bankruptcy Terms & Conditions",
      route: "#task/retainer-agreement"
    },
    {
      id: "petition",
      icon: "signature",
      title: "Review Petition Draft",
      subtitle: "Your attorney will share this when ready",
      disabled: true
    }
  ],
  workflows: [
    {
      id: "chapter-7",
      title: "Chapter 7 Bankruptcy",
      badge: "Final Review",
      tone: "orange",
      route: "#workflow/chapter-7"
    },
    {
      id: "retainer-workflow",
      title: "Chapter 7 Retainer",
      badge: "Signed and completed",
      tone: "green",
      route: "#workflow/retainer-workflow"
    },
    {
      id: "chapter-13",
      title: "Chapter 13 Retainer",
      badge: "Archived",
      tone: "gray",
      muted: true
    },
    {
      id: "call",
      title: "Initial Phone Consultation",
      badge: "Completed",
      tone: "green",
      route: "#workflow/call"
    }
  ],
  team: [
    {
      id: "gary",
      name: "Gary Van Horn",
      role: "Lead Intake Attorney",
      gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
      avatar: "./assets/gary-van-horn.jpg",
      summary: "Primary attorney contact for filing strategy, petition review, and final approval."
    },
    {
      id: "riley",
      name: "Riley Boerger",
      role: "Attorney",
      gradient: "linear-gradient(135deg, #2563eb, #7c3aed)",
      avatar: "./assets/riley-boerger.jpeg",
      summary: "Supports legal review and coordinates additional disclosures."
    }
  ],
  resources: [
    {
      group: "Credit Counseling",
      items: [
        {
          id: "pre-bankruptcy-course",
          title: "First Course",
          description: "Pre-Bankruptcy Credit Counseling by Abacus Credit Counseling.",
          detail: "This course is usually required before filing. Keep your completion certificate ready for upload."
        },
        {
          id: "debtor-education",
          title: "Second Course",
          description: "Post-Filing Debtor Education by Sage Personal Finance.",
          detail: "You typically complete this after the case is filed and before discharge."
        }
      ]
    },
    {
      group: "Forms and Helpful Information",
      items: [
        {
          id: "chapter-7-process",
          title: "Chapter 7 Bankruptcy Process",
          description: "This infographic highlights the process of a standard Chapter 7 case.",
          detail: "Use this as a quick map of the filing journey from intake through discharge."
        },
        {
          id: "trustee-questions",
          title: "341 Trustee Questions",
          description: "Prepare for your meeting of the creditors.",
          detail: "This prep guide explains the common questions you may hear and how to organize your documents."
        }
      ]
    }
  ],
  chat: [
    {
      id: "chat-1",
      role: "support",
      author: "Anna",
      timestamp: "11:34 PM",
      avatar: "https://www.figma.com/api/mcp/asset/70fd69b2-07ee-4313-808d-ac8c0baed3b1",
      body: [
        "Hi Cindy,",
        "We're ready to continue moving forward with your Chapter 13 filing and just need one quick item from you to proceed. When you have a moment, please complete the task below so our team can continue preparing your petition."
      ],
      replies: "3 replies",
      replyMeta: "Last reply today at 11:34 PM",
      replyAvatarCount: 2
    },
    {
      id: "chat-2",
      role: "support",
      author: "Anna",
      timestamp: "11:34 PM",
      avatar: "https://www.figma.com/api/mcp/asset/70fd69b2-07ee-4313-808d-ac8c0baed3b1",
      body: [
        "Hi Cindy,",
        "We're ready to continue moving forward with your Chapter 13 filing and just need one quick item from you to proceed. When you have a moment, please complete the task below so our team can continue preparing your petition."
      ]
    },
    {
      id: "chat-3",
      role: "support",
      author: "Anna Paralegal",
      timestamp: "11:34 PM",
      avatar: "https://www.figma.com/api/mcp/asset/d58c8886-8ce8-4e4a-ad5a-c79ea16288a1",
      badge: "TASK",
      verified: true,
      taskStatus: "Document rejected",
      taskTitle: "Chapter 7 - Client Document Checklist",
      taskDescription: "A photo of you holding your Driver's License and Social...",
      body: [
        "<strong>Reason:</strong> Please re-upload a new photo of your Driver's License."
      ],
      bodyIsHtml: true,
      replies: "3 replies",
      replyMeta: "Last reply today at 11:34 PM",
      replyAvatarCount: 4
    },
    {
      id: "chat-4",
      role: "user",
      author: "Cindy",
      timestamp: "11:34 PM",
      avatar: "https://www.figma.com/api/mcp/asset/18744495-dd8c-4d60-b59a-73e000059ff3",
      body: [
        "Sure, I ll schedule a call"
      ]
    }
  ]
};

const defaultDocumentTreeExpanded = deepClone(state.documentTreeExpanded);

const portalDataByFirm = {
  "van-horn": {
    userName: "Lilian",
    profileInitials: "CN",
    profileAvatar: null,
    homeGreeting: "Good Afternoon, Lilian",
    homeLeadText: "Your Chapter 7 filing is",
    homeHeroPercent: 29,
    progressPercent: state.progressPercent,
    completedTasks: state.completedTasks,
    totalTasks: state.totalTasks,
    meeting: deepClone(state.meeting),
    payments: deepClone(state.payments),
    tasks: deepClone(state.tasks),
    workflows: deepClone(state.workflows),
    team: deepClone(state.team),
    resources: deepClone(state.resources),
    chat: deepClone(state.chat),
    supportPage: {
      heading: "Support Chat",
      messages: []
    },
    teamContact: {
      email: "support@vanhornlaw.example",
      phone: "(555) 010-2048"
    },
    notifications: [
      "Your retainer agreement is ready for signature.",
      "Your Chapter 7 retainer workflow was archived successfully.",
      "A reminder has been scheduled for the 341 Meeting of Creditors."
    ]
  },
  glade: {
    userName: "Laila",
    profileInitials: "LG",
    profileAvatar: "https://www.figma.com/api/mcp/asset/18744495-dd8c-4d60-b59a-73e000059ff3",
    homeGreeting: "Good Afternoon, Laila",
    homeLeadText: "Your Glade New Client Onboarding is",
    homeHeroPercent: 40,
    progressPercent: 40,
    completedTasks: 2,
    totalTasks: 5,
    meeting: {
      title: "Glade Onboarding First Review",
      subtitle: "Select date and time",
      pending: true
    },
    payments: {
      remainingBalance: "$2,500.00 USD",
      progressPercent: 34
    },
    tasks: [
      {
        id: "upload-documents",
        icon: "upload",
        title: "Upload required documents",
        subtitle: "10 of 12 documents uploaded",
        route: makeFirmHash("glade", "task", "glade-business-assets-checklist")
      },
      {
        id: "book-review",
        icon: "calendar",
        title: "Book onboarding review",
        subtitle: "Select a date and time for your first review",
        route: makeFirmHash("glade", "task", "glade-onboarding-first-review")
      }
    ],
    workflows: [
      {
        id: "glade-onboarding",
        title: "Glade New Client Onboarding",
        badge: "In Progress",
        tone: "orange",
        route: makeFirmHash("glade", "workflow", "glade-onboarding")
      }
    ],
    team: [
      {
        id: "coleman",
        name: "Coleman Vurbeff",
        role: "Head of Sales",
        gradient: "linear-gradient(135deg, #0ea5e9, #2563eb)",
        avatar: "./assets/coleman.png",
        summary: "Your primary onboarding lead for setup and rollout planning."
      }
    ],
    resources: [
      {
        group: "Glade Workflow Guides",
        items: [
          {
            id: "glade-doc-requests",
            title: "Requesting & Collecting Documents from Clients",
            description: "Guide for structuring document requests inside Glade workflows.",
            detail: "Use this guide to configure streamlined document intake and review flows."
          },
          {
            id: "glade-questionnaires",
            title: "Client Questionnaires within a Workflow",
            description: "How to build and assign questionnaires to clients.",
            detail: "Questionnaires can be combined with conditional steps and assignment rules."
          },
          {
            id: "glade-pdf-generation",
            title: "How Questionnaires Automatically Generate PDF Forms",
            description: "Understand form mapping and generated outputs.",
            detail: "Responses can be transformed into PDF packets for downstream review."
          }
        ]
      },
      {
        group: "Glade Set Up Guides",
        items: [
          {
            id: "glade-payment-links",
            title: "Collect Payment with Payment Links",
            description: "Set up payment links for onboarding and recurring fees.",
            detail: "Payment links can be embedded directly into workflow tasks and reminders."
          },
          {
            id: "glade-in-person-services",
            title: "Selling In Person Services",
            description: "Configure workflows and offers for in-person engagements.",
            detail: "Use packages and scheduling together for location-based services."
          },
          {
            id: "glade-remote-services",
            title: "Selling Remote Services",
            description: "Run remote-first services with automated follow-ups.",
            detail: "Remote setups can include forms, chat, payment, and booking in one flow."
          },
          {
            id: "glade-private-chats",
            title: "Selling Private Chats",
            description: "Enable private consultation chat products.",
            detail: "Private chats can be sold standalone or attached to workflow milestones."
          },
          {
            id: "glade-ai-responses",
            title: "How Glade AI Responds to Your Customers",
            description: "Review response behavior and escalation paths.",
            detail: "Tune AI behavior and handoff points to match your firm's service model."
          }
        ]
      }
    ],
    chat: [
      {
        id: "glade-chat-1",
        role: "support",
        author: "Coleman",
        timestamp: "4/8/26, 6:43 PM",
        avatar: "./assets/coleman.png",
        body: [
          "Hi Laila,",
          "Quick reminder about a couple of outstanding items for your Glade New Client Onboarding. If you'd like any help completing these, or have questions, please let us know and our team will assist."
        ],
        replies: "3 replies",
        replyMeta: "Last reply today at 11:34 AM",
        replyAvatarCount: 2
      },
      {
        id: "glade-chat-2",
        role: "support",
        author: "Coleman",
        timestamp: "4/9/26, 8:59 PM",
        avatar: "./assets/coleman.png",
        body: [
          "Hi Laila,",
          "Thanks for finishing the Questionnaire & Document Uploads! Please book a call with us to have our first review of your attorney-facing dashboard."
        ]
      },
      {
        id: "glade-chat-4",
        role: "user",
        author: "Laila",
        timestamp: "4/9/26, 9:12 PM",
        avatar: "https://www.figma.com/api/mcp/asset/18744495-dd8c-4d60-b59a-73e000059ff3",
        body: [
          "Sure, I'll upload those documents tonight."
        ]
      }
    ],
    supportPage: {
      heading: "Support Chat",
      messages: []
    },
    teamContact: {
      email: "support@glade.ai",
      phone: "(415) 555-0131"
    },
    notifications: [
      "10 of 12 required onboarding documents are uploaded.",
      "Your questionnaire is completed and under review.",
      "Your first onboarding review is waiting to be scheduled."
    ]
  }
};

state.route = parseHash();

const elements = {
  appView: document.getElementById("app-view"),
  topbar: document.querySelector(".topbar"),
  firmSwitcher: document.getElementById("firm-switcher"),
  brandMark: document.getElementById("brand-mark"),
  overlay: document.getElementById("overlay"),
  supportSheet: document.getElementById("support-sheet"),
  supportSheetTitle: document.getElementById("support-sheet-title"),
  detailModal: document.getElementById("detail-modal"),
  chatThread: document.getElementById("chat-thread"),
  profileButton: document.getElementById("profile-button"),
  profileMenu: document.getElementById("profile-menu"),
  accountSettingsButton: document.getElementById("account-settings-button"),
  logoutButton: document.getElementById("logout-button"),
  modalLabel: document.getElementById("modal-label"),
  modalTitle: document.getElementById("modal-title"),
  modalBody: document.getElementById("modal-body"),
  modalActions: document.getElementById("modal-actions"),
  chatInput: document.getElementById("chat-input"),
  chatForm: document.getElementById("chat-form"),
  mobileChatDock: document.getElementById("mobile-chat-dock"),
  mobileChatToggle: document.getElementById("mobile-chat-toggle"),
  mobileChatTitle: document.getElementById("mobile-chat-title"),
  mobileChatForm: document.getElementById("mobile-chat-form"),
  mobileChatInput: document.getElementById("mobile-chat-input"),
  mobileChatThread: document.getElementById("mobile-chat-thread")
};

applyFirmContext(state.route.firmId || getStoredFirm());
syncHeaderForFirm();

function phosphorIcon(name) {
  const common = 'viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"';
  const icons = {
    signature: `<svg ${common}><path d="M36 184c31.64-37.38 61.82-56 90.52-56 19.24 0 31.48 9.06 31.48 23.34 0 24.75-34.08 34.66-55.79 28.82-18.94-5.1-24.34-22.75-9.94-33.65 12.24-9.26 32.21-17.36 49.41-31.58C161.2 98.8 176.9 76.39 188 44"></path><path d="M181.33 54.67 212 44l10.67 30.67"></path></svg>`,
    "file-arrow-up": `<svg ${common}><path d="M148 36H80a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20V84Z"></path><path d="M148 36v48h48"></path><path d="m128 164 0-56"></path><path d="m104 132 24-24 24 24"></path></svg>`,
    "list-bullets": `<svg ${common}><path d="M88 64h120"></path><path d="M88 128h120"></path><path d="M88 192h120"></path><circle cx="44" cy="64" r="12"></circle><circle cx="44" cy="128" r="12"></circle><circle cx="44" cy="192" r="12"></circle></svg>`,
    "chats-circle": `<svg ${common}><path d="M84 108h88"></path><path d="M84 140h56"></path><path d="M196 196a88 88 0 1 1 24-60.77L232 208Z"></path></svg>`,
    question: `<svg ${common}><path d="M127.99 176v-16"></path><path d="M99.53 96a32 32 0 1 1 56.94 20.2c-15.12 16.8-28.48 24-28.48 43.8"></path><circle cx="128" cy="128" r="96"></circle></svg>`,
    bell: `<svg ${common}><path d="M144 228a24 24 0 0 1-48 0"></path><path d="M56.18 168A8 8 0 0 0 64 178h128a8 8 0 0 0 7.82-10c-6.39-25.56-8-41.9-8-72a64 64 0 1 0-128 0c0 30.1-1.61 46.44-8 72"></path></svg>`,
    "calendar-x": `<svg ${common}><path d="M184 40v24"></path><path d="M72 40v24"></path><path d="M216 88H40"></path><rect x="40" y="56" width="176" height="160" rx="16"></rect><path d="m116 144 24 24"></path><path d="m140 144-24 24"></path></svg>`,
    calendar: `<svg ${common}><path d="M184 40v24"></path><path d="M72 40v24"></path><path d="M216 88H40"></path><rect x="40" y="56" width="176" height="160" rx="16"></rect></svg>`,
    x: `<svg ${common}><path d="M200 56 56 200"></path><path d="m56 56 144 144"></path></svg>`,
    plus: `<svg ${common}><path d="M128 56v144"></path><path d="M56 128h144"></path></svg>`,
    "caret-up": `<svg ${common}><path d="m56 160 72-72 72 72"></path></svg>`,
    "paper-plane-right": `<svg ${common}><path d="M224 128 32 48l48 80-48 80 192-80z"></path><path d="M80 128h80"></path></svg>`,
    "arrow-up-right": `<svg ${common}><path d="M104 152 200 56"></path><path d="M128 56h72v72"></path></svg>`,
    folder: `<svg ${common}><path d="M24 72a8 8 0 0 1 8-8h56l16 24h120a8 8 0 0 1 8 8v104a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8Z"></path></svg>`,
    download: `<svg ${common}><path d="M128 40v120"></path><path d="m80 112 48 48 48-48"></path><path d="M40 200h176"></path></svg>`,
    upload: `<svg ${common}><path d="M128 168V48"></path><path d="m80 96 48-48 48 48"></path><path d="M40 200h176"></path></svg>`,
    dots: `<svg ${common}><circle cx="60" cy="128" r="12" fill="currentColor" stroke="none"></circle><circle cx="128" cy="128" r="12" fill="currentColor" stroke="none"></circle><circle cx="196" cy="128" r="12" fill="currentColor" stroke="none"></circle></svg>`,
    file: `<svg ${common}><path d="M148 36H80a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20V84Z"></path><path d="M148 36v48h48"></path></svg>`,
    "caret-right": `<svg ${common}><path d="m96 48 64 80-64 80"></path></svg>`
  };
  return icons[name] || icons["list-bullets"];
}

function isMobileViewport() {
  return window.innerWidth <= 720;
}

function parseHash() {
  const cleanHash = window.location.hash.replace(/^#/, "");
  const parts = cleanHash.split("/").filter(Boolean);
  const preferredFirm = getStoredFirm();

  if (!parts.length) {
    return { firmId: preferredFirm, name: "home" };
  }

  let firmId = preferredFirm;
  let first = parts[0] || "home";

  if (first.startsWith("glade-")) {
    firmId = "glade";
    first = first.slice("glade-".length) || "home";
  } else {
    firmId = "van-horn";
  }

  if (first === "home") {
    return { firmId, name: "home" };
  }

  if (first === "support") {
    return { firmId, name: "support" };
  }

  if (first === "workflow" && parts[1]) {
    return {
      firmId,
      name: "workflow",
      workflowId: parts[1],
      tab: parts[2] || null
    };
  }

  if (first === "task" && parts[1]) {
    return {
      firmId,
      name: "task",
      taskId: parts[1]
    };
  }

  return { firmId, name: "home" };
}

function getWorkflowPagesForFirm(firmId = state.firmId) {
  return firmId === "glade" ? gladeWorkflowPages : workflowPages;
}

function getTaskPagesForFirm(firmId = state.firmId) {
  return firmId === "glade" ? gladeTaskPages : taskPages;
}

function getHomeHashForFirm(firmId) {
  return makeFirmHash(firmId, "home");
}

function getSupportHashForFirm(firmId) {
  return makeFirmHash(firmId, "support");
}

function applyFirmContext(firmId) {
  const context = portalDataByFirm[firmId] || portalDataByFirm["van-horn"];
  state.firmId = firmId;
  state.userName = context.userName;
  state.profileInitials = context.profileInitials;
  state.profileAvatar = context.profileAvatar || null;
  state.homeGreeting = context.homeGreeting;
  state.homeLeadText = context.homeLeadText;
  state.homeHeroPercent = context.homeHeroPercent;
  state.progressPercent = context.progressPercent;
  state.completedTasks = context.completedTasks;
  state.totalTasks = context.totalTasks;
  state.meeting = deepClone(context.meeting);
  state.payments = deepClone(context.payments);
  state.tasks = deepClone(context.tasks);
  state.workflows = deepClone(context.workflows);
  state.team = deepClone(context.team);
  state.resources = deepClone(context.resources);
  state.chat = deepClone(context.chat);
  state.supportPage = deepClone(context.supportPage);
  state.teamContact = deepClone(context.teamContact);
  state.notifications = deepClone(context.notifications);
  state.documentTreeExpanded = deepClone(defaultDocumentTreeExpanded);
  safeWriteFirmStorage(firmId);
}

function syncHeaderForFirm() {
  elements.topbar.dataset.firm = state.firmId;
  elements.profileButton.textContent = state.profileInitials;
  if (elements.firmSwitcher.value !== state.firmId) {
    elements.firmSwitcher.value = state.firmId;
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function navigateTo(hash) {
  if (window.location.hash === hash) {
    state.route = parseHash();
    renderApp();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = hash;
}

function showToast(message) {
  const existing = document.querySelector(".toast");
  if (existing) {
    existing.remove();
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    toast.remove();
  }, 2200);
}

function closeProfileMenu() {
  elements.profileMenu.classList.add("hidden");
  elements.profileMenu.setAttribute("aria-hidden", "true");
  elements.profileButton.setAttribute("aria-expanded", "false");
}

function openProfileMenu() {
  elements.profileMenu.classList.remove("hidden");
  elements.profileMenu.setAttribute("aria-hidden", "false");
  elements.profileButton.setAttribute("aria-expanded", "true");
}

function toggleProfileMenu() {
  const isOpen = !elements.profileMenu.classList.contains("hidden");
  if (isOpen) {
    closeProfileMenu();
  } else {
    closePanels();
    openProfileMenu();
  }
}

function openPanel(panel) {
  closeProfileMenu();

  if (panel === "support" && isMobileViewport()) {
    setMobileChatExpanded(true);
    return;
  }

  closePanels();
  state.activePanel = panel;
  document.body.classList.add("is-locked");
  elements.overlay.classList.remove("hidden");

  if (panel === "support") {
    elements.supportSheet.classList.remove("hidden");
    elements.supportSheet.setAttribute("aria-hidden", "false");
    elements.chatInput.focus();
    return;
  }

  if (panel === "detail") {
    elements.detailModal.classList.remove("hidden");
    elements.detailModal.setAttribute("aria-hidden", "false");
  }
}

function closePanels() {
  state.activePanel = null;
  document.body.classList.remove("is-locked");
  elements.overlay.classList.add("hidden");
  elements.supportSheet.classList.add("hidden");
  elements.supportSheet.setAttribute("aria-hidden", "true");
  elements.detailModal.classList.add("hidden");
  elements.detailModal.setAttribute("aria-hidden", "true");
}

function setMobileChatExpanded(expanded) {
  elements.mobileChatDock.classList.toggle("is-expanded", expanded);
  elements.mobileChatDock.setAttribute("aria-expanded", String(expanded));
  elements.mobileChatToggle.setAttribute("aria-expanded", String(expanded));
  if (expanded && isMobileViewport()) {
    window.setTimeout(() => elements.mobileChatInput.focus(), 40);
  }
}

function appendChatMessage(message, role = "user") {
  state.chat.push({
    id: `chat-${Date.now()}`,
    role,
    author: role === "user" ? state.userName : state.firmId === "glade" ? "Glade" : "Support team",
    timestamp: "Now",
    avatar: role === "user" ? (state.profileAvatar || state.team[0]?.avatar) : state.team[1]?.avatar,
    body: [message]
  });
}

function getReplyAvatars() {
  return [
    state.team[0]?.avatar,
    state.team[1]?.avatar,
    state.team[2]?.avatar,
    state.team[3]?.avatar
  ].filter(Boolean);
}

function renderChatEntries(entries = state.chat) {
  const replyAvatars = getReplyAvatars();

  return entries.map((entry) => {
    const avatarCount = entry.replyAvatarCount || 2;
    const replyAvatarMarkup = replyAvatars.slice(0, avatarCount).map((src) =>
      `<span class="chat-replies-avatar"><img class="avatar-image" src="${src}" alt=""></span>`
    ).join("");

    const bodyMarkup = entry.bodyIsHtml
      ? entry.body.map((paragraph) => `<p>${paragraph}</p>`).join("")
      : entry.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");

    return `
      <article class="chat-entry ${entry.role === "user" ? "is-user" : "is-support"}">
        <div class="chat-entry-head">
          <span class="chat-avatar" aria-hidden="true">
            <img class="avatar-image" src="${entry.avatar}" alt="">
            ${entry.verified ? '<span class="chat-verified"></span>' : ""}
          </span>
          <div class="chat-entry-meta">
            <div class="chat-entry-author-row">
              <strong>${escapeHtml(entry.author)}</strong>
              <span>${escapeHtml(entry.timestamp)}</span>
              ${entry.badge ? `<span class="chat-entry-badge">${escapeHtml(entry.badge)}</span>` : ""}
            </div>
            ${entry.taskStatus ? `
              <div class="chat-task-card">
                <span class="chat-task-status">${escapeHtml(entry.taskStatus)}</span>
                <strong>${escapeHtml(entry.taskTitle)}</strong>
                <span>${escapeHtml(entry.taskDescription)}</span>
              </div>
            ` : ""}
            <div class="chat-body">
              ${bodyMarkup}
            </div>
            ${entry.replies ? `
              <div class="chat-replies">
                <span class="chat-replies-avatars" aria-hidden="true">${replyAvatarMarkup}</span>
                <strong>${escapeHtml(entry.replies)}</strong>
                <span>${escapeHtml(entry.replyMeta)}</span>
              </div>
            ` : ""}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderChatComposer(className, inputName, placeholder) {
  return `
    <form class="chat-composer ${className}" data-chat-form>
      <label class="sr-only">Message</label>
      <div class="chat-input-shell">
        <span class="chat-plus" aria-hidden="true" data-icon="plus"></span>
        <input name="${inputName}" type="text" placeholder="${escapeHtml(placeholder)}">
      </div>
      <button class="chat-send" type="submit" aria-label="Send message">
        <span aria-hidden="true" data-icon="paper-plane-right"></span>
      </button>
    </form>
  `;
}

function renderCaseChatPanel() {
  return `
    <aside class="card case-chat-panel">
      <div class="card-head case-chat-head">
        <p class="card-label">Case Chat</p>
      </div>
      <div class="chat-thread case-chat-thread">${renderChatEntries()}</div>
      <div class="case-chat-composer-wrap">
        ${renderChatComposer("chat-composer-case", "case-chat", "Type your message here")}
      </div>
    </aside>
  `;
}

function renderFooter() {
  return `
    <footer class="footer-mark" aria-label="Powered by glade.ai">
      <span class="footer-powered-by">Powered by</span>
      <span class="glade-lockup" aria-hidden="true">
        <span class="glade-icon"></span>
        <span class="glade-wordmark">glade.ai</span>
      </span>
    </footer>
  `;
}

function renderProgressCard({ progressPercent, completedTasks, totalTasks, compact = false } = {}) {
  const percent = progressPercent ?? state.progressPercent;
  const completed = completedTasks ?? state.completedTasks;
  const total = totalTasks ?? state.totalTasks;
  return `
    <section class="card progress-card ${compact ? "progress-card-page" : ""}">
      <div class="card-head card-head-inline">
        <p class="card-label">Case Progress</p>
        <span class="progress-meta">${completed}/${total} tasks completed</span>
        <span class="progress-badge">${percent}%</span>
      </div>
      <div class="progress-track" aria-hidden="true">
        <div class="progress-fill" style="width:${percent}%"></div>
      </div>
    </section>
  `;
}

function renderHomeTaskItems() {
  return state.tasks.map((task) => {
    const classes = ["task-item"];
    if (task.disabled) {
      classes.push("is-disabled");
    }

    return `
      <article class="${classes.join(" ")}">
        <div class="icon-frame" aria-hidden="true">${phosphorIcon(task.icon === "upload" ? "file-arrow-up" : task.icon === "list" ? "list-bullets" : task.icon === "calendar" ? "calendar" : "signature")}</div>
        <div class="item-copy">
          <h3 class="item-title">${escapeHtml(task.title)}</h3>
          <p class="item-subtitle">${escapeHtml(task.subtitle)}</p>
        </div>
        ${task.disabled ? "" : `<button class="task-action" type="button" data-nav="${task.route}">View</button>`}
      </article>
    `;
  }).join("");
}

function renderHomeWorkflowItems() {
  return state.workflows.map((workflow) => {
    const dotClass = workflow.tone === "orange"
      ? "is-orange"
      : workflow.tone === "gray"
        ? "is-gray"
        : "is-green";
    const classes = ["workflow-item"];
    if (workflow.muted) {
      classes.push("is-muted");
    }

    return `
      <article class="${classes.join(" ")}">
        <div class="workflow-status" aria-hidden="true">
          <span class="status-dot ${dotClass}"></span>
        </div>
        <div class="item-copy">
          <h3 class="item-title">${escapeHtml(workflow.title)}</h3>
          <span class="status-badge ${dotClass}">${escapeHtml(workflow.badge)}</span>
        </div>
        <button class="workflow-action" type="button" ${workflow.route ? `data-nav="${workflow.route}"` : "disabled"}>
          View Details
        </button>
      </article>
    `;
  }).join("");
}

function renderTeamList() {
  const [featured, secondary] = state.team;
  if (!featured) {
    return "";
  }

  const secondaryMarkup = secondary ? `
    <div class="team-divider" aria-hidden="true"></div>
    <button class="team-member" type="button" data-team-id="${secondary.id}">
      <span class="avatar" style="background:${secondary.gradient}">
        <img class="avatar-image" src="${secondary.avatar}" alt="">
      </span>
      <span class="item-copy">
        <span class="item-title">${escapeHtml(secondary.name)}</span>
        <span class="item-subtitle">${escapeHtml(secondary.role)}</span>
      </span>
    </button>
  ` : "";

  return `
    <button class="team-feature" type="button" data-team-id="${featured.id}">
      <span class="avatar avatar-large" style="background:${featured.gradient}">
        <img class="avatar-image" src="${featured.avatar}" alt="">
      </span>
      <span class="item-copy">
        <span class="item-title">${escapeHtml(featured.name)}</span>
        <span class="item-subtitle">${escapeHtml(featured.role)}</span>
      </span>
    </button>
    ${secondaryMarkup}
  `;
}

function renderResources() {
  return state.resources.map((group) => `
    <section class="resource-group">
      <h3 class="resource-group-title">${escapeHtml(group.group)}</h3>
      <div class="resource-list">
        ${group.items.map((item) => `
          <button class="resource-link" type="button" data-resource-id="${item.id}">
            <span class="resource-copy">
              <strong>${escapeHtml(item.title)}</strong>
              <span>${escapeHtml(item.description)}</span>
            </span>
            <span class="resource-arrow" aria-hidden="true">${phosphorIcon("arrow-up-right")}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function renderHomeView() {
  return `
    <section class="hero">
      <h1>${escapeHtml(state.homeGreeting)}</h1>
      <h1 class="hero-mobile-title">${escapeHtml(state.homeGreeting)}</h1>
      <p class="hero-copy">
        ${escapeHtml(state.homeLeadText)}
        <strong>${state.homeHeroPercent}% complete</strong> — here's what needs your attention.
        <span class="sr-only">${state.tasks.filter((task) => !task.disabled).length} active items</span>
      </p>
      <p class="hero-copy hero-copy-mobile">
        ${escapeHtml(state.homeLeadText)}
        <strong>${state.homeHeroPercent}% complete</strong> — here's what needs your attention.
      </p>
    </section>

    ${renderProgressCard()}

    <p class="swipe-hint">Swipe to see your team, next steps, meetings & more</p>
    <div class="mobile-carousel-pagination" id="mobile-carousel-pagination" aria-label="Portal section carousel navigation"></div>

    <div class="dashboard-grid" id="dashboard-grid">
      <div class="main-column">
        <section class="card" id="section-next-steps" data-mobile-groups="workflow" aria-labelledby="next-steps-title">
          <div class="card-head">
            <div class="section-heading">
              <p class="card-label" id="next-steps-title">Next Steps</p>
              <span class="count-badge">${state.tasks.filter((task) => !task.disabled).length}</span>
            </div>
          </div>
          <div class="stack-list">${renderHomeTaskItems()}</div>
        </section>

        <section class="card" id="section-workflows" data-mobile-groups="workflow" aria-labelledby="workflows-title">
          <div class="card-head">
            <div class="section-heading">
              <p class="card-label" id="workflows-title">Your Workflows</p>
              <span class="count-badge">${state.workflows.length}</span>
            </div>
          </div>
          <div class="stack-list">${renderHomeWorkflowItems()}</div>
        </section>

        <section class="card" id="section-resources" data-mobile-groups="documents" aria-labelledby="resources-title">
          <div class="card-head">
            <div class="section-heading">
              <p class="card-label" id="resources-title">Helpful Resources</p>
            </div>
          </div>
          <div class="resources-wrap">${renderResources()}</div>
        </section>
      </div>

      <aside class="side-column">
        <section class="card" id="section-team" data-mobile-groups="workflow" aria-labelledby="team-title">
          <div class="card-head">
            <div class="section-heading">
              <p class="card-label" id="team-title">Your Team</p>
            </div>
          </div>
          <div class="team-list">${renderTeamList()}</div>
        </section>

        <section class="card" id="section-meeting" data-mobile-groups="workflow" aria-labelledby="meeting-title">
          <div class="card-head">
            <div class="section-heading">
              <p class="card-label" id="meeting-title">Upcoming Meetings</p>
            </div>
          </div>
          <div class="stack-list">
            <button class="task-item meeting-item" id="meeting-button" type="button">
              <span class="icon-frame" aria-hidden="true">${phosphorIcon(state.meeting.pending ? "calendar-x" : "calendar")}</span>
              <div class="item-copy">
                <p class="item-title">${escapeHtml(state.meeting.title)}</p>
                <p class="item-subtitle">${escapeHtml(state.meeting.subtitle)}</p>
              </div>
            </button>
          </div>
        </section>

        <section class="card compact-card" id="section-payments" data-mobile-groups="invoices" aria-labelledby="payments-title">
          <div class="card-head">
            <div class="section-heading">
              <p class="card-label" id="payments-title">Payments</p>
            </div>
          </div>
          <div class="payment-summary">
            ${state.firmId === "glade" ? '<strong class="item-title">Customization Fee</strong>' : ""}
            <div class="progress-row">
              <span>Remaining Balance</span>
              <strong>${escapeHtml(state.payments.remainingBalance)}</strong>
            </div>
            <div class="progress-track progress-track-tight" aria-hidden="true">
              <div class="progress-fill payment-fill" style="width:${state.payments.progressPercent}%"></div>
            </div>
            <button class="button button-secondary button-block" id="payment-plan-button" type="button">${state.firmId === "glade" ? "View Invoice" : "View payment plan"}</button>
          </div>
        </section>
      </aside>
    </div>

    ${renderFooter()}
  `;
}

function renderBreadcrumbs(items) {
  return `
    <nav class="page-breadcrumbs" aria-label="Breadcrumb">
      ${items.map((item, index) => `
        ${index > 0 ? '<span class="breadcrumb-separator">›</span>' : ""}
        ${item.route
          ? `<button class="breadcrumb-link" type="button" data-nav="${item.route}">${escapeHtml(item.label)}</button>`
          : `<span class="breadcrumb-current">${escapeHtml(item.label)}</span>`}
      `).join("")}
    </nav>
  `;
}

function renderWorkflowTabs(page, workflowId, activeTab) {
  return `
    <div class="detail-tabs" role="tablist" aria-label="Workflow sections">
      ${page.tabs.map((tab) => {
        const active = tab === activeTab;
        return `
          <button
            class="detail-tab ${active ? "is-active" : ""}"
            type="button"
            role="tab"
            aria-selected="${active ? "true" : "false"}"
            data-nav="${makeFirmHash(state.firmId, "workflow", workflowId, tab === "workflow" ? null : tab)}"
          >
            ${escapeHtml(tab.charAt(0).toUpperCase() + tab.slice(1))}
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderWorkflowStageCard(section) {
  return `
    <section class="card workflow-stage-card">
      <div class="stage-card-head">
        <div class="stage-card-count">
          <span class="status-dot is-${section.tone}"></span>
          <strong>${escapeHtml(section.countLabel)}</strong>
        </div>
        ${section.trailingSymbol ? `<span class="stage-card-symbol" aria-hidden="true">${escapeHtml(section.trailingSymbol)}</span>` : ""}
      </div>
      <div class="workflow-stage-copy">
        ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </div>
      <div class="stage-task-list">
        ${section.tasks.map((task) => `
          <article class="portal-task-row ${task.completed ? "is-completed" : ""}">
            <div class="icon-frame icon-frame-small" aria-hidden="true">${phosphorIcon(task.icon === "upload" ? "file-arrow-up" : task.icon === "list" ? "list-bullets" : task.icon === "calendar" ? "calendar" : "signature")}</div>
            <div class="item-copy">
              <h3 class="item-title">${escapeHtml(task.title)}</h3>
              <p class="item-subtitle">${escapeHtml(task.subtitle)}</p>
            </div>
            ${task.actionLabel ? `
              <button class="workflow-action" type="button" ${task.route ? `data-nav="${task.route}"` : ""} ${task.disabled ? "disabled" : ""}>
                ${escapeHtml(task.actionLabel)}
              </button>
            ` : '<span class="portal-task-action-spacer" aria-hidden="true"></span>'}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDocumentsView(page) {
  const renderDocumentNode = (node, level = 0) => {
    const hasChildren = Array.isArray(node.children) && node.children.length > 0;
    const hasFiles = Array.isArray(node.files) && node.files.length > 0;
    const expandable = hasChildren || hasFiles;
    const expanded = expandable ? Boolean(state.documentTreeExpanded[node.id]) : false;

    return `
      <article class="document-node level-${level}">
        <div class="document-row-main ${level > 0 ? "is-nested" : ""}">
          <div class="document-row-tree">
            ${expandable ? `
              <button
                class="tree-toggle ${expanded ? "is-expanded" : ""}"
                type="button"
                aria-expanded="${expanded ? "true" : "false"}"
                aria-label="${expanded ? "Collapse" : "Expand"} ${escapeHtml(node.title)}"
                data-tree-toggle="${node.id}"
              >
                ${phosphorIcon("caret-right")}
              </button>
            ` : '<span class="tree-toggle tree-toggle-spacer" aria-hidden="true"></span>'}
            <span class="document-row-icon" aria-hidden="true">${phosphorIcon("folder")}</span>
          </div>
          <div class="document-row-copy">
            <strong>${escapeHtml(node.title)}</strong>
            <span>${escapeHtml(node.subtitle)}</span>
          </div>
          <div class="document-row-actions">
            ${node.viewRoute ? `<button class="workflow-action" type="button" data-nav="${node.viewRoute}">View Task</button>` : ""}
            <button class="document-icon-button" type="button" data-download="${escapeHtml(node.title)}">${phosphorIcon("download")}</button>
          </div>
        </div>
        ${expanded && hasChildren ? `
          <div class="document-tree-children">
            ${node.children.map((child) => renderDocumentNode(child, level + 1)).join("")}
          </div>
        ` : ""}
        ${expanded && hasFiles ? `
          <div class="document-file-list">
            ${node.files.map((fileName, index) => `
              <div class="document-file-row ${index === 1 ? "is-highlighted" : ""}">
                <div class="document-row-tree">
                  <span class="tree-toggle tree-toggle-spacer" aria-hidden="true"></span>
                  <span class="document-row-icon document-file-icon" aria-hidden="true">${phosphorIcon("file")}</span>
                </div>
                <span>${escapeHtml(fileName)}</span>
                <button class="document-icon-button document-icon-button-ghost" type="button" data-download="${escapeHtml(fileName)}">${phosphorIcon("download")}</button>
              </div>
            `).join("")}
          </div>
        ` : ""}
      </article>
    `;
  };

  const documentRows = page.documents.rows.map((row) => `
    <article class="document-browser-row">
      ${renderDocumentNode(row)}
    </article>
  `).join("");

  return `
    <section class="card document-browser-card">
      <div class="document-browser-label">${escapeHtml(page.documents.label)}</div>
      <div class="document-browser-list">
        ${documentRows}
      </div>
    </section>
  `;
}

function renderInvoicesView(page) {
  return `
    <section class="card invoice-card">
      <div class="invoice-card-head">
        <h2>Invoices</h2>
        <span class="invoice-balance-chip">Balance $2188.00</span>
      </div>
      <div class="invoice-list">
        ${page.invoices.map((invoice) => `
          <article class="invoice-row">
            <div class="invoice-copy">
              <strong>${escapeHtml(invoice.title)}</strong>
              <span>${escapeHtml(invoice.detail)}</span>
            </div>
            <div class="invoice-meta">
              <span>${escapeHtml(invoice.status)}</span>
              <strong>${escapeHtml(invoice.amount)}</strong>
            </div>
          </article>
        `).join("")}
      </div>
      <button class="button button-secondary" id="payment-plan-button" type="button">View payment plan</button>
    </section>
  `;
}

function renderGladeWorkflowSteps(page) {
  return page.steps.map((step) => {
    if (step.status === "locked") {
      return `
        <section class="card glade-step-card is-locked">
          <div class="glade-step-head">
            <span class="glade-step-label">${escapeHtml(step.stepLabel)}</span>
            <strong>${escapeHtml(step.title)}</strong>
          </div>
        </section>
      `;
    }

    return `
      <section class="card glade-step-card ${step.status === "active" ? "is-active" : ""}">
        <div class="glade-step-head">
          <span class="glade-step-label">${escapeHtml(step.stepLabel)}</span>
          <strong>${escapeHtml(step.title)}</strong>
          ${step.status === "completed" ? '<span class="glade-step-check">✓</span>' : ""}
        </div>
        <div class="workflow-stage-copy">
          ${step.body.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
        </div>
        ${Array.isArray(step.tasks) && step.tasks.length ? `
          <div class="stage-task-list">
            ${step.tasks.map((task) => `
              <article class="portal-task-row ${task.status === "completed" ? "is-completed" : ""}">
                <div class="icon-frame icon-frame-small" aria-hidden="true">${phosphorIcon(task.status === "completed" ? "signature" : (task.icon === "calendar" ? "calendar" : "list-bullets"))}</div>
                <div class="item-copy">
                  <h3 class="item-title">${escapeHtml(task.title)}</h3>
                  <p class="item-subtitle">${escapeHtml(task.subtitle)}</p>
                  ${task.assignee ? `<p class="glade-task-assignee">${escapeHtml(task.assignee)}</p>` : ""}
                  ${task.completeLink ? `<button class="task-link-button" type="button" data-task-action="complete">${escapeHtml(task.completeLink)}</button>` : ""}
                </div>
                ${task.actionLabel ? `<button class="workflow-action" type="button" data-nav="${task.route}">${escapeHtml(task.actionLabel)}</button>` : '<span class="portal-task-action-spacer" aria-hidden="true"></span>'}
              </article>
            `).join("")}
          </div>
        ` : ""}
      </section>
    `;
  }).join("");
}

function renderGladeDocumentsTab(page) {
  return renderDocumentsView(page);
}

function renderGladeWorkflowView(page, activeTab) {
  const mainContent = activeTab === "documents" ? renderGladeDocumentsTab(page) : `
    ${renderGladeWorkflowSteps(page)}
  `;

  return `
    <div class="progress-strip" aria-label="Case progress: ${page.progressPercent}%">
      <div class="progress-strip-fill" style="width:${page.progressPercent}%"></div>
      <span class="progress-strip-meta">${page.completedTasks}/${page.totalTasks} tasks &middot; ${page.progressPercent}%</span>
    </div>
    ${renderBreadcrumbs([
      { label: "Home", route: getHomeHashForFirm("glade") },
      { label: page.title }
    ])}
    <section class="detail-hero">
      <h1>${escapeHtml(page.title)}</h1>
      <p>Total Progress: ${page.progressPercent}% · ${page.completedTasks} of ${page.totalTasks} tasks</p>
      <p>Your Team: Coleman Vurbeff</p>
    </section>
    ${renderWorkflowTabs(page, page.id, activeTab)}
    <div class="detail-layout">
      <div class="detail-main detail-stack">
        ${mainContent}
      </div>
      <div class="detail-side">
        ${renderCaseChatPanel()}
      </div>
    </div>
    ${renderFooter()}
  `;
}

function renderWorkflowView(route) {
  const pages = getWorkflowPagesForFirm(route.firmId);
  const fallbackPage = route.firmId === "glade" ? pages["glade-onboarding"] : pages["chapter-7"];
  const page = pages[route.workflowId] || fallbackPage;
  const activeTab = page.tabs.includes(route.tab) ? route.tab : page.defaultTab;

  if (page.layout === "glade-onboarding") {
    return renderGladeWorkflowView(page, activeTab);
  }

  let mainContent = "";
  if (activeTab === "documents" && page.documents) {
    mainContent = renderDocumentsView(page);
  } else if (activeTab === "invoices" && page.invoices) {
    mainContent = renderInvoicesView(page);
  } else {
    mainContent = page.sections.map(renderWorkflowStageCard).join("");
  }

  return `
    <div class="progress-strip" aria-label="Case progress: ${page.progressPercent}%">
      <div class="progress-strip-fill" style="width:${page.progressPercent}%"></div>
      <span class="progress-strip-meta">${page.completedTasks}/${page.totalTasks} tasks &middot; ${page.progressPercent}%</span>
    </div>

    ${renderBreadcrumbs([
      { label: "Home", route: getHomeHashForFirm(route.firmId) },
      { label: page.title }
    ])}

    <section class="detail-hero">
      <h1>${escapeHtml(page.title)}</h1>
      <p>${escapeHtml(page.summary)}</p>
    </section>

    ${renderWorkflowTabs(page, page.id, activeTab)}

    <div class="detail-layout">
      <div class="detail-main detail-stack">
        ${mainContent}
      </div>
      <div class="detail-side">
        ${renderCaseChatPanel()}
      </div>
    </div>

    ${renderFooter()}
  `;
}

function renderChecklistRows(task) {
  if (task.rows) {
    return `
      <section class="card checklist-card">
        <div class="checklist-card-head">
          <div class="checklist-count-wrap">
            <strong>Outstanding</strong>
            <span class="checklist-count-pill">${task.outstandingCount}</span>
          </div>
          <button class="button button-secondary checklist-add-button" type="button" data-task-action="add-item">Add item</button>
        </div>
        <div class="checklist-row-list">
          ${task.rows.map((row) => `
            <article class="checklist-row">
              <div class="checklist-row-copy">
                <strong>${escapeHtml(row.title)}</strong>
                <p>${escapeHtml(row.description)}</p>
              </div>
              <div class="checklist-row-meta">
                <span class="checklist-status-pill ${row.status === "Optional" ? "is-optional" : ""}">${escapeHtml(row.status)}</span>
                <div class="checklist-action-group">
                  <button class="document-icon-button" type="button" data-task-action="upload">${phosphorIcon("upload")}</button>
                  <button class="document-icon-button" type="button" data-task-action="menu">${phosphorIcon("dots")}</button>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  return `
    <section class="card checklist-card">
      <div class="checklist-card-head">
        <div class="checklist-count-wrap">
          <strong>${escapeHtml(task.checklistTitle)}</strong>
        </div>
      </div>
      <div class="simple-checklist-list">
        ${task.checklistRows.map((item) => `
          <div class="simple-checklist-row">
            <span class="status-dot is-green"></span>
            <span>${escapeHtml(item)}</span>
          </div>
        `).join("")}
      </div>
      <div class="generic-task-actions">
        <button class="button button-primary" type="button" data-task-action="complete">${escapeHtml(task.ctaLabel)}</button>
      </div>
    </section>
  `;
}

function renderCreditReportTask(task) {
  const activeTab = task.tabs?.[0] || "Credit Report";
  const extractedJson = escapeHtml(JSON.stringify(task.extractedData || {}, null, 2));

  return `
    <div class="credit-tabs-list" role="tablist" aria-label="Credit report sections">
      ${(task.tabs || []).map((tab) => `
        <button class="credit-tab ${tab === activeTab ? "is-active" : ""}" type="button" role="tab" aria-selected="${tab === activeTab ? "true" : "false"}">
          ${escapeHtml(tab)}
        </button>
      `).join("")}
    </div>

    <div class="credit-layout">
      <section class="card credit-report-card">
        <div class="credit-report-toolbar">
          <div class="credit-powered">
            <span>Powered by</span>
            <strong>Glade AI</strong>
          </div>
          <button class="button button-secondary credit-download-button" type="button" data-download="Three Bureau Credit Report.pdf">
            <span class="button-icon" aria-hidden="true">${phosphorIcon("download")}</span>
            <span>${escapeHtml(task.ctaLabel)}</span>
          </button>
        </div>

        <div class="credit-heading-block">
          <h2>Three Bureau Credit Report</h2>
        </div>

        <section class="credit-section">
          <header class="credit-section-head">Personal information</header>
          <div class="credit-table">
            ${(task.personalInformation || []).map((item) => `
              <div class="credit-row">
                <span class="credit-key">${escapeHtml(item.label)}</span>
                <span class="credit-value">${escapeHtml(item.value)}</span>
              </div>
            `).join("")}
          </div>
        </section>

        <section class="credit-section">
          <header class="credit-section-head">Credit score summary</header>
          <div class="credit-score-grid">
            ${(task.scoreSummary || []).map((item) => `
              <article class="credit-score-card">
                <span class="credit-bureau">${escapeHtml(item.bureau)}</span>
                <strong class="credit-score">${escapeHtml(item.score)}</strong>
                <span class="credit-rating">${escapeHtml(item.rating)}</span>
              </article>
            `).join("")}
          </div>
        </section>
      </section>

      <aside class="card credit-extract-card">
        <header class="credit-extract-head">
          <div class="credit-extract-title">
            <span class="glade-icon" aria-hidden="true"></span>
            <strong>Extracted data</strong>
          </div>
          <div class="credit-extract-actions">
            <button class="credit-pill-button" type="button" data-copy-report-id="${escapeHtml(task.id)}">Copy</button>
            <button class="credit-pill-button" type="button" data-task-action="collapse">Hide</button>
          </div>
        </header>
        <pre class="credit-extract-body">${extractedJson}</pre>
      </aside>
    </div>
  `;
}

function renderTaskView(route) {
  const tasks = getTaskPagesForFirm(route.firmId);
  const workflows = getWorkflowPagesForFirm(route.firmId);
  const fallbackTask = route.firmId === "glade" ? tasks["glade-business-assets-checklist"] : tasks["bankruptcy-document-checklist"];
  const task = tasks[route.taskId] || fallbackTask;
  const workflow = workflows[task.workflowId] || (route.firmId === "glade" ? workflows["glade-onboarding"] : workflows["chapter-7"]);
  const isCreditReportTask = task.layout === "credit-report";

  return `
    ${renderBreadcrumbs([
      { label: "Home", route: getHomeHashForFirm(route.firmId) },
      { label: workflow.title, route: makeFirmHash(route.firmId, "workflow", workflow.id) },
      { label: task.title }
    ])}

    <section class="detail-hero">
      <h1>${escapeHtml(task.title)}</h1>
      <p>${escapeHtml(task.summary)}</p>
    </section>

    ${isCreditReportTask
      ? renderCreditReportTask(task)
      : `
      <div class="task-hero-actions">
        <button class="button button-primary task-submit-button" type="button" data-task-action="submit">
          <span class="button-icon" aria-hidden="true">${phosphorIcon("paper-plane-right")}</span>
          <span>${escapeHtml(task.ctaLabel)}</span>
        </button>
      </div>

      <div class="detail-layout">
        <div class="detail-main detail-stack">
          ${renderChecklistRows(task)}
        </div>
        <div class="detail-side">
          ${renderCaseChatPanel()}
        </div>
      </div>
    `}

    ${renderFooter()}
  `;
}

function renderSupportView() {
  return `
    ${renderBreadcrumbs([
      { label: "Home", route: getHomeHashForFirm(state.firmId) },
      { label: "Support Chat" }
    ])}
    <section class="card support-page-card">
      <h1>Support Chat</h1>
      <p>Use the Support Chat button in the header to continue this conversation.</p>
    </section>
    ${renderFooter()}
  `;
}

function resolveRoute() {
  if (state.route.name === "support") {
    return renderSupportView();
  }
  if (state.route.name === "workflow") {
    return renderWorkflowView(state.route);
  }
  if (state.route.name === "task") {
    return renderTaskView(state.route);
  }
  return renderHomeView();
}

function getMobileSlides() {
  return Array.from(elements.appView.querySelectorAll("[data-mobile-groups]"))
    .sort((left, right) => Number(getComputedStyle(left).order) - Number(getComputedStyle(right).order));
}

function updateMobileCarouselPagination() {
  const pagination = elements.appView.querySelector("#mobile-carousel-pagination");
  if (!pagination) {
    return;
  }

  const slides = getMobileSlides();
  const activeSlide = slides[state.mobileCarouselIndex];
  const label = activeSlide?.querySelector(".card-label")?.textContent?.trim() || `Section ${state.mobileCarouselIndex + 1}`;
  const labelNode = pagination.querySelector(".mobile-carousel-label");

  if (labelNode) {
    labelNode.textContent = label;
  }

  pagination.querySelectorAll("[data-carousel-index]").forEach((dot, index) => {
    const active = index === state.mobileCarouselIndex;
    dot.classList.toggle("is-active", active);
    dot.setAttribute("aria-current", active ? "true" : "false");
  });
}

function syncMobileCarouselIndex() {
  if (!isMobileViewport()) {
    return;
  }

  const scroller = elements.appView.querySelector("#dashboard-grid");
  const slides = getMobileSlides();
  if (!slides.length || !scroller) {
    return;
  }

  const scrollerRect = scroller.getBoundingClientRect();
  const viewportCenter = scrollerRect.left + scrollerRect.width / 2;
  const closestIndex = slides.reduce((bestIndex, slide, index) => {
    const slideRect = slide.getBoundingClientRect();
    const slideCenter = slideRect.left + slideRect.width / 2;
    const bestRect = slides[bestIndex].getBoundingClientRect();
    const bestCenter = bestRect.left + bestRect.width / 2;
    return Math.abs(slideCenter - viewportCenter) < Math.abs(bestCenter - viewportCenter) ? index : bestIndex;
  }, 0);

  if (closestIndex !== state.mobileCarouselIndex) {
    state.mobileCarouselIndex = closestIndex;
    updateMobileCarouselPagination();
  }
}

function renderMobileCarouselPagination() {
  const pagination = elements.appView.querySelector("#mobile-carousel-pagination");
  if (!pagination) {
    return;
  }

  const slides = getMobileSlides();
  const activeSlide = slides[state.mobileCarouselIndex] || slides[0];
  const activeLabel = activeSlide?.querySelector(".card-label")?.textContent?.trim() || "Section 1";
  const dotsMarkup = slides.map((slide, index) => {
    const label = slide.querySelector(".card-label")?.textContent?.trim() || `Section ${index + 1}`;
    const active = index === state.mobileCarouselIndex;
    return `
      <button
        class="carousel-dot ${active ? "is-active" : ""}"
        type="button"
        data-carousel-index="${index}"
        aria-label="Show ${escapeHtml(label)}"
        aria-current="${active ? "true" : "false"}"
      ></button>
    `;
  }).join("");

  pagination.innerHTML = `
    <span class="mobile-carousel-label">${escapeHtml(activeLabel)}</span>
    <div class="mobile-carousel-dots" role="presentation">${dotsMarkup}</div>
  `;

  pagination.querySelectorAll("[data-carousel-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const slide = slides[Number(button.dataset.carouselIndex)];
      if (!slide) {
        return;
      }
      state.mobileCarouselIndex = Number(button.dataset.carouselIndex);
      updateMobileCarouselPagination();
      const scroller = elements.appView.querySelector("#dashboard-grid");
      if (scroller) {
        scroller.scrollTo({
          left: slide.offsetLeft - scroller.offsetLeft,
          behavior: "smooth"
        });
      }
    });
  });
}

function syncMobileStickyChrome() {
  const pagination = elements.appView.querySelector("#mobile-carousel-pagination");

  if (!elements.topbar || !pagination) {
    document.documentElement.style.setProperty("--mobile-topbar-height", "0px");
    return;
  }

  if (!isMobileViewport()) {
    document.documentElement.style.setProperty("--mobile-topbar-height", "0px");
    pagination.classList.remove("is-stuck");
    return;
  }

  const headerHeight = elements.topbar.offsetHeight;
  document.documentElement.style.setProperty("--mobile-topbar-height", `${headerHeight}px`);

  const paginationRect = pagination.getBoundingClientRect();
  const headerRect = elements.topbar.getBoundingClientRect();
  const stuck = paginationRect.top <= headerRect.bottom + 1;
  pagination.classList.toggle("is-stuck", stuck);
}

function applyResponsiveSections() {
  renderMobileCarouselPagination();
  syncMobileStickyChrome();

  const scroller = elements.appView.querySelector("#dashboard-grid");
  if (scroller && !scroller.dataset.carouselBound) {
    scroller.addEventListener("scroll", syncMobileCarouselIndex, { passive: true });
    scroller.dataset.carouselBound = "true";
  }
  syncMobileCarouselIndex();
}

function scrollToTeamSection() {
  if (!isMobileViewport()) return;
  var grid = elements.appView.querySelector("#dashboard-grid");
  var team = elements.appView.querySelector("#section-team");
  if (!grid || !team) return;
  var pos = team.offsetLeft - grid.offsetLeft;
  grid.scrollLeft = pos;
  syncMobileCarouselIndex();
}

function hydrateStaticIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = phosphorIcon(node.dataset.icon);
  });
}

function openDetailModal(label, title, bodyMarkup, actionsMarkup, onBind) {
  elements.modalLabel.textContent = label;
  elements.modalTitle.textContent = title;
  elements.modalBody.innerHTML = bodyMarkup;
  elements.modalActions.innerHTML = actionsMarkup;
  if (typeof onBind === "function") {
    onBind();
  }
  openPanel("detail");
}

function openTeamDetail(teamId) {
  const member = state.team.find((item) => item.id === teamId);
  if (!member) {
    return;
  }

  openDetailModal(
    "Team contact",
    member.name,
    `
      <div class="modal-summary">
        <div class="chip-row">
          <span class="avatar avatar-large" style="background:${member.gradient}">
            <img class="avatar-image" src="${member.avatar}" alt="">
          </span>
          <div>
            <strong>${escapeHtml(member.role)}</strong>
            <p>${escapeHtml(member.summary)}</p>
          </div>
        </div>
      </div>
      <div class="chip-row">
        <span class="chip">${escapeHtml(state.teamContact.email)}</span>
        <span class="chip">${escapeHtml(state.teamContact.phone)}</span>
      </div>
    `,
    `
      <button class="button button-secondary" id="modal-dismiss-button" type="button">Close</button>
      <button class="button button-primary" id="team-message-button" type="button">Message in support chat</button>
    `,
    () => {
      document.getElementById("modal-dismiss-button").addEventListener("click", closePanels);
      document.getElementById("team-message-button").addEventListener("click", () => {
        closePanels();
        openPanel("support");
      });
    }
  );
}

function openResourceDetail(resourceId) {
  const resource = state.resources.flatMap((group) => group.items).find((item) => item.id === resourceId);
  if (!resource) {
    return;
  }

  openDetailModal(
    "Resource",
    resource.title,
    `
      <div class="modal-summary">
        <strong>${escapeHtml(resource.description)}</strong>
        <p>${escapeHtml(resource.detail)}</p>
      </div>
      <p>This prototype keeps the resource inside the portal flow, but in production this action can route to a PDF, video, or secure external page.</p>
    `,
    `
      <button class="button button-secondary" id="modal-dismiss-button" type="button">Close</button>
      <button class="button button-primary" id="resource-ack-button" type="button">Mark as reviewed</button>
    `,
    () => {
      document.getElementById("modal-dismiss-button").addEventListener("click", closePanels);
      document.getElementById("resource-ack-button").addEventListener("click", () => {
        closePanels();
        showToast(`${resource.title} added to your reviewed list.`);
      });
    }
  );
}

function openMeetingDetail() {
  const title = state.meeting.title;
  const subtitle = state.meeting.subtitle;
  openDetailModal(
    "Upcoming meeting",
    title,
    `
      <div class="modal-summary">
        <strong>${escapeHtml(subtitle)}</strong>
        <p>${state.meeting.pending ? "This meeting is pending scheduling. Use the View action to choose a date and time." : "Your team has scheduled the meeting and will share final prep instructions in the portal."}</p>
      </div>
      <ul>
        <li>Bring the key documents requested by your team.</li>
        <li>Share any questions in case chat before your meeting.</li>
        <li>Join ten minutes early if the meeting is virtual.</li>
      </ul>
    `,
    `
      <button class="button button-secondary" id="modal-dismiss-button" type="button">Close</button>
      <button class="button button-primary" id="meeting-prepare-button" type="button">Add reminder</button>
    `,
    () => {
      document.getElementById("modal-dismiss-button").addEventListener("click", closePanels);
      document.getElementById("meeting-prepare-button").addEventListener("click", () => {
        closePanels();
        showToast("Reminder added for the creditors meeting.");
      });
    }
  );
}

function openPaymentDetail() {
  openDetailModal(
    "Payment plan",
    "Remaining Balance",
    `
      <div class="modal-summary">
        <strong>${escapeHtml(state.payments.remainingBalance)} outstanding</strong>
        <p>This balance reflects the remaining fees on your active matter. Payments already posted are included in the progress bar.</p>
      </div>
      <ul>
        <li>Next scheduled payment can be configured from your payment plan.</li>
        <li>Auto-pay preferences can be updated with your onboarding team.</li>
        <li>Need a different plan? Message accounting from this portal.</li>
      </ul>
    `,
    `
      <button class="button button-secondary" id="modal-dismiss-button" type="button">Close</button>
      <button class="button button-primary" id="payment-message-button" type="button">Contact accounting</button>
    `,
    () => {
      document.getElementById("modal-dismiss-button").addEventListener("click", closePanels);
      document.getElementById("payment-message-button").addEventListener("click", () => {
        closePanels();
        openPanel("support");
        showToast("Accounting has been added to your next support message.");
      });
    }
  );
}

function openNotifications() {
  openDetailModal(
    "Notifications",
    "Recent updates",
    `
      <div class="bullet-list">
        ${state.notifications.map((note, index) => `
          <div class="bullet-item">
            <span class="status-dot ${index === 0 ? "is-orange" : index === 1 ? "is-green" : "is-gray"}"></span>
            <p>${escapeHtml(note)}</p>
          </div>
        `).join("")}
      </div>
    `,
    `
      <button class="button button-secondary" id="modal-dismiss-button" type="button">Close</button>
    `,
    () => {
      document.getElementById("modal-dismiss-button").addEventListener("click", closePanels);
    }
  );
}

function handleChatSubmit(event) {
  event.preventDefault();
  const input = event.currentTarget.querySelector("input");
  if (!input) {
    return;
  }

  const value = input.value.trim();
  if (!value) {
    return;
  }

  appendChatMessage(value, "user");
  appendChatMessage("Thanks. Your team has the message and will follow up in this portal thread.", "support");
  input.value = "";
  elements.chatInput.value = "";
  elements.mobileChatInput.value = "";
  renderChatSurfaces();
}

function renderChatSurfaces() {
  const markup = renderChatEntries();
  elements.chatThread.innerHTML = markup;
  elements.mobileChatThread.innerHTML = markup;
  elements.chatThread.scrollTop = elements.chatThread.scrollHeight;
  elements.mobileChatThread.scrollTop = elements.mobileChatThread.scrollHeight;

  const caseThread = elements.appView.querySelector(".case-chat-thread");
  if (caseThread) {
    caseThread.innerHTML = markup;
    caseThread.scrollTop = caseThread.scrollHeight;
  }

  const supportThread = elements.appView.querySelector(".support-page-thread");
  if (supportThread) {
    supportThread.innerHTML = renderChatEntries(state.supportPage.messages);
    supportThread.scrollTop = supportThread.scrollHeight;
  }

  const mobileLabel = state.route.name === "home" || state.route.name === "support" ? "Support Chat" : "Case Chat";
  elements.mobileChatTitle.textContent = mobileLabel;
  elements.mobileChatDock.setAttribute("aria-label", mobileLabel);
}

function bindViewEvents() {
  elements.appView.querySelectorAll("[data-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      navigateTo(button.dataset.nav);
    });
  });

  elements.appView.querySelectorAll("[data-team-id]").forEach((button) => {
    button.addEventListener("click", () => openTeamDetail(button.dataset.teamId));
  });

  elements.appView.querySelectorAll("[data-resource-id]").forEach((button) => {
    button.addEventListener("click", () => openResourceDetail(button.dataset.resourceId));
  });

  elements.appView.querySelectorAll("[data-download]").forEach((button) => {
    button.addEventListener("click", () => {
      showToast(`${button.dataset.download} download can be connected here.`);
    });
  });

  elements.appView.querySelectorAll("[data-copy-report-id]").forEach((button) => {
    button.addEventListener("click", async () => {
      const reportTask = getTaskPagesForFirm(state.firmId)[button.dataset.copyReportId];
      const reportJson = JSON.stringify(reportTask?.extractedData || {}, null, 2);
      try {
        await navigator.clipboard.writeText(reportJson);
        showToast("Extracted data copied.");
      } catch {
        showToast("Clipboard access is blocked in this browser context.");
      }
    });
  });

  elements.appView.querySelectorAll("[data-tree-toggle]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const nodeId = button.dataset.treeToggle;
      state.documentTreeExpanded[nodeId] = !state.documentTreeExpanded[nodeId];
      renderApp();
    });
  });

  elements.appView.querySelectorAll("[data-task-action]").forEach((button) => {
    button.addEventListener("click", () => {
      showToast("This action can be connected in production.");
    });
  });

  const meetingButton = elements.appView.querySelector("#meeting-button");
  if (meetingButton) {
    meetingButton.addEventListener("click", openMeetingDetail);
  }

  const paymentButton = elements.appView.querySelector("#payment-plan-button");
  if (paymentButton) {
    paymentButton.addEventListener("click", openPaymentDetail);
  }

  elements.appView.querySelectorAll("[data-chat-form]").forEach((form) => {
    form.addEventListener("submit", handleChatSubmit);
  });
}

function renderApp() {
  const route = parseHash();
  if (route.firmId !== state.firmId) {
    applyFirmContext(route.firmId);
  }
  state.route = route;
  syncHeaderForFirm();

  const pageMarkup = resolveRoute();
  elements.appView.innerHTML = pageMarkup;
  elements.appView.classList.toggle("page-content-neutral", route.name !== "home");
  hydrateStaticIcons(elements.appView);
  bindViewEvents();
  renderChatSurfaces();
  state.mobileCarouselIndex = 0;
  applyResponsiveSections();
  // Multiple scroll attempts to beat layout timing
  scrollToTeamSection();
  requestAnimationFrame(function() {
    scrollToTeamSection();
    requestAnimationFrame(function() {
      scrollToTeamSection();
    });
  });
  setTimeout(scrollToTeamSection, 100);
  setTimeout(scrollToTeamSection, 300);
  setTimeout(scrollToTeamSection, 600);
}

function initEvents() {
  document.getElementById("support-chat-button").addEventListener("click", () => {
    openPanel("support");
  });
  document.getElementById("support-close-button").addEventListener("click", closePanels);
  document.getElementById("modal-close-button").addEventListener("click", closePanels);
  document.getElementById("notifications-button").addEventListener("click", openNotifications);
  elements.firmSwitcher.addEventListener("change", (event) => {
    const nextFirm = event.target.value === "glade" ? "glade" : "van-horn";
    const nextHash = getHomeHashForFirm(nextFirm);
    closePanels();
    closeProfileMenu();
    navigateTo(nextHash);
  });

  elements.profileButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleProfileMenu();
  });

  elements.profileMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  elements.accountSettingsButton.addEventListener("click", () => {
    closeProfileMenu();
    showToast("Account settings can be connected here.");
  });

  elements.logoutButton.addEventListener("click", () => {
    closeProfileMenu();
    showToast("Logout action can be connected here.");
  });

  elements.overlay.addEventListener("click", () => {
    closePanels();
    closeProfileMenu();
  });

  elements.chatForm.addEventListener("submit", handleChatSubmit);
  elements.mobileChatForm.addEventListener("submit", handleChatSubmit);
  elements.mobileChatToggle.addEventListener("click", () => {
    setMobileChatExpanded(!elements.mobileChatDock.classList.contains("is-expanded"));
  });

  window.addEventListener("hashchange", () => {
    closePanels();
    window.scrollTo({ top: 0, behavior: "auto" });
    renderApp();
  });

  window.addEventListener("scroll", syncMobileCarouselIndex, { passive: true });
  window.addEventListener("scroll", syncMobileStickyChrome, { passive: true });
  window.addEventListener("resize", applyResponsiveSections);
  document.addEventListener("click", closeProfileMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePanels();
      closeProfileMenu();
    }
  });
}

function init() {
  hydrateStaticIcons();
  renderApp();
  initEvents();
}

init();
