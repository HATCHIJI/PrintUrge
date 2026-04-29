const getBasePath = () => {
  const path = window.location.pathname.replace(/\\/g, "/");

  if (path.includes("/pages/services/")) {
    return "../../";
  }

  if (path.includes("/pages/")) {
    return "../";
  }

  return "";
};

const sharedPartials = {
  "site-header": `
<header class="site-header">
  <div class="container nav-shell">
    <a href="{{base}}index.html#top" class="brand" aria-label="PrintUrge home">
      <img src="{{base}}assets/Icons/PrintUrge_Logo.svg" alt="PrintUrge logo" class="brand-logo"/>
    </a>

    <button
      class="nav-toggle"
      type="button"
      aria-expanded="false"
      aria-controls="site-menu"
      aria-label="Open navigation menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="nav-menu" id="site-menu">
      <nav class="site-nav" aria-label="Primary navigation">
        <a href="{{base}}index.html#services">Services</a>
        <a href="{{base}}index.html#how-it-works">How It Works</a>
        <a href="{{base}}index.html#faq">FAQ</a>
      </nav>

      <div class="nav-actions">
        <button type="button" class="btn btn-outline" data-open-auth="login">Log in</button>
        <button type="button" class="btn btn-primary" data-open-auth="signup">Sign up</button>
      </div>
    </div>
  </div>
  <div class="nav-backdrop" data-nav-close></div>
</header>
`,
  "auth-modal": `
<div class="modal" id="auth-modal" aria-hidden="true">
  <div class="modal-overlay" data-modal-close></div>
  <div class="modal-content auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title">
    <div class="modal-header auth-header">
      <div class="auth-heading">
        <h2 class="auth-title" id="auth-title">Log in</h2>
        <p class="auth-subtitle" id="auth-subtitle">Welcome Back</p>
      </div>
      <button type="button" class="modal-close" data-modal-close aria-label="Close dialog">Close</button>
    </div>

    <div class="modal-panel is-active" id="login-panel" role="tabpanel" aria-labelledby="auth-title">
      <form class="auth-form">
        <label class="field">
          <span>Email</span>
          <input type="email" name="login-email" autocomplete="email" required/>
        </label>
        <label class="field">
          <span>Password</span>
          <input type="password" name="login-password" autocomplete="current-password" required/>
        </label>

        <div class="auth-divider"><span>or</span></div>
        <div class="auth-google" id="google-login">
          <button type="button" class="auth-google-btn" data-google-fallback>
            <svg class="google-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.3-1.5 3.9-5.5 3.9-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C17.4 3.4 15 2.2 12 2.2 6.9 2.2 2.7 6.4 2.7 11.5S6.9 20.8 12 20.8c7 0 8.7-4.9 8.7-7.4 0-.5-.1-.9-.1-1.2H12z"/>
              <path fill="#34A853" d="M3.9 7.1l3.1 2.3c.8-2.4 3.1-4.1 5.9-4.1 1.9 0 3.1.8 3.8 1.5l2.6-2.5C17.4 3.4 15 2.2 12 2.2 8.1 2.2 4.8 4.5 3.9 7.1z"/>
              <path fill="#FBBC05" d="M12 20.8c2.9 0 5.3-1 7.1-2.7l-3.3-2.7c-.9.6-2.1 1.1-3.8 1.1-3 0-5.5-2-6.4-4.7L2.4 14c1.9 3.8 5.6 6.8 9.6 6.8z"/>
              <path fill="#4285F4" d="M20.6 13.4c.1-.5.2-1 .2-1.6 0-.5-.1-.9-.1-1.2H12v3.9h5.5c-.3 1.4-1.2 2.7-2.7 3.6l3.3 2.7c1.9-1.8 2.5-4.3 2.5-7.4z"/>
            </svg>
            Log in with Google
          </button>
        </div>

        <button type="submit" class="btn btn-primary full-width">Log in</button>
        <p class="auth-hint">
          Don't have an account? <button type="button" class="link-btn" data-auth-tab="signup">Create Here</button>
        </p>
      </form>
    </div>

    <div class="modal-panel" id="signup-panel" role="tabpanel" aria-labelledby="auth-title">
      <form class="auth-form">
        <label class="field">
          <span>Name</span>
          <input type="text" name="signup-name" autocomplete="name" required/>
        </label>
        <label class="field">
          <span>Email</span>
          <input type="email" name="signup-email" autocomplete="email" required/>
        </label>
        <label class="field">
          <span>Password</span>
          <input type="password" name="signup-password" autocomplete="new-password" required/>
        </label>
        <label class="field">
          <span>Confirm Password</span>
          <input type="password" name="signup-confirm" autocomplete="new-password" required/>
        </label>

        <div class="auth-divider"><span>or</span></div>
        <div class="auth-google" id="google-signup">
          <button type="button" class="auth-google-btn" data-google-fallback>
            <svg class="google-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.3-1.5 3.9-5.5 3.9-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C17.4 3.4 15 2.2 12 2.2 6.9 2.2 2.7 6.4 2.7 11.5S6.9 20.8 12 20.8c7 0 8.7-4.9 8.7-7.4 0-.5-.1-.9-.1-1.2H12z"/>
              <path fill="#34A853" d="M3.9 7.1l3.1 2.3c.8-2.4 3.1-4.1 5.9-4.1 1.9 0 3.1.8 3.8 1.5l2.6-2.5C17.4 3.4 15 2.2 12 2.2 8.1 2.2 4.8 4.5 3.9 7.1z"/>
              <path fill="#FBBC05" d="M12 20.8c2.9 0 5.3-1 7.1-2.7l-3.3-2.7c-.9.6-2.1 1.1-3.8 1.1-3 0-5.5-2-6.4-4.7L2.4 14c1.9 3.8 5.6 6.8 9.6 6.8z"/>
              <path fill="#4285F4" d="M20.6 13.4c.1-.5.2-1 .2-1.6 0-.5-.1-.9-.1-1.2H12v3.9h5.5c-.3 1.4-1.2 2.7-2.7 3.6l3.3 2.7c1.9-1.8 2.5-4.3 2.5-7.4z"/>
            </svg>
            Sign up with Google
          </button>
        </div>

        <button type="submit" class="btn btn-primary full-width">Create account</button>
        <p class="auth-hint">
          Already have an account? <button type="button" class="link-btn" data-auth-tab="login">Log In</button>
        </p>
      </form>
    </div>
  </div>
</div>
`
};

