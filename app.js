const state = {
  progressPercent: 51,
  completedTasks: 8,
  totalTasks: 14,
  toastTimer: null,
  activePanel: null,
  activeTaskId: null,
  mobileCarouselIndex: 0,
  tasks: [
    {
      id: "retainer",
      icon: "signature",
      title: "Sign retainer agreement",
      subtitle: "Chapter 7 Bankruptcy Terms & Conditions",
      summary: "Your attorney needs a signed engagement agreement before the filing can move into attorney review.",
      detailLabel: "Legal intake",
      actionLabel: "Mark as signed",
      checklist: [
        "Review the terms and conditions carefully.",
        "Confirm your legal name and mailing address are correct.",
        "Submit the signed agreement to unlock the petition review stage."
      ],
      completed: false
    },
    {
      id: "documents",
      icon: "upload",
      title: "Upload required documents",
      subtitle: "3 of 4 documents uploaded",
      summary: "There is one remaining document needed for your filing packet.",
      detailLabel: "Documents",
      actionLabel: "Finish upload",
      checklist: [
        "W-2 from the most recent tax year is still missing.",
        "Bank statement uploads are already complete.",
        "Once the last document is uploaded, your team can validate the packet."
      ],
      completed: false
    },
    {
      id: "questionnaire",
      icon: "list",
      title: "Complete bankruptcy client questionnaire",
      subtitle: "Required before filing — certificate needed",
      summary: "This questionnaire captures the remaining facts your team needs before they prepare the final petition.",
      detailLabel: "Questionnaire",
      actionLabel: "Complete questionnaire",
      checklist: [
        "Answer household and creditor questions.",
        "Attach the counseling certificate if you already have it.",
        "Review the final summary before submission."
      ],
      completed: false
    },
    {
      id: "petition",
      icon: "signature",
      title: "Review Petition Draft",
      subtitle: "Your attorney will share this when ready",
      summary: "This step unlocks after the retainer, documents, and questionnaire are complete.",
      detailLabel: "Attorney review",
      actionLabel: "Acknowledge review",
      checklist: [
        "Your attorney prepares the petition draft.",
        "You review the case summary for accuracy.",
        "Any final corrections are submitted before filing."
      ],
      completed: false,
      dependsOn: ["retainer", "documents", "questionnaire"]
    }
  ],
  workflows: [
    {
      id: "chapter-7",
      title: "Chapter 7 Bankruptcy",
      badge: "Final Review",
      tone: "orange",
      summary: "Attorney review is in progress and the filing packet is almost ready.",
      bullets: [
        "Petition assembly is underway.",
        "The filing packet is waiting on the final portal actions.",
        "You will receive a confirmation as soon as the case is filed."
      ]
    },
    {
      id: "retainer-workflow",
      title: "Chapter 7 Retainer",
      badge: "Signed and completed",
      tone: "green",
      summary: "The retainer workflow is complete and archived in your matter file.",
      bullets: [
        "Signed agreement received.",
        "Matter opened in the legal operations system.",
        "Billing setup is active."
      ]
    },
    {
      id: "chapter-13",
      title: "Chapter 13 Retainer",
      badge: "Archived",
      tone: "gray",
      summary: "This workflow is closed and kept only for recordkeeping.",
      bullets: [
        "No current tasks remain on this workflow.",
        "Historical files are available on request."
      ],
      muted: true
    },
    {
      id: "call",
      title: "Initial Phone Conversation",
      badge: "Completed",
      tone: "green",
      summary: "Your first call with the intake team has been completed successfully.",
      bullets: [
        "Case goals were captured.",
        "Follow-up portal steps were created from the call.",
        "Team ownership is assigned."
      ]
    }
  ],
  team: [
    {
      id: "ricky",
      name: "Ricky Smith",
      role: "Lead Intake Attorney",
      initials: "RS",
      gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
      avatar: "https://www.figma.com/api/mcp/asset/18744495-dd8c-4d60-b59a-73e000059ff3",
      summary: "Primary attorney contact for filing strategy, petition review, and final approval."
    },
    {
      id: "ana",
      name: "Ana Gayoso",
      role: "Attorney",
      initials: "AG",
      gradient: "linear-gradient(135deg, #2563eb, #7c3aed)",
      avatar: "https://www.figma.com/api/mcp/asset/d58c8886-8ce8-4e4a-ad5a-c79ea16288a1",
      summary: "Supports legal review and will coordinate any additional disclosures your case needs."
    },
    {
      id: "sienna",
      name: "Sienna Park",
      role: "Paralegal",
      initials: "SP",
      gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
      avatar: "https://www.figma.com/api/mcp/asset/4b05613e-8da0-4122-ade1-fb2893812f62",
      summary: "Tracks questionnaire progress, case documents, and trustee prep materials."
    },
    {
      id: "abbi",
      name: "Abbi Mariano",
      role: "Documents team",
      initials: "AM",
      gradient: "linear-gradient(135deg, #10b981, #0ea5e9)",
      avatar: "https://www.figma.com/api/mcp/asset/9b417dd2-cf55-4942-982a-66c7099c9730",
      summary: "Validates uploads and makes sure the filing packet is complete."
    },
    {
      id: "ace",
      name: "Ace Perez",
      role: "Trustee Docs",
      initials: "AP",
      gradient: "linear-gradient(135deg, #1d4ed8, #06b6d4)",
      avatar: "https://www.figma.com/api/mcp/asset/fddf9eea-3cf0-4117-bd37-59c1a9334d13",
      summary: "Prepares trustee-facing materials and meeting packets."
    },
    {
      id: "antony",
      name: "Antony Otts",
      role: "Accounting",
      initials: "AO",
      gradient: "linear-gradient(135deg, #111827, #475569)",
      avatar: "https://www.figma.com/api/mcp/asset/71f8abc2-857b-49fa-b6ee-8712fcd0d339",
      summary: "Can help with balances, receipts, and payment-plan adjustments."
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
          detail: "Use this as a quick map of the filing journey from intake through discharge.",
          highlighted: true
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
        "Hi Lilian,",
        "We're ready to continue moving forward with your Chapter 7 filing and just need one quick item from you to proceed. When you have a moment, please complete the task below so our team can continue preparing your petition."
      ],
      replies: "3 replies",
      replyMeta: "Last reply today at 11:34 PM"
    },
    {
      id: "chat-2",
      role: "support",
      author: "Jane Paralegal",
      timestamp: "11:34 PM",
      avatar: "https://www.figma.com/api/mcp/asset/d58c8886-8ce8-4e4a-ad5a-c79ea16288a1",
      badge: "TASK",
      taskStatus: "Document rejected",
      taskTitle: "Chapter 7 - Client Document Checklist",
      taskDescription: "A photo of you holding your Driver's License and Social Security card is still needed.",
      body: [
        "Reason: Please re-upload a new photo of your Driver's License."
      ],
      replies: "3 replies",
      replyMeta: "Last reply today at 11:34 PM"
    },
    {
      id: "chat-3",
      role: "user",
      author: "Lilian",
      timestamp: "11:34 PM",
      avatar: "https://www.figma.com/api/mcp/asset/18744495-dd8c-4d60-b59a-73e000059ff3",
      body: [
        "Sure, I'll upload a new photo now."
      ]
    }
  ]
};

