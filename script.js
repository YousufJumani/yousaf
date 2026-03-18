const STORAGE_KEYS = {
  theme: "yn-portfolio-theme"
};

const defaultSocials = {
  github: "https://github.com/YousufJumani",
  linkedin: "https://www.linkedin.com/in/yousuf-nasurullah-a67960305?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  facebook: "https://www.facebook.com/share/19Q9x2iDpB/",
  instagram: "https://www.instagram.com/yousuvf?igsh=MWRvdWVvd2lhaXpoYg=="
};

const defaultProfile = {
  avatar: "assets/avatar.jpg",
  summary:
    "Software engineer building AI-first, full-stack, and automation-driven products with real-world use cases."
};

// ─────────────────────────────────────────────────────────────
// ADD A NEW PROJECT: copy the block below, paste it at the top
// of the array (before the first {), fill in your details, save.
//
// {
//   title: "Project Name",
//   year: "2026",
//   subtitle: "One-line pitch",
//   summary: "Short paragraph about the project.",
//   bullets: [
//     "What you built or solved.",
//     "Tech highlight or impact.",
//   ],
//   tags: ["React", "Node", "AI"],
//   image: "assets/your-screenshot.png",
//   previewImage: "assets/your-fullpage-preview.png", // optional (adds Open Preview button)
//   liveUrl: "https://yourproject.com",
//   githubUrl: "https://github.com/you/repo"
// },
// ─────────────────────────────────────────────────────────────
const defaultProjects = [
  {
    title: "AI Product Analytics Copilot",
    year: "2026",
    subtitle: "Full-stack SaaS intelligence dashboard with AI-assisted decisions",
    summary:
      "Developed a recruiter-grade SaaS analytics platform that unifies product, billing, and engineering signals with an AI copilot for strategic querying.",
    bullets: [
      "Integrated Stripe, GitHub, and OpenAI with multi-tenant auth and role-based access.",
      "Added observability, background jobs, caching, and robust automated test coverage."
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "OpenAI"],
    image: "assets/copilot.png",
    liveUrl: "https://product-analytics-dasboard.vercel.app/dashboard",
    githubUrl: ""
  },
  {
    title: "StoreIQ Dashboard",
    year: "2026",
    subtitle: "Full-stack business intelligence dashboard for real KPI visibility",
    summary:
      "Engineered an analytics platform that turns raw commerce data into decision-ready KPI views, customer insights, and exportable operations reporting.",
    bullets: [
      "Delivered React + Vite frontend visualizations with filtering and CSV export workflows.",
      "Built an Express + SQLite backend with deterministic seeded data for reliable demos."
    ],
    tags: ["React", "TypeScript", "Express", "SQLite", "Recharts"],
    image: "assets/storeiq.png",
    liveUrl: "https://store-iq-dashboard.vercel.app/overview",
    githubUrl: ""
  },
  {
    title: "Hair-Cast AI",
    year: "2025",
    subtitle: "Hair Impact Forecasting with Localized Weather and LLMs",
    summary:
      "An edge-first product that combines weather telemetry and LLM reasoning to generate context-aware hair-care recommendations.",
    bullets: [
      "Integrated Karachi-specific environmental signals like humidity and pollution.",
      "Used edge delivery patterns to target sub-100ms responses.",
      "Designed around secure, OWASP-conscious handling of user flows."
    ],
    tags: ["TypeScript", "React", "Tailwind CSS", "LLM", "Vercel Edge", "Lite"],
    image: "assets/Haircast.png",
    liveUrl: "https://hair-cast-ai.vercel.app/",
    githubUrl: "https://github.com/YousufJumani/HairCastAI"
  },
  {
    title: "RAG Support Chatbot",
    year: "2026",
    subtitle: "Multi-tenant AI customer support with retrieval-augmented generation",
    summary:
      "Built a production-style support assistant platform combining tenant isolation, document ingestion, and grounded LLM responses through RAG pipelines.",
    bullets: [
      "Implemented admin dashboard + public chat flows with secure tenant auth and API keys.",
      "Added document parsing, chunking, and retrieval fallback logic for resilient answers."
    ],
    tags: ["Node.js", "Express", "RAG", "SQLite", "OpenRouter", "JWT"],
    image: "assets/rag.png",
    liveUrl: "https://rag-chatbot-sandy-beta.vercel.app/",
    githubUrl: ""
  },
  {
    title: "IRONWAY Logistics",
    year: "2026",
    subtitle: "Premium logistics brand experience with motion-led storytelling",
    summary:
      "Designed and shipped a conversion-focused logistics showcase that pairs bold brand identity with interactive route and dispatch narratives.",
    bullets: [
      "Built a single-page flow with cinematic section transitions and operational storytelling.",
      "Focused on clarity, trust, and premium presentation for enterprise-facing logistics services."
    ],
    tags: ["Brand Web", "Interactive UI", "Storytelling", "Performance UX"],
    image: "assets/logistics.png",
    liveUrl: "https://logistics-website-kappa.vercel.app/",
    githubUrl: ""
  },
  {
    title: "LuxeSalon Booking Platform",
    year: "2026",
    subtitle: "Luxury online booking experience for premium salon services",
    summary:
      "Crafted an elegant booking product with polished service discovery, category-led navigation, and conversion-friendly UX tailored for high-end beauty brands.",
    bullets: [
      "Built responsive service catalog, team showcase, and testimonial flows for trust-building.",
      "Implemented with modern Next.js, React, TypeScript, and Tailwind architecture."
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Booking UX"],
    image: "assets/salon.png",
    liveUrl: "https://online-salon-booking.vercel.app/",
    githubUrl: ""
  },
  {
    title: "Online Clinic Website",
    year: "2026",
    subtitle: "Client healthcare website focused on trust, clarity, and lead generation",
    summary:
      "Built a polished online clinic website with conversion-first booking prompts, smooth section flow, and strong mobile responsiveness for real client use.",
    bullets: [
      "Implemented a full-screen hero, layered carousel visuals, and custom CSS animation system.",
      "Shipped mobile nav, active-link tracking, counters, testimonials, and scroll reveals.",
      "Added desktop custom cursor interactions and high-intent contact/booking CTA placement."
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Lead Generation"],
    image: "assets/doc.png",
    liveUrl: "https://online-clinic-ten.vercel.app/",
    githubUrl: ""
  },
  {
    title: "Personal Finance Scenario Simulator",
    year: "2026",
    subtitle: "Interactive budgeting and savings planning with practical edge handling",
    summary:
      "Built a clean finance planning tool that helps users model monthly budget scenarios, track goal momentum, and stress-test savings outcomes quickly.",
    bullets: [
      "Designed actionable KPI cards, progress indicators, and budget breakdown views.",
      "Implemented practical edge-case logic for realistic personal finance planning."
    ],
    tags: ["HTML", "CSS", "JavaScript", "Finance UX", "Data Visualization"],
    image: "assets/finance.png",
    liveUrl: "https://personal-finance-scenario-simulator.vercel.app/",
    githubUrl: ""
  },
  {
    title: "Smart Resume Tailor ATS Preview",
    year: "2026",
    subtitle: "Resume-to-job matching assistant with ATS-safe optimization insights",
    summary:
      "Shipped an ATS alignment tool that compares resume content against role requirements, exposing keyword gaps and practical rewrite opportunities.",
    bullets: [
      "Built clear matched vs missing keyword clusters with score and grade feedback.",
      "Added safe plain-text preview and robust validation for input quality."
    ],
    tags: ["HTML", "CSS", "JavaScript", "NLP UX", "ATS Optimization"],
    image: "assets/ats.png",
    liveUrl: "https://smart-resume-tailor-ats-preview-uwj.vercel.app/",
    githubUrl: ""
  },
  {
    title: "Route Planner",
    year: "2026",
    subtitle: "Interactive route intelligence with constraint-aware path optimization",
    summary:
      "Engineered a visually strong route planning app that computes verifiable shortest paths while supporting mode preferences and travel constraints.",
    bullets: [
      "Implemented Dijkstra-based routing with waypoint support and route preference modes.",
      "Added deterministic outputs, ETA logic, and clear edge-case handling for demos."
    ],
    tags: ["HTML", "CSS", "JavaScript", "Algorithms", "Dijkstra", "SVG Maps"],
    image: "assets/route.png",
    liveUrl: "https://route-planner-sepia.vercel.app/",
    githubUrl: ""
  },

  {
    title: "Mindful AI",
    year: "2025",
    subtitle: "Voice-Based Therapeutic Companion",
    summary:
      "A low-latency therapist-style interface designed to feel more natural than chat-based mental health tools.",
    bullets: [
      "Built a voice-to-voice experience with Socket.io and WebSpeech APIs.",
      "Added live audio visualization and smart interruption logic for more human conversation flow.",
    ],
    tags: ["Socket.io", "WebSpeech", "Realtime UX", "JavaScript", "TypeScript"],
    image: "assets/mindful.png",
    liveUrl: "https://yousufjumani.github.io/Mindful-Ai/",
    githubUrl: "https://github.com/YousufJumani/Mindful-A"
  },
  {
    title: "AI Resume Analyzer",
    year: "2025",
    subtitle: "ATS feedback with semantic analysis",
    summary:
      "A resume diagnostic tool aimed at making hiring feedback less opaque for students and early-career candidates.",
    bullets: [
      "Used Hugging Face models to surface feedback beyond keyword matching.",
      "Built parsing support for multiple formats and structural quality checks.",
      "Highlighted grammar, action verbs, and achievement density gaps."
    ],
    tags: ["AI", "API", "NLP", "Hugging Face", "Parsing"],
    image: "assets/Resume.png",
    liveUrl: "",
    githubUrl: ""
  },
  {
    title: "Minimalist Website for Fine Dining",
    year: "2026",
    subtitle: "Client: La Lune (A High-End Parisian-Inspired Bistro)",
    summary:
      "I engineered a Cinematic Culinary Interface that brings the Art de Vivre of Paris to the digital screen. This project focuses on high-conversion visual storytelling for the luxury hospitality sector.",
    tags: ["Website Development", "Design", "UX/UI", "Cinematic Storytelling", "React", "Tailwind CSS"],
    image: "assets/cafe.png",
    liveUrl: "",
    githubUrl: "",
    previewImage: "assets/cafe2.png"
  },
  {
    title: "Ultra-Aesthetic Real Estate Website Luxury Design",
    year: "2026",
    subtitle: "I engineered an immersive Digital Showroom for $40M+ listings, designed to create immediate emotional impact for elite global investors.",
    summary:
      "I engineered a Cinematic Culinary Interface that brings the Art de Vivre of Paris to the digital screen. This project focuses on high-conversion visual storytelling for the luxury hospitality sector.",
    tags: ["Website Development", "Design", "UX/UI", "Cinematic Storytelling", "React", "Tailwind CSS"],
    image: "assets/real.png",
    liveUrl: "https://real-estate-website-pearl-nine.vercel.app/",
    githubUrl: "",
    previewImage: ""
  },
  {
    title: "Modern Digital Website for Fractional CMOs",
    year: "2026",
    subtitle: "I designed an Editorial Digital Magazine Authority Platform for a C-suite executive, transforming a standard CV into a prestigious, high-ticket brand experience.",
    summary:
      "I engineered a Cinematic Culinary Interface that brings the Art de Vivre of Paris to the digital screen. This project focuses on high-conversion visual storytelling for the luxury hospitality sector.",
    tags: ["Website Development", "Design", "UX/UI", "Cinematic Storytelling", "React", "Tailwind CSS"],
    image: "assets/cmo.png",
    liveUrl: "https://cmo-website-green.vercel.app/",
    githubUrl: "",
    previewImage: ""
  },
  {
    title: "Luxury Dental Branding Website",
    year: "2026",
    subtitle: "I transformed a sterile medical layout into a High-Fashion Digital Concierge for a world-class aesthetics studio.",
    summary:
      "I engineered a Cinematic Culinary Interface that brings the Art de Vivre of Paris to the digital screen. This project focuses on high-conversion visual storytelling for the luxury hospitality sector.",
    tags: ["Website Development", "Design", "UX/UI", "Cinematic Storytelling", "React", "Tailwind CSS"],
    image: "assets/dental.png",
    liveUrl: "",
    githubUrl: "",
    previewImage: "assets/dental2.png"
  },
  {
    title: "Class Compass",
    year: "2026",
    subtitle: "Academic risk and CGPA planning suite",
    summary:
      "A practical academic planning tool for NED students that helps forecast attendance and grade risk before it becomes a problem.",
    bullets: [
      "Implemented safe-miss vs must-attend modeling.",
      "Added a CGPA what-if engine with credit-hour weighted calculations.",
      "Supported 100+ beta users in reducing eligibility risk."
    ],
    tags: ["EdTech", "Decision Support", "Student Tools"],
    image: "assets/project-najm.svg",
    liveUrl: "",
    githubUrl: "https://github.com/YousufJumani/ClassCompass"
  }
];

const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value = "") =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

function getProjects() {
  return defaultProjects;
}

function getSocials() {
  return defaultSocials;
}

function getProfile() {
  return defaultProfile;
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEYS.theme, theme);
  const icon = $("#theme-icon");
  const label = $("#theme-label");
  if (icon) {
    icon.innerHTML =
      theme === "light"
        ? '<path d="M12 3.5v2.2M12 18.3v2.2M5.9 5.9l1.6 1.6M16.5 16.5l1.6 1.6M3.5 12h2.2M18.3 12h2.2M5.9 18.1l1.6-1.6M16.5 7.5l1.6-1.6M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />'
        : '<path d="M20 14.2A7.7 7.7 0 0 1 9.8 4 8.6 8.6 0 1 0 20 14.2Z" />';
  }
  if (label) {
    label.textContent = theme === "light" ? "Light mode" : "Dark mode";
  }
}