const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";

const loadSharedPartials = async () => {
  const includeNodes = document.querySelectorAll("[data-include]");
  if (includeNodes.length === 0) {
    return;
  }

  const basePath = getBasePath();
  const canFetch = window.location.protocol !== "file:";

  await Promise.all(
    Array.from(includeNodes).map(async (node) => {
      const includeName = node.dataset.include;
      if (!includeName) {
        return;
      }

      let html = "";

      if (canFetch) {
        try {
          const response = await fetch(`${basePath}components/${includeName}.html`);
          if (response.ok) {
            html = await response.text();
          }
        } catch (error) {
          html = "";
        }
      }

      if (!html && sharedPartials[includeName]) {
        html = sharedPartials[includeName];
      }

      if (!html) {
        return;
      }

      html = html.replace(/{{base}}/g, basePath);
      node.outerHTML = html;
    })
  );
};

let closeMenu;

const initNavigation = () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navBackdrop = document.querySelector(".nav-backdrop");

  if (navToggle && navMenu) {
    closeMenu = () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("is-nav-open");
    };

    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("is-nav-open", isOpen);
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    if (navBackdrop) {
      navBackdrop.addEventListener("click", closeMenu);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 920) {
        closeMenu();
      }
    });
  }
};

const initAuthModal = () => {
  const authModal = document.getElementById("auth-modal");
  const authTitle = document.getElementById("auth-title");
  const authSubtitle = document.getElementById("auth-subtitle");
  const authTabs = document.querySelectorAll(".modal-tab");
  const authLinks = document.querySelectorAll(".link-btn[data-auth-tab]");
  const authTriggers = document.querySelectorAll("[data-open-auth]");
  const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
  const authPanels = document.querySelectorAll(".modal-panel");

  const authTitles = {
    login: {
      title: "Log in",
      subtitle: "Welcome Back"
    },
    signup: {
      title: "Sign up",
      subtitle: "Create Your Account"
    }
  };

  const setActiveAuthTab = (tabName) => {
    if (!authModal) {
      return;
    }

    const activeTab = tabName === "signup" ? "signup" : "login";

    authTabs.forEach((tab) => {
      const isActive = tab.dataset.authTab === activeTab;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    authPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.id === `${activeTab}-panel`);
    });

    if (authTitle) {
      authTitle.textContent = authTitles[activeTab]?.title || "Log in";
    }

    if (authSubtitle) {
      authSubtitle.textContent = authTitles[activeTab]?.subtitle || "Welcome Back";
    }
  };

  const openAuthModal = (tabName = "login") => {
    if (!authModal) {
      return;
    }

    authModal.classList.add("is-open");
    authModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-modal-open");
    setActiveAuthTab(tabName);

    if (typeof closeMenu === "function") {
      closeMenu();
    }
  };

  const closeAuthModal = () => {
    if (!authModal) {
      return;
    }

    authModal.classList.remove("is-open");
    authModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-modal-open");
  };

  if (authTriggers.length > 0) {
    authTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        openAuthModal(trigger.dataset.openAuth || "login");
      });
    });
  }

  if (authTabs.length > 0) {
    authTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        setActiveAuthTab(tab.dataset.authTab || "login");
      });
    });
  }

  if (authLinks.length > 0) {
    authLinks.forEach((link) => {
      link.addEventListener("click", () => {
        setActiveAuthTab(link.dataset.authTab || "login");
      });
    });
  }

  if (modalCloseButtons.length > 0) {
    modalCloseButtons.forEach((button) => {
      button.addEventListener("click", closeAuthModal);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && authModal?.classList.contains("is-open")) {
      closeAuthModal();
    }
  });
};