const elements = {
  topbar: document.querySelector(".topbar"),
  overlay: document.getElementById("overlay"),
  supportSheet: document.getElementById("support-sheet"),
  detailModal: document.getElementById("detail-modal"),
  dashboardGrid: document.getElementById("dashboard-grid"),
  mobileCarouselPagination: document.getElementById("mobile-carousel-pagination"),
  tasksList: document.getElementById("tasks-list"),
  workflowsList: document.getElementById("workflows-list"),
  teamList: document.getElementById("team-list"),
  resourcesList: document.getElementById("resources-list"),
  chatThread: document.getElementById("chat-thread"),
  mobileChatThread: document.getElementById("mobile-chat-thread"),
  progressFill: document.getElementById("progress-fill"),
  progressText: document.getElementById("progress-text"),
  progressBadge: document.getElementById("progress-badge"),
  nextStepsCount: document.getElementById("next-steps-count"),
  workflowCount: document.getElementById("workflow-count"),
  heroOpenCount: document.getElementById("hero-open-count"),
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
  mobileChatForm: document.getElementById("mobile-chat-form"),
  mobileChatInput: document.getElementById("mobile-chat-input")
};

function phosphorIcon(name) {
  const common = 'viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"';
  const icons = {
    "signature": `<svg ${common}><path d="M36 184c31.64-37.38 61.82-56 90.52-56 19.24 0 31.48 9.06 31.48 23.34 0 24.75-34.08 34.66-55.79 28.82-18.94-5.1-24.34-22.75-9.94-33.65 12.24-9.26 32.21-17.36 49.41-31.58C161.2 98.8 176.9 76.39 188 44"></path><path d="M181.33 54.67 212 44l10.67 30.67"></path></svg>`,
    "file-arrow-up": `<svg ${common}><path d="M148 36H80a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20V84Z"></path><path d="M148 36v48h48"></path><path d="m128 164 0-56"></path><path d="m104 132 24-24 24 24"></path></svg>`,
    "list-bullets": `<svg ${common}><path d="M88 64h120"></path><path d="M88 128h120"></path><path d="M88 192h120"></path><circle cx="44" cy="64" r="12"></circle><circle cx="44" cy="128" r="12"></circle><circle cx="44" cy="192" r="12"></circle></svg>`,
    "chats-circle": `<svg ${common}><path d="M84 108h88"></path><path d="M84 140h56"></path><path d="M196 196a88 88 0 1 1 24-60.77L232 208Z"></path></svg>`,
    "question": `<svg ${common}><path d="M127.99 176v-16"></path><path d="M99.53 96a32 32 0 1 1 56.94 20.2c-15.12 16.8-28.48 24-28.48 43.8"></path><circle cx="128" cy="128" r="96"></circle></svg>`,
    "bell": `<svg ${common}><path d="M144 228a24 24 0 0 1-48 0"></path><path d="M56.18 168A8 8 0 0 0 64 178h128a8 8 0 0 0 7.82-10c-6.39-25.56-8-41.9-8-72a64 64 0 1 0-128 0c0 30.1-1.61 46.44-8 72"></path></svg>`,
    "calendar-x": `<svg ${common}><path d="M184 40v24"></path><path d="M72 40v24"></path><path d="M216 88H40"></path><rect x="40" y="56" width="176" height="160" rx="16"></rect><path d="m116 144 24 24"></path><path d="m140 144-24 24"></path></svg>`,
    "x": `<svg ${common}><path d="M200 56 56 200"></path><path d="m56 56 144 144"></path></svg>`,
    "plus": `<svg ${common}><path d="M128 56v144"></path><path d="M56 128h144"></path></svg>`,
    "caret-up": `<svg ${common}><path d="m56 160 72-72 72 72"></path></svg>`,
    "paper-plane-right": `<svg ${common}><path d="M224 128 32 48l48 80-48 80 192-80z"></path><path d="M80 128h80"></path></svg>`,
    "arrow-up-right": `<svg ${common}><path d="M104 152 200 56"></path><path d="M128 56h72v72"></path></svg>`
  };
  return icons[name] || icons["list-bullets"];
}