function initTheme() {
  const stored = localStorage.getItem(STORAGE_KEYS.theme);
  const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  setTheme(stored || preferred);
}

function isImageUrl(url) {
  return /\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(String(url || "").trim());
}

function getProjectPreviewSource(project) {
  if (isImageUrl(project.previewImage)) return project.previewImage;
  return "";
}

function projectActions(project) {
  const actions = [];

  const previewSource = getProjectPreviewSource(project);
  if (previewSource) {
    actions.push(
      `<button class="project-link secondary" type="button" data-open-preview="true" data-preview-src="${escapeHtml(previewSource)}" data-preview-alt="${escapeHtml(project.title || "Project")} preview">Open Preview</button>`
    );
  }

  if (project.liveUrl && !isImageUrl(project.liveUrl)) {
    actions.push(`<a class="project-link" href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noreferrer">Live Demo</a>`);
  }
  if (project.githubUrl) {
    actions.push(`<a class="project-link secondary" href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noreferrer">GitHub</a>`);
  }
  return actions.join("");
}

function truncateText(text, maxLength) {
  const value = String(text || "").trim();
  if (value.length <= maxLength) return value;
  return `${value.slice(0, Math.max(0, maxLength - 1)).trimEnd()}...`;
}

function compactProjectForMainCard(project) {
  return {
    ...project,
    summary: truncateText(project.summary, 120),
    bullets: (project.bullets || []).slice(0, 2).map((point) => truncateText(point, 78))
  };
}