let googleScriptPromise;

const loadGoogleScript = () => {
  if (googleScriptPromise) {
    return googleScriptPromise;
  }

  googleScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Google script failed to load"));
    document.head.appendChild(script);
  });

  return googleScriptPromise;
};

const handleGoogleCredential = (response) => {
  if (!response?.credential) {
    return;
  }

  console.log("Google credential", response.credential);
};

const initGoogleAuth = () => {
  const googleContainer = document.getElementById("google-login");
  if (!googleContainer) {
    return;
  }

  const fallbackButton = googleContainer.querySelector("[data-google-fallback]");
  if (fallbackButton) {
    fallbackButton.addEventListener("click", () => {
      if (window.google?.accounts?.id) {
        window.google.accounts.id.prompt();
      }
    });
  }

  if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID === "YOUR_GOOGLE_CLIENT_ID") {
    return;
  }

  loadGoogleScript()
    .then(() => {
      if (!window.google?.accounts?.id) {
        return;
      }

      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGoogleCredential
      });

      googleContainer.innerHTML = "";
      window.google.accounts.id.renderButton(googleContainer, {
        theme: "outline",
        size: "large",
        text: "signin_with",
        shape: "pill",
        width: 320
      });
    })
    .catch(() => {
      return;
    });
};

const initServiceFilter = () => {
  const filterButtons = document.querySelectorAll("[data-service-filter]");
  const serviceCards = document.querySelectorAll(".service-card");

  const applyServiceFilter = (filter) => {
    serviceCards.forEach((card) => {
      const categoryText = card.dataset.category || "";
      const categories = categoryText.split(" ").filter(Boolean);
      const isVisible = filter === "all" || categories.includes(filter);
      card.hidden = !isVisible;
    });
  };

  if (filterButtons.length > 0 && serviceCards.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        applyServiceFilter(button.dataset.serviceFilter || "all");
      });
    });

    applyServiceFilter("all");
  }
};