function isMobileViewport() {
  return window.innerWidth <= 720;
}

function getMobileSlides() {
  return Array.from(document.querySelectorAll("[data-mobile-groups]"))
    .sort((left, right) => Number(getComputedStyle(left).order) - Number(getComputedStyle(right).order));
}

function updateMobileCarouselPagination() {
  const slides = getMobileSlides();
  const activeSlide = slides[state.mobileCarouselIndex];
  const label = activeSlide?.querySelector(".card-label")?.textContent?.trim() || `Section ${state.mobileCarouselIndex + 1}`;
  const labelNode = elements.mobileCarouselPagination.querySelector(".mobile-carousel-label");
  if (labelNode) {
    labelNode.textContent = label;
  }

  const dots = elements.mobileCarouselPagination.querySelectorAll("[data-carousel-index]");
  dots.forEach((dot, index) => {
    const active = index === state.mobileCarouselIndex;
    dot.classList.toggle("is-active", active);
    dot.setAttribute("aria-current", active ? "true" : "false");
  });
}

function syncMobileCarouselIndex() {
  if (!isMobileViewport()) {
    return;
  }

  const slides = getMobileSlides();
  if (!slides.length) {
    return;
  }

  const containerRect = elements.dashboardGrid.getBoundingClientRect();
  const containerCenter = containerRect.left + containerRect.width / 2;

  const closestIndex = slides.reduce((bestIndex, slide, index) => {
    const slideRect = slide.getBoundingClientRect();
    const slideCenter = slideRect.left + slideRect.width / 2;
    const bestRect = slides[bestIndex].getBoundingClientRect();
    const bestCenter = bestRect.left + bestRect.width / 2;
    return Math.abs(slideCenter - containerCenter) < Math.abs(bestCenter - containerCenter) ? index : bestIndex;
  }, 0);

  if (closestIndex !== state.mobileCarouselIndex) {
    state.mobileCarouselIndex = closestIndex;
    updateMobileCarouselPagination();
  }
}

