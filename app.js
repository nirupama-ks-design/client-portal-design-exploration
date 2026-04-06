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

const state = {
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
      id: "ricky",
      name: "Ricky Smith",
      role: "Lead Intake Attorney",
      gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
      avatar: "https://www.figma.com/api/mcp/asset/18744495-dd8c-4d60-b59a-73e000059ff3",
      summary: "Primary attorney contact for filing strategy, petition review, and final approval."
    },
    {
      id: "ana",
      name: "Ana Gayoso",
      role: "Attorney",
      gradient: "linear-gradient(135deg, #2563eb, #7c3aed)",
      avatar: "https://www.figma.com/api/mcp/asset/d58c8886-8ce8-4e4a-ad5a-c79ea16288a1",
      summary: "Supports legal review and coordinates additional disclosures."
    },
    {
      id: "sienna",
      name: "Sienna Park",
      role: "Paralegal",
      gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
      avatar: "https://www.figma.com/api/mcp/asset/4b05613e-8da0-4122-ade1-fb2893812f62",
      summary: "Tracks questionnaire progress and case documents."
    },
    {
      id: "abbi",
      name: "Abbi Mariano",
      role: "Documents team",
      gradient: "linear-gradient(135deg, #10b981, #0ea5e9)",
      avatar: "https://www.figma.com/api/mcp/asset/9b417dd2-cf55-4942-982a-66c7099c9730",
      summary: "Validates uploads and keeps the filing packet complete."
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

state.route = parseHash();

const elements = {
  appView: document.getElementById("app-view"),
  topbar: document.querySelector(".topbar"),
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

  if (!parts.length || parts[0] === "home") {
    return { name: "home" };
  }

  if (parts[0] === "workflow" && parts[1]) {
    return {
      name: "workflow",
      workflowId: parts[1],
      tab: parts[2] || null
    };
  }

  if (parts[0] === "task" && parts[1]) {
    return {
      name: "task",
      taskId: parts[1]
    };
  }

  return { name: "home" };
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
    author: role === "user" ? "Lilian" : "Support team",
    timestamp: "Now",
    avatar: role === "user" ? state.team[0].avatar : state.team[1].avatar,
    body: [message]
  });
}

function getReplyAvatars() {
  return [
    state.team[0].avatar,
    state.team[1].avatar,
    state.team[2].avatar,
    state.team[3].avatar
  ];
}