function renderProjects() {
  const container = $("#projects-list");
  if (!container) return;
  const projects = getProjects();
  const preview = projects.slice(0, 3);
  container.innerHTML = preview
    .map(
      (project, index) => {
        const compactProject = compactProjectForMainCard(project);
        return `
        <article class="project-card lift-card">
          <div class="project-media-wrap">
            <img class="project-media" src="${escapeHtml(compactProject.image || "assets/project-damas.svg")}" alt="${escapeHtml(compactProject.title)} preview" />
          </div>
          <div class="project-copy">
            <div class="project-topline">
              <div>
                <span class="project-kicker">Project ${index + 1}</span>
                <h3>${escapeHtml(compactProject.title)}</h3>
              </div>
              <span class="project-year">${escapeHtml(compactProject.year || "")}</span>
            </div>
            <p class="project-subtitle">${escapeHtml(compactProject.subtitle || "")}</p>
            <p class="project-summary">${escapeHtml(compactProject.summary || "")}</p>
            <ul class="project-points">
              ${(compactProject.bullets || []).map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
            </ul>
            <div class="project-tags">
              ${(compactProject.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
            </div>
            <div class="project-actions">
              ${projectActions(compactProject)}
            </div>
          </div>
        </article>
      `;
      }
    )
    .join("");

  // update see-all button label
  const btn = $("#see-all-projects");
  const label = $("#see-all-label");
  if (btn && label) {
    if (projects.length > 3) {
      btn.hidden = false;
      label.textContent = `See all ${projects.length} projects`;
    } else {
      btn.hidden = true;
    }
  }
}