function renderMobileCarouselPagination() {
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

  elements.mobileCarouselPagination.innerHTML = `
    <span class="mobile-carousel-label">${escapeHtml(activeLabel)}</span>
    <div class="mobile-carousel-dots" role="presentation">
      ${dotsMarkup}
    </div>
  `;

  elements.mobileCarouselPagination.querySelectorAll("[data-carousel-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const slide = slides[Number(button.dataset.carouselIndex)];
      if (!slide) {
        return;
      }
      state.mobileCarouselIndex = Number(button.dataset.carouselIndex);
      updateMobileCarouselPagination();
      elements.dashboardGrid.scrollTo({
        left: slide.offsetLeft - elements.dashboardGrid.offsetLeft,
        behavior: "smooth"
      });
    });
  });
}

function syncMobileStickyChrome() {
  if (!elements.topbar) {
    return;
  }

  if (!isMobileViewport()) {
    document.documentElement.style.setProperty("--mobile-topbar-height", "0px");
    elements.mobileCarouselPagination.classList.remove("is-stuck");
    return;
  }

  const headerHeight = elements.topbar.offsetHeight;
  document.documentElement.style.setProperty("--mobile-topbar-height", `${headerHeight}px`);

  const paginationRect = elements.mobileCarouselPagination.getBoundingClientRect();
  const headerRect = elements.topbar.getBoundingClientRect();
  const stuck = paginationRect.top <= headerRect.bottom + 1;
  elements.mobileCarouselPagination.classList.toggle("is-stuck", stuck);
}

function setMobileChatExpanded(expanded) {
  elements.mobileChatDock.classList.toggle("is-expanded", expanded);
  elements.mobileChatDock.setAttribute("aria-expanded", String(expanded));
  elements.mobileChatToggle.setAttribute("aria-expanded", String(expanded));
  if (expanded && isMobileViewport()) {
    window.setTimeout(() => elements.mobileChatInput.focus(), 40);
  }
}