function renderChatEntries() {
  const replyAvatars = getReplyAvatars();

  return state.chat.map((entry) => {
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
        <div class="icon-frame" aria-hidden="true">${phosphorIcon(task.icon === "upload" ? "file-arrow-up" : task.icon === "list" ? "list-bullets" : "signature")}</div>
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
      <h1>Good Afternoon, Lilian</h1>
      <h1 class="hero-mobile-title">Good Afternoon, Lilian</h1>
      <p class="hero-copy">
        Your Chapter 7 filing is <strong>29% complete</strong> — here's what needs your attention.
        <span class="sr-only">${state.tasks.filter((task) => !task.disabled).length} active items</span>
      </p>
      <p class="hero-copy hero-copy-mobile">
        Your Chapter 7 filing is <strong>29% complete</strong> — here's what needs your attention.
      </p>
    </section>

    ${renderProgressCard()}

    <p class="swipe-hint">Swipe to see your team, next steps, meetings & more</p>
    <div class="mobile-carousel-pagination" id="mobile-carousel-pagination" aria-label="Portal section carousel navigation"></div>

    <div class="dashboard-grid" id="dashboard-grid">
      <div class="main-column">
        <section class="card" id="section-team" data-mobile-groups="workflow" aria-labelledby="team-title">
          <div class="card-head">
            <div class="section-heading">
              <p class="card-label" id="team-title">Your Team</p>
            </div>
          </div>
          <div class="team-list">${renderTeamList()}</div>
        </section>

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
        <section class="card" id="section-meeting" data-mobile-groups="workflow" aria-labelledby="meeting-title">
          <div class="card-head">
            <div class="section-heading">
              <p class="card-label" id="meeting-title">Upcoming Meetings</p>
            </div>
          </div>
          <div class="stack-list">
            <button class="task-item meeting-item" id="meeting-button" type="button">
              <span class="icon-frame" aria-hidden="true">${phosphorIcon("calendar-x")}</span>
              <div class="item-copy">
                <p class="item-title">341 Meeting of Creditors</p>
                <p class="item-subtitle">10:00 AM PST on Friday, March 15</p>
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
            <div class="progress-row">
              <span>Remaining Balance</span>
              <strong>$2188.00 USD</strong>
            </div>
            <div class="progress-track progress-track-tight" aria-hidden="true">
              <div class="progress-fill payment-fill"></div>
            </div>
            <button class="button button-secondary button-block" id="payment-plan-button" type="button">View payment plan</button>
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
            data-nav="#workflow/${workflowId}${tab === "workflow" ? "" : `/${tab}`}"
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

function renderWorkflowView(route) {
  const page = workflowPages[route.workflowId] || workflowPages["chapter-7"];
  const activeTab = page.tabs.includes(route.tab) ? route.tab : page.defaultTab;

  let mainContent = "";
  if (activeTab === "documents" && page.documents) {
    mainContent = renderDocumentsView(page);
  } else if (activeTab === "invoices" && page.invoices) {
    mainContent = renderInvoicesView(page);
  } else {
    mainContent = page.sections.map(renderWorkflowStageCard).join("");
  }

  return `
    ${renderBreadcrumbs([
      { label: "Home", route: "#home" },
      { label: page.title }
    ])}

    <section class="detail-hero">
      <h1>${escapeHtml(page.title)}</h1>
      <p>${escapeHtml(page.summary)}</p>
    </section>

    ${renderProgressCard({
      progressPercent: page.progressPercent,
      completedTasks: page.completedTasks,
      totalTasks: page.totalTasks,
      compact: true
    })}

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

function renderTaskView(route) {
  const task = taskPages[route.taskId] || taskPages["bankruptcy-document-checklist"];
  const workflow = workflowPages[task.workflowId] || workflowPages["chapter-7"];

  return `
    ${renderBreadcrumbs([
      { label: "Home", route: "#home" },
      { label: workflow.title, route: `#workflow/${workflow.id}` },
      { label: task.title }
    ])}

    <section class="detail-hero">
      <h1>${escapeHtml(task.title)}</h1>
      <p>${escapeHtml(task.summary)}</p>
    </section>

    <div class="task-hero-actions">
      <button class="button button-primary task-submit-button" type="button" data-task-action="submit">
        <span class="button-icon" aria-hidden="true">${phosphorIcon("paper-plane-right")}</span>
        <span>${escapeHtml(task.ctaLabel)}</span>
      </button>
    </div>

    <div class="task-progress-line" aria-hidden="true">
      <div class="task-progress-line-fill" style="width:${task.progressPercent}%"></div>
    </div>

    <div class="detail-layout">
      <div class="detail-main detail-stack">
        ${renderChecklistRows(task)}
      </div>
      <div class="detail-side">
        ${renderCaseChatPanel()}
      </div>
    </div>

    ${renderFooter()}
  `;
}

function resolveRoute() {
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
    // Scroll to Your Team (index 0) on initial load
    scroller.scrollTo({ left: 0, behavior: "auto" });
  }
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
        <span class="chip">support@vanhornlaw.example</span>
        <span class="chip">(555) 010-2048</span>
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
  openDetailModal(
    "Upcoming meeting",
    "341 Meeting of Creditors",
    `
      <div class="modal-summary">
        <strong>Friday, March 15 at 10:00 AM PST</strong>
        <p>Your team has scheduled the meeting and will share final prep instructions in the portal.</p>
      </div>
      <ul>
        <li>Bring the identity documents requested by your attorney.</li>
        <li>Review the trustee questions resource before the meeting.</li>
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
        <strong>$2188.00 USD outstanding</strong>
        <p>This balance reflects the remaining fees on your active matter. Payments already posted are included in the progress bar.</p>
      </div>
      <ul>
        <li>Next scheduled payment: $350.00 on March 22.</li>
        <li>Auto-pay is active on the card ending in 1182.</li>
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
        <div class="bullet-item">
          <span class="status-dot is-orange"></span>
          <p>Your retainer agreement is ready for signature.</p>
        </div>
        <div class="bullet-item">
          <span class="status-dot is-green"></span>
          <p>Your Chapter 7 retainer workflow was archived successfully.</p>
        </div>
        <div class="bullet-item">
          <span class="status-dot is-gray"></span>
          <p>A reminder has been scheduled for the 341 Meeting of Creditors.</p>
        </div>
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

  const mobileLabel = state.route.name === "home" ? "Support Chat" : "Case Chat";
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
  state.route = route;

  const pageMarkup = resolveRoute();
  elements.appView.innerHTML = pageMarkup;
  elements.appView.classList.toggle("page-content-neutral", route.name !== "home");
  hydrateStaticIcons(elements.appView);
  bindViewEvents();
  renderChatSurfaces();
  state.mobileCarouselIndex = 0;
  applyResponsiveSections();
}

function initEvents() {
  document.getElementById("support-chat-button").addEventListener("click", () => openPanel("support"));
  document.getElementById("support-close-button").addEventListener("click", closePanels);
  document.getElementById("modal-close-button").addEventListener("click", closePanels);
  document.getElementById("notifications-button").addEventListener("click", openNotifications);

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