function renderProjectLibrary() {
  const grid = $("#library-grid");
  if (!grid) return;
  const projects = getProjects();
  grid.innerHTML = projects
    .map(
      (project, index) => `
        <article class="lib-card lift-card">
          <div class="lib-media-wrap">
            <img class="lib-media" src="${escapeHtml(project.image || "assets/project-damas.svg")}" alt="${escapeHtml(project.title)} preview" />
          </div>
          <div class="lib-copy">
            <div class="lib-topline">
              <h3>${escapeHtml(project.title)}</h3>
              <span class="project-year">${escapeHtml(project.year || "")}</span>
            </div>
            <p class="project-subtitle">${escapeHtml(project.subtitle || "")}</p>
            <div class="project-tags">
              ${(project.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
            </div>
            <div class="project-actions">
              ${projectActions(project)}
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function openLibrary() {
  const overlay = $("#library-overlay");
  if (!overlay) return;
  overlay.hidden = false;
  syncModalBodyLock();
  renderProjectLibrary();
  overlay.querySelector(".library-panel")?.scrollTo(0, 0);
  $("#library-close")?.focus();
}

function closeLibrary() {
  const overlay = $("#library-overlay");
  if (!overlay) return;
  overlay.hidden = true;
  syncModalBodyLock();
}

function openImagePreview(src, altText) {
  const overlay = $("#image-preview-overlay");
  const image = $("#image-preview-image");
  if (!overlay || !image || !src) return;
  image.src = src;
  image.alt = altText || "Project preview";
  overlay.hidden = false;
  syncModalBodyLock();
  $("#image-preview-close")?.focus();
}

function closeImagePreview() {
  const overlay = $("#image-preview-overlay");
  const image = $("#image-preview-image");
  if (!overlay) return;
  overlay.hidden = true;
  if (image) image.src = "";
  syncModalBodyLock();
}

function syncModalBodyLock() {
  const libraryOpen = !($("#library-overlay")?.hidden ?? true);
  const imageOpen = !($("#image-preview-overlay")?.hidden ?? true);
  document.body.classList.toggle("modal-open", libraryOpen || imageOpen);
}

function applySocials() {
  const s = defaultSocials;
  const gh = $("#social-github");
  const li = $("#social-linkedin");
  const fb = $("#social-facebook");
  const ig = $("#social-instagram");
  const liC = $("#contact-linkedin");
  if (gh) gh.href = s.github || "#";
  if (li) li.href = s.linkedin || "#";
  if (fb) fb.href = s.facebook || "#";
  if (ig) ig.href = s.instagram || "#";
  if (liC) liC.href = s.linkedin || "#";
}

function applyProfile() {
  const image = $("#profile-image");
  const summary = $("#profile-summary");
  if (image) image.src = defaultProfile.avatar;
  if (summary) summary.textContent = defaultProfile.summary;
}



function wireThemeToggle() {
  $("#theme-toggle")?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    setTheme(current === "light" ? "dark" : "light");
  });
}

function wireContactForm() {
  $("#contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $("#contact-name").value.trim();
    const email = $("#contact-email").value.trim();
    const message = $("#contact-message").value.trim();
    const company = $("#contact-company").value.trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a recruiter"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:yousufjumani2@gmail.com?subject=${subject}&body=${body}`;
    const status = $("#contact-status");
    if (status) {
      status.textContent = "Opening your email client...";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  wireThemeToggle();
  applyProfile();
  renderProjects();
  applySocials();
  wireContactForm();

  $("#see-all-projects")?.addEventListener("click", openLibrary);
  $("#library-close")?.addEventListener("click", closeLibrary);
  $("#library-overlay")?.addEventListener("click", (e) => {
    if (e.target.id === "library-overlay") closeLibrary();
  });

  $("#image-preview-close")?.addEventListener("click", closeImagePreview);
  $("#image-preview-overlay")?.addEventListener("click", (e) => {
    if (e.target.id === "image-preview-overlay") closeImagePreview();
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-preview='true']");
    if (!trigger) return;
    openImagePreview(trigger.dataset.previewSrc, trigger.dataset.previewAlt);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const previewOpen = !($("#image-preview-overlay")?.hidden ?? true);
    if (previewOpen) {
      closeImagePreview();
      return;
    }
    closeLibrary();
  });
});