function iconMarkup(type) {
  const map = {
    signature: "signature",
    upload: "file-arrow-up",
    list: "list-bullets"
  };
  return phosphorIcon(map[type] || "list-bullets");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTaskById(id) {
  return state.tasks.find((task) => task.id === id);
}

function isTaskLocked(task) {
  if (!task.dependsOn) {
    return false;
  }
  return task.dependsOn.some((dependencyId) => !getTaskById(dependencyId).completed);
}

function openTaskCount() {
  return state.tasks.filter((task) => !task.completed).length;
}

function renderProgress() {
  elements.progressFill.style.width = `${state.progressPercent}%`;
  elements.progressText.textContent = `${state.completedTasks}/${state.totalTasks} tasks completed`;
  elements.progressBadge.textContent = `${state.progressPercent}%`;
  elements.nextStepsCount.textContent = String(openTaskCount());
  elements.workflowCount.textContent = String(state.workflows.length);
  if (elements.heroOpenCount) {
    elements.heroOpenCount.textContent = `${openTaskCount()} active items`;
  }
}

function renderTasks() {
  elements.tasksList.innerHTML = state.tasks.map((task) => {
    const locked = isTaskLocked(task);
    const completed = task.completed;
    const buttonLabel = completed ? "Completed" : "View";
    const itemClasses = ["task-item"];
    if (locked) {
      itemClasses.push("is-disabled");
    }
    if (completed) {
      itemClasses.push("is-done");
    }

    return `
      <article class="${itemClasses.join(" ")}">
        <div class="icon-frame" aria-hidden="true">${iconMarkup(task.icon)}</div>
        <div class="item-copy">
          <h3 class="item-title">${escapeHtml(task.title)}</h3>
          <p class="item-subtitle">${escapeHtml(task.subtitle)}</p>
        </div>
        ${locked ? "" : `
          <button class="task-action" type="button" data-task-id="${task.id}">
            ${buttonLabel}
          </button>
        `}
      </article>
    `;
  }).join("");

  elements.tasksList.querySelectorAll("[data-task-id]").forEach((button) => {
    button.addEventListener("click", () => {
      openTaskDetail(button.dataset.taskId);
    });
  });
}

function renderWorkflows() {
  elements.workflowsList.innerHTML = state.workflows.map((workflow) => {
    const dotClass = workflow.tone === "orange"
      ? "is-orange"
      : workflow.tone === "gray"
        ? "is-gray"
        : "is-green";
    const badgeClass = dotClass;
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
          <span class="status-badge ${badgeClass}">${escapeHtml(workflow.badge)}</span>
        </div>
        <button class="workflow-action" type="button" data-workflow-id="${workflow.id}" ${workflow.muted ? "disabled" : ""}>
          View Details
        </button>
      </article>
    `;
  }).join("");

  elements.workflowsList.querySelectorAll("[data-workflow-id]").forEach((button) => {
    button.addEventListener("click", () => {
      openWorkflowDetail(button.dataset.workflowId);
    });
  });
}

function renderTeam() {
  const [featured, secondary] = state.team;
  elements.teamList.innerHTML = `
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

  elements.teamList.querySelectorAll("[data-team-id]").forEach((button) => {
    button.addEventListener("click", () => {
      openTeamDetail(button.dataset.teamId);
    });
  });
}

function renderResources() {
  elements.resourcesList.innerHTML = state.resources.map((group) => `
    <section class="resource-group">
      <h3 class="resource-group-title">${escapeHtml(group.group)}</h3>
      <div class="resource-list">
        ${group.items.map((item) => `
          <button class="resource-link ${item.highlighted ? "is-highlighted" : ""}" type="button" data-resource-id="${item.id}">
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

  elements.resourcesList.querySelectorAll("[data-resource-id]").forEach((button) => {
    button.addEventListener("click", () => {
      openResourceDetail(button.dataset.resourceId);
    });
  });
}

function renderChat() {
  const markup = state.chat.map((entry) => `
    <article class="chat-entry ${entry.role === "user" ? "is-user" : "is-support"}">
      <div class="chat-entry-head">
        <span class="chat-avatar" aria-hidden="true">
          <img class="avatar-image" src="${entry.avatar}" alt="">
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
          <div class="chat-bubble ${entry.role === "user" ? "is-user" : "is-support"}">
            ${entry.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
          </div>
          ${entry.replies ? `
            <div class="chat-replies">
              <span class="chat-replies-avatars" aria-hidden="true">
                <span class="chat-replies-avatar"><img class="avatar-image" src="${state.team[0].avatar}" alt=""></span>
                <span class="chat-replies-avatar"><img class="avatar-image" src="${state.team[1].avatar}" alt=""></span>
              </span>
              <strong>${escapeHtml(entry.replies)}</strong>
              <span>${escapeHtml(entry.replyMeta)}</span>
            </div>
          ` : ""}
        </div>
      </div>
    </article>
  `).join("");

  elements.chatThread.innerHTML = markup;
  elements.mobileChatThread.innerHTML = markup;
  elements.chatThread.scrollTop = elements.chatThread.scrollHeight;
  elements.mobileChatThread.scrollTop = elements.mobileChatThread.scrollHeight;
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
  state.toastTimer = setTimeout(() => {
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
    return;
  }

  closePanels();
  openProfileMenu();
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

function completeTask(taskId) {
  const task = getTaskById(taskId);
  if (!task || task.completed || isTaskLocked(task)) {
    return;
  }

  task.completed = true;
  state.completedTasks += 1;
  state.progressPercent = Math.min(state.progressPercent + 7, 100);
  renderProgress();
  renderTasks();
  closePanels();
  showToast(`${task.title} marked complete.`);
}

function openTaskDetail(taskId) {
  const task = getTaskById(taskId);
  if (!task) {
    return;
  }

  state.activeTaskId = taskId;
  const locked = isTaskLocked(task);
  const completeDisabled = locked || task.completed;

  elements.modalLabel.textContent = task.detailLabel;
  elements.modalTitle.textContent = task.title;
  elements.modalBody.innerHTML = `
    <div class="modal-summary">
      <strong>${escapeHtml(task.subtitle)}</strong>
      <p>${escapeHtml(task.summary)}</p>
    </div>
    <div class="chip-row">
      <span class="chip">${task.completed ? "Completed" : locked ? "Blocked" : "Ready now"}</span>
      <span class="chip">${escapeHtml(task.detailLabel)}</span>
    </div>
    <div class="bullet-list">
      ${task.checklist.map((item) => `
        <div class="bullet-item">
          <span class="status-dot ${task.completed ? "is-green" : locked ? "is-gray" : "is-orange"}"></span>
          <p>${escapeHtml(item)}</p>
        </div>
      `).join("")}
    </div>
  `;

  elements.modalActions.innerHTML = `
    <button class="button button-secondary" id="modal-dismiss-button" type="button">Close</button>
    <button class="button button-primary" id="task-complete-button" type="button" ${completeDisabled ? "disabled" : ""}>
      ${task.completed ? "Already completed" : task.actionLabel}
    </button>
  `;

  document.getElementById("modal-dismiss-button").addEventListener("click", closePanels);
  const taskCompleteButton = document.getElementById("task-complete-button");
  if (taskCompleteButton) {
    taskCompleteButton.addEventListener("click", () => completeTask(taskId));
  }

  openPanel("detail");
}

function openWorkflowDetail(workflowId) {
  const workflow = state.workflows.find((item) => item.id === workflowId);
  if (!workflow) {
    return;
  }

  elements.modalLabel.textContent = "Workflow";
  elements.modalTitle.textContent = workflow.title;
  elements.modalBody.innerHTML = `
    <div class="modal-summary">
      <strong>${escapeHtml(workflow.badge)}</strong>
      <p>${escapeHtml(workflow.summary)}</p>
    </div>
    <ul>
      ${workflow.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
    </ul>
  `;
  elements.modalActions.innerHTML = `
    <button class="button button-secondary" id="modal-dismiss-button" type="button">Close</button>
  `;
  document.getElementById("modal-dismiss-button").addEventListener("click", closePanels);
  openPanel("detail");
}

function openTeamDetail(teamId) {
  const member = state.team.find((item) => item.id === teamId);
  if (!member) {
    return;
  }

  elements.modalLabel.textContent = "Team contact";
  elements.modalTitle.textContent = member.name;
  elements.modalBody.innerHTML = `
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
  `;
  elements.modalActions.innerHTML = `
    <button class="button button-secondary" id="modal-dismiss-button" type="button">Close</button>
    <button class="button button-primary" id="team-message-button" type="button">Message in support chat</button>
  `;
  document.getElementById("modal-dismiss-button").addEventListener("click", closePanels);
  document.getElementById("team-message-button").addEventListener("click", () => {
    closePanels();
    openPanel("support");
    showToast(`Starting a conversation for ${member.name}.`);
  });
  openPanel("detail");
}

function openResourceDetail(resourceId) {
  const resource = state.resources.flatMap((group) => group.items).find((item) => item.id === resourceId);
  if (!resource) {
    return;
  }

  elements.modalLabel.textContent = "Resource";
  elements.modalTitle.textContent = resource.title;
  elements.modalBody.innerHTML = `
    <div class="modal-summary">
      <strong>${escapeHtml(resource.description)}</strong>
      <p>${escapeHtml(resource.detail)}</p>
    </div>
    <p>This prototype keeps the resource inside the portal flow, but in production this action can route to a PDF, video, or secure external page.</p>
  `;
  elements.modalActions.innerHTML = `
    <button class="button button-secondary" id="modal-dismiss-button" type="button">Close</button>
    <button class="button button-primary" id="resource-ack-button" type="button">Mark as reviewed</button>
  `;
  document.getElementById("modal-dismiss-button").addEventListener("click", closePanels);
  document.getElementById("resource-ack-button").addEventListener("click", () => {
    closePanels();
    showToast(`${resource.title} added to your reviewed list.`);
  });
  openPanel("detail");
}

function openMeetingDetail() {
  elements.modalLabel.textContent = "Upcoming meeting";
  elements.modalTitle.textContent = "341 Meeting of Creditors";
  elements.modalBody.innerHTML = `
    <div class="modal-summary">
      <strong>Friday, March 15 at 10:00 AM PST</strong>
      <p>Your team has scheduled the meeting and will share final prep instructions in the portal.</p>
    </div>
    <ul>
      <li>Bring the identity documents requested by your attorney.</li>
      <li>Review the trustee questions resource before the meeting.</li>
      <li>Join ten minutes early if the meeting is virtual.</li>
    </ul>
  `;
  elements.modalActions.innerHTML = `
    <button class="button button-secondary" id="modal-dismiss-button" type="button">Close</button>
    <button class="button button-primary" id="meeting-prepare-button" type="button">Add reminder</button>
  `;
  document.getElementById("modal-dismiss-button").addEventListener("click", closePanels);
  document.getElementById("meeting-prepare-button").addEventListener("click", () => {
    closePanels();
    showToast("Reminder added for the creditors meeting.");
  });
  openPanel("detail");
}

function openPaymentDetail() {
  elements.modalLabel.textContent = "Payment plan";
  elements.modalTitle.textContent = "Remaining Balance";
  elements.modalBody.innerHTML = `
    <div class="modal-summary">
      <strong>$2188.00 USD outstanding</strong>
      <p>This balance reflects the remaining fees on your active matter. Payments already posted are included in the progress bar.</p>
    </div>
    <ul>
      <li>Next scheduled payment: $350.00 on March 22.</li>
      <li>Auto-pay is active on the card ending in 1182.</li>
      <li>Need a different plan? Message accounting from this portal.</li>
    </ul>
  `;
  elements.modalActions.innerHTML = `
    <button class="button button-secondary" id="modal-dismiss-button" type="button">Close</button>
    <button class="button button-primary" id="payment-message-button" type="button">Contact accounting</button>
  `;
  document.getElementById("modal-dismiss-button").addEventListener("click", closePanels);
  document.getElementById("payment-message-button").addEventListener("click", () => {
    closePanels();
    openPanel("support");
    showToast("Accounting has been added to your next support message.");
  });
  openPanel("detail");
}

function openNotifications() {
  elements.modalLabel.textContent = "Notifications";
  elements.modalTitle.textContent = "Recent updates";
  elements.modalBody.innerHTML = `
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
  `;
  elements.modalActions.innerHTML = `
    <button class="button button-secondary" id="modal-dismiss-button" type="button">Close</button>
  `;
  document.getElementById("modal-dismiss-button").addEventListener("click", closePanels);
  openPanel("detail");
}

function handleChatSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const input = form.querySelector("input");
  const value = input.value.trim();
  if (!value) {
    return;
  }

  appendChatMessage(value, "user");
  appendChatMessage("Thanks. Your team has the message and will follow up in this portal thread.", "support");
  elements.chatInput.value = "";
  elements.mobileChatInput.value = "";
  input.value = "";
  renderChat();
}

function hydrateStaticIcons() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = phosphorIcon(node.dataset.icon);
  });
}

function applyResponsiveSections() {
  document.querySelectorAll("[data-mobile-groups]").forEach((section) => {
    section.classList.remove("hidden");
  });

  renderMobileCarouselPagination();
  syncMobileCarouselIndex();
  syncMobileStickyChrome();
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
  document.getElementById("meeting-button").addEventListener("click", openMeetingDetail);
  document.getElementById("payment-plan-button").addEventListener("click", openPaymentDetail);
  elements.overlay.addEventListener("click", () => {
    closePanels();
    closeProfileMenu();
  });
  elements.chatForm.addEventListener("submit", handleChatSubmit);
  elements.mobileChatForm.addEventListener("submit", handleChatSubmit);
  elements.mobileChatToggle.addEventListener("click", () => {
    setMobileChatExpanded(!elements.mobileChatDock.classList.contains("is-expanded"));
  });
  elements.dashboardGrid.addEventListener("scroll", syncMobileCarouselIndex, { passive: true });
  window.addEventListener("resize", applyResponsiveSections);
  window.addEventListener("scroll", syncMobileStickyChrome, { passive: true });
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
  renderProgress();
  renderTasks();
  renderWorkflows();
  renderTeam();
  renderResources();
  renderChat();
  applyResponsiveSections();
  initEvents();
}

init();