const initQuickPrint = () => {
  const serviceType = document.getElementById("service-type");
  const colorMode = document.getElementById("color-mode");
  const paperSize = document.getElementById("paper-size");
  const copies = document.getElementById("copies");
  const pages = document.getElementById("pages");
  const printFile = document.getElementById("print-file");
  const orderSummary = document.getElementById("order-summary");
  const matchBanner = document.getElementById("match-banner");
  const quickLayout = document.getElementById("quick-layout");
  const slotPages = document.getElementById("slot-pages");
  const orderOutput = document.querySelector(".order-output");
  const scanFileBtn = document.getElementById("scan-file-btn");

  if (!serviceType || !colorMode || !paperSize || !copies || !pages || !quickLayout || !slotPages) {
    return;
  }

  const GENERAL_ALLOWED_DOCS = "Allowed documents: PDF, DOC, DOCX, PPT, PPTX, JPG, JPEG, PNG.";
  const hasSummary = Boolean(orderSummary && matchBanner);

  const getSelectedText = (selectElement) => selectElement?.selectedOptions?.[0]?.text || "";

  let quickLayoutAnimationTimer;
  let orderOutputAnimationTimer;

  const animateQuickLayout = () => {
    if (!quickLayout) {
      return;
    }

    quickLayout.classList.remove("is-switching");
    void quickLayout.offsetWidth;
    quickLayout.classList.add("is-switching");

    window.clearTimeout(quickLayoutAnimationTimer);
    quickLayoutAnimationTimer = window.setTimeout(() => {
      quickLayout.classList.remove("is-switching");
    }, 320);
  };

  const animateOrderOutput = () => {
    if (!orderOutput) {
      return;
    }

    orderOutput.classList.remove("is-updated");
    void orderOutput.offsetWidth;
    orderOutput.classList.add("is-updated");

    window.clearTimeout(orderOutputAnimationTimer);
    orderOutputAnimationTimer = window.setTimeout(() => {
      orderOutput.classList.remove("is-updated");
    }, 260);
  };

  const sanitizeInputs = () => {
    const safeCopies = Math.max(1, Number(copies.value) || 1);
    const safePages = Math.max(1, Number(pages.value) || 1);

    copies.value = String(safeCopies);
    pages.value = String(safePages);
  };

  const updateOrderSummary = (shouldAnimate = true) => {
    sanitizeInputs();

    if (!hasSummary) {
      return;
    }

    const safeCopies = Math.max(1, Number(copies.value) || 1);
    const safePages = Math.max(1, Number(pages.value) || 1);

    const isDocumentPrinting = serviceType.value === "document";

    const summaryParts = [
      `${safeCopies} copies`,
      getSelectedText(colorMode),
      getSelectedText(paperSize)
    ];

    if (isDocumentPrinting) {
      summaryParts.push(`${safePages} ${safePages === 1 ? "page" : "pages"}`);
    } else {
      summaryParts.push("digitizer mode");
    }

    orderSummary.textContent = summaryParts.join("  ");

    const uploadedFile = printFile?.files?.[0];
    matchBanner.className = "match-banner is-neutral";

    if (uploadedFile) {
      matchBanner.textContent = `Selected file: ${uploadedFile.name}. ${GENERAL_ALLOWED_DOCS}`;
    } else {
      matchBanner.textContent = GENERAL_ALLOWED_DOCS;
    }

    if (shouldAnimate) {
      animateOrderOutput();
    }
  };

  const updateQuickPrintMode = (shouldAnimate = true) => {
    const isDocumentPrinting = serviceType.value === "document";

    quickLayout.classList.toggle("is-document", isDocumentPrinting);
    quickLayout.classList.toggle("is-digitizer", !isDocumentPrinting);
    slotPages.classList.toggle("is-hidden", !isDocumentPrinting);
    pages.disabled = !isDocumentPrinting;

    if (!isDocumentPrinting) {
      pages.value = "1";
    }

    if (shouldAnimate) {
      animateQuickLayout();
    }

    updateOrderSummary(shouldAnimate);
  };

  [colorMode, paperSize, copies, pages].forEach((input) => {
    if (input) {
      input.addEventListener("input", () => updateOrderSummary(true));
      input.addEventListener("change", () => updateOrderSummary(true));
    }
  });

  if (printFile) {
    printFile.addEventListener("change", () => updateOrderSummary(true));
  }

  if (serviceType) {
    serviceType.addEventListener("change", () => updateQuickPrintMode(true));
  }

  if (scanFileBtn && matchBanner) {
    scanFileBtn.addEventListener("click", () => {
      matchBanner.className = "match-banner is-neutral";
      matchBanner.textContent = "Scan mode selected. Digitize your file, then attach it before submitting.";
    });
  }

  updateQuickPrintMode(false);
};

const updateYear = () => {
  const yearPlaceholder = document.querySelector("[data-year]");
  if (yearPlaceholder) {
    yearPlaceholder.textContent = String(new Date().getFullYear());
  }
};

const runApp = async () => {
  await loadSharedPartials();
  initNavigation();
  initAuthModal();
  initGoogleAuth();
  initServiceFilter();
  initQuickPrint();
  updateYear();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    runApp();
  });
} else {
  runApp();
}