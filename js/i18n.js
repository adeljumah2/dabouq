(function () {
  const STORAGE_KEY = 'dabouq-lang';

  const dict = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.sectors': 'Sectors',
      'nav.careers': 'Careers',
      'nav.contact': 'Contact',
      'nav.cta': 'Get in Touch',
      'nav.close': 'Close',
      'nav.menu': 'Open menu',

      'hero.eyebrow': 'Investment Holding Group',
      'hero.title1': 'Architecting',
      'hero.title2': 'The Future.',
      'hero.desc': "We don't just invest. We build an integrated ecosystem of Industry, Nutrition, and Mobility across Saudi Arabia and the region.",
      'hero.explore': 'Explore Ecosystem',
      'hero.partner': 'Partner With Us',
      'hero.scroll': 'Scroll',

      'stats.countries': 'Countries',
      'stats.sectors': 'Major Sectors',
      'stats.years': 'Years Experience',
      'stats.employees': 'Employees',

      'eco.label': 'Our Ecosystem',
      'eco.title': 'Three Pillars.<br>One Vision.',
      'eco.desc': 'Driving innovation across the key pillars of the economy through focused vertical integration.',
      'eco.tag1': 'Engineering',
      'eco.p1': 'Industrial Infrastructure Solutions',
      'eco.tag2': 'Mobility',
      'eco.h2': 'Automotive',
      'eco.p2': 'Luxury Mobility',
      'eco.tag3': 'Nutrition',
      'eco.p3': 'Distribution & Food Security',
      'eco.explore': 'Explore',

      'partners.label': 'Our Strategic Partners',
      'partners.sub': 'Trusted by industry leaders worldwide',

      'about.label': 'Who We Are',
      'about.title': 'Investing in<br>Sustainable Value.',
      'about.lead': 'At Dabouq Group, we believe that true growth comes from integration — connecting industrial capabilities with nutritional security and advanced mobility.',
      'about.years': 'Years of Excellence',
      'about.panel': 'Building a resilient ecosystem across the Middle East.',
      'about.c1.title': 'Integrated Holding',
      'about.c1.desc': 'Three strategic sectors — engineering, automotive, and FMCG — working as one unified ecosystem.',
      'about.c2.title': 'Regional Reach',
      'about.c2.desc': 'Operations across Saudi Arabia, Jordan, UAE, and Egypt.',
      'about.c3.title': 'Long-Term Vision',
      'about.c3.desc': 'Every investment designed to create sustainable, lasting value for generations.',
      'about.v1': 'Visionary',
      'about.v1.desc': 'Anticipating market shifts before they happen',
      'about.v2': 'Strategic',
      'about.v2.desc': 'Every investment aligned with long-term value',
      'about.v3': 'Global',
      'about.v3.desc': 'Operating across borders with local expertise',

      'footer.cta.title': 'Ready to build the future?',
      'footer.cta.desc': 'Partner with a holding group that integrates industry, nutrition, and mobility.',
      'footer.cta.btn': 'Start a Conversation',
      'footer.brand': 'A premier investment holding company with regional operations across the Middle East.',
      'footer.nav': 'Navigation',
      'footer.sectors': 'Sectors',
      'footer.contact': 'Contact',
      'footer.copy': '© 2026 Dabouq Group. All Rights Reserved.',
      'footer.sector1': 'ADAPTIV Engineering',
      'footer.sector2': 'Automotive',
      'footer.sector3': 'FMCG',
      'footer.map': 'Regional presence map',

      'sectors.eyebrow': 'What We Do',
      'sectors.title': 'Our <span style="color: var(--grey); font-weight: 300;">Sectors.</span>',
      'sectors.desc': 'Driving innovation across three key pillars of the economy. We build sustainable value through focused vertical integration.',
      'sectors.eng.tag': 'Infrastructure',
      'sectors.eng.title': 'ADAPTIV Engineering',
      'sectors.eng.desc': 'Specializing in advanced industrial infrastructure, pipe racking systems, and smart building solutions. ADAPTIV delivers turnkey engineering projects across the region.',
      'sectors.eng.f1': 'Industrial Storage Solutions',
      'sectors.eng.f2': 'Smart Grids & Automation',
      'sectors.eng.f3': 'Turnkey Engineering Projects',
      'sectors.visit': 'Visit Website',
      'sectors.auto.tag': 'Mobility',
      'sectors.auto.title': 'Dabouq Automotive',
      'sectors.auto.desc': 'Redefining luxury mobility. Exclusive distributors for premium automotive brands in the region, setting new standards in the luxury automotive market.',
      'sectors.auto.f1': 'Luxury Fleet Distribution',
      'sectors.auto.f2': 'EV Infrastructure',
      'sectors.auto.f3': 'Premium Brand Partnerships',
      'sectors.soon': 'Website Coming Soon',
      'sectors.fmcg.tag': 'Nutrition',
      'sectors.fmcg.title': 'Dabouq FMCG',
      'sectors.fmcg.desc': 'Ensuring food security and quality distribution across the market with a vast supply chain network spanning multiple countries.',
      'sectors.fmcg.f1': 'Global Distribution Network',
      'sectors.fmcg.f2': 'Cold Chain Logistics',
      'sectors.fmcg.f3': 'Food Security Solutions',
      'sectors.cta.title': 'Interested in partnering?',
      'sectors.cta.desc': "Let's explore how our sectors can create value together.",
      'sectors.cta.btn': 'Get in Touch',
      'sectors.riyadh': 'Riyadh, Saudi Arabia',

      'contact.label': 'Contact Us',
      'contact.title': "Let's Create Together.",
      'contact.desc': 'Have a visionary project? We are looking for partners who want to build the future of industry and mobility.',
      'contact.location': 'Riyadh, Saudi Arabia',
      'contact.name': 'Full Name',
      'contact.email': 'Email Address',
      'contact.phone': 'Mobile Number',
      'contact.subject': 'Subject',
      'contact.topic': 'Select a topic',
      'contact.opt1': 'Partnership Proposal',
      'contact.opt2': 'Investment Inquiry',
      'contact.opt3': 'General Information',
      'contact.message': 'Message',
      'contact.placeholder': 'Tell us about your project...',
      'contact.submit': 'Send Message',
      'contact.cta.title': 'Join our team.',
      'contact.cta.desc': 'Explore career opportunities across our regional operations.',
      'contact.cta.btn': 'View Careers',

      'careers.label': 'Join the Team',
      'careers.title': 'Build Your Legacy.',
      'careers.desc': "We don't offer jobs. We offer the opportunity to shape the industrial landscape of the region.",
      'careers.name': 'Full Name',
      'careers.email': 'Email Address',
      'careers.phone': 'Mobile Number',
      'careers.dept': 'Target Department',
      'careers.dept.select': 'Select department',
      'careers.dept1': 'Engineering (Adaptiv)',
      'careers.dept2': 'Sales & Marketing',
      'careers.dept3': 'Finance & Investment',
      'careers.dept4': 'Operations & Logistics',
      'careers.dept5': 'Sales Supervisor',
      'careers.dept6': 'Sales Representative',
      'careers.sector': 'Target Sector',
      'careers.sector.select': 'Select sector',
      'careers.sector1': 'ADAPTIV Engineering',
      'careers.sector2': 'Automotive',
      'careers.sector3': 'FMCG',
      'careers.linkedin': 'LinkedIn URL',
      'careers.cv': 'Upload CV',
      'careers.cv.click': 'Click to upload your CV',
      'careers.cv.hint': 'PDF or DOCX (Max 5MB)',
      'careers.cv.ready': 'Ready to submit',
      'careers.submit': 'Submit Application',
      'careers.cta.title': 'Explore our ecosystem.',
      'careers.cta.desc': 'Discover the sectors where you can build your career.',
      'careers.cta.btn': 'View Sectors',

      'thanks.contact.title': 'Message Received.',
      'thanks.contact.desc': 'Your inquiry has been securely transmitted. Our strategic team will review it and respond shortly.',
      'thanks.careers.title': 'Application Submitted.',
      'thanks.careers.desc': 'Your profile has been securely transmitted. Our Talent Acquisition team will review it and respond shortly.',
      'thanks.home': 'Return Home',
      'thanks.redirect': 'Redirecting automatically',

      'meta.home': 'Dabouq Group | Leading Investment & Industrial Holding | Saudi Arabia',
      'meta.sectors': 'Sectors | Dabouq Group',
      'meta.contact': 'Contact | Dabouq Group',
      'meta.careers': 'Careers | Dabouq Group',
      'meta.thanks.contact': 'Message Received | Dabouq Group',
      'meta.thanks.careers': 'Application Submitted | Dabouq Group',
    },

    ar: {
      'nav.home': 'الرئيسية',
      'nav.about': 'من نحن',
      'nav.sectors': 'القطاعات',
      'nav.careers': 'الوظائف',
      'nav.contact': 'تواصل معنا',
      'nav.cta': 'تواصل معنا',
      'nav.close': 'إغلاق',
      'nav.menu': 'فتح القائمة',

      'hero.eyebrow': 'مجموعة استثمارية قابضة',
      'hero.title1': 'نبني',
      'hero.title2': 'المستقبل.',
      'hero.desc': 'نحن لا نستثمر فقط. نبني منظومة متكاملة من الصناعة والتغذية والتنقّل عبر المملكة والمنطقة.',
      'hero.explore': 'استكشف المنظومة',
      'hero.partner': 'كن شريكًا معنا',
      'hero.scroll': 'تمرير',

      'stats.countries': 'دول',
      'stats.sectors': 'قطاعات رئيسية',
      'stats.years': 'سنوات خبرة',
      'stats.employees': 'موظفون',

      'eco.label': 'منظومتنا',
      'eco.title': 'ثلاث ركائز.<br>رؤية واحدة.',
      'eco.desc': 'نقود الابتكار عبر ركائز الاقتصاد الأساسية من خلال تكامل رأسي مركّز.',
      'eco.tag1': 'هندسة',
      'eco.p1': 'حلول البنية التحتية الصناعية',
      'eco.tag2': 'تنقّل',
      'eco.h2': 'السيارات',
      'eco.p2': 'تنقّل فاخر',
      'eco.tag3': 'تغذية',
      'eco.p3': 'توزيع وأمن غذائي',
      'eco.explore': 'استكشف',

      'partners.label': 'شركاؤنا الاستراتيجيون',
      'partners.sub': 'موثوقون من قادة الصناعة حول العالم',

      'about.label': 'من نحن',
      'about.title': 'نستثمر في<br>قيمة مستدامة.',
      'about.lead': 'في مجموعة دابوق، نؤمن أن النمو الحقيقي يأتي من التكامل — ربط القدرات الصناعية بالأمن الغذائي والتنقّل المتقدّم.',
      'about.years': 'سنوات من التميّز',
      'about.panel': 'نبني منظومة مرنة عبر الشرق الأوسط.',
      'about.c1.title': 'مجموعة متكاملة',
      'about.c1.desc': 'ثلاثة قطاعات استراتيجية — الهندسة والسيارات والسلع الاستهلاكية — تعمل كمنظومة موحّدة.',
      'about.c2.title': 'حضور إقليمي',
      'about.c2.desc': 'عمليات في السعودية والأردن والإمارات ومصر.',
      'about.c3.title': 'رؤية طويلة الأمد',
      'about.c3.desc': 'كل استثمار مصمّم لخلق قيمة مستدامة للأجيال القادمة.',
      'about.v1': 'رؤيوي',
      'about.v1.desc': 'نستبق تحوّلات السوق قبل حدوثها',
      'about.v2': 'استراتيجي',
      'about.v2.desc': 'كل استثمار منسجم مع القيمة طويلة الأمد',
      'about.v3': 'عالمي',
      'about.v3.desc': 'نعمل عبر الحدود بخبرة محلية',

      'footer.cta.title': 'جاهزون لبناء المستقبل؟',
      'footer.cta.desc': 'شارك مجموعة قابضة تدمج الصناعة والتغذية والتنقّل.',
      'footer.cta.btn': 'ابدأ المحادثة',
      'footer.brand': 'شركة استثمارية قابضة رائدة بعمليات إقليمية عبر الشرق الأوسط.',
      'footer.nav': 'القائمة',
      'footer.sectors': 'القطاعات',
      'footer.contact': 'التواصل',
      'footer.copy': '© 2026 مجموعة دابوق. جميع الحقوق محفوظة.',
      'footer.sector1': 'ADAPTIV للهندسة',
      'footer.sector2': 'السيارات',
      'footer.sector3': 'السلع الاستهلاكية',
      'footer.map': 'خريطة الحضور الإقليمي',

      'sectors.eyebrow': 'ما نقدّمه',
      'sectors.title': 'قطاعاتنا<span style="color: var(--grey); font-weight: 300;">.</span>',
      'sectors.desc': 'نقود الابتكار عبر ثلاث ركائز أساسية في الاقتصاد. نبني قيمة مستدامة عبر تكامل رأسي مركّز.',
      'sectors.eng.tag': 'بنية تحتية',
      'sectors.eng.title': 'ADAPTIV للهندسة',
      'sectors.eng.desc': 'نتخصص في البنية التحتية الصناعية المتقدّمة وأنظمة الرفوف وحلول المباني الذكية. تقدّم ADAPTIV مشاريع هندسية متكاملة عبر المنطقة.',
      'sectors.eng.f1': 'حلول التخزين الصناعي',
      'sectors.eng.f2': 'الشبكات الذكية والأتمتة',
      'sectors.eng.f3': 'مشاريع هندسية متكاملة',
      'sectors.visit': 'زيارة الموقع',
      'sectors.auto.tag': 'تنقّل',
      'sectors.auto.title': 'دابوق للسيارات',
      'sectors.auto.desc': 'نعيد تعريف التنقّل الفاخر. موزّعون حصريون للعلامات الراقية في المنطقة، بمعايير جديدة في سوق السيارات الفاخرة.',
      'sectors.auto.f1': 'توزيع الأساطيل الفاخرة',
      'sectors.auto.f2': 'بنية تحتية للمركبات الكهربائية',
      'sectors.auto.f3': 'شراكات علامات مميزة',
      'sectors.soon': 'الموقع قريبًا',
      'sectors.fmcg.tag': 'تغذية',
      'sectors.fmcg.title': 'دابوق للسلع الاستهلاكية',
      'sectors.fmcg.desc': 'نضمن الأمن الغذائي والتوزيع عالي الجودة عبر شبكة توريد واسعة تمتد لعدة دول.',
      'sectors.fmcg.f1': 'شبكة توزيع عالمية',
      'sectors.fmcg.f2': 'اللوجستيات المبرّدة',
      'sectors.fmcg.f3': 'حلول الأمن الغذائي',
      'sectors.cta.title': 'مهتم بالشراكة؟',
      'sectors.cta.desc': 'دعنا نستكشف كيف تستطيع قطاعاتنا خلق قيمة معًا.',
      'sectors.cta.btn': 'تواصل معنا',
      'sectors.riyadh': 'الرياض، المملكة العربية السعودية',

      'contact.label': 'تواصل معنا',
      'contact.title': 'لنصنع معًا.',
      'contact.desc': 'لديك مشروع طموح؟ نبحث عن شركاء يريدون بناء مستقبل الصناعة والتنقّل.',
      'contact.location': 'الرياض، المملكة العربية السعودية',
      'contact.name': 'الاسم الكامل',
      'contact.email': 'البريد الإلكتروني',
      'contact.phone': 'رقم الجوال',
      'contact.subject': 'الموضوع',
      'contact.topic': 'اختر موضوعًا',
      'contact.opt1': 'عرض شراكة',
      'contact.opt2': 'استفسار استثماري',
      'contact.opt3': 'معلومات عامة',
      'contact.message': 'الرسالة',
      'contact.placeholder': 'أخبرنا عن مشروعك...',
      'contact.submit': 'إرسال الرسالة',
      'contact.cta.title': 'انضم لفريقنا.',
      'contact.cta.desc': 'استكشف فرص العمل عبر عملياتنا الإقليمية.',
      'contact.cta.btn': 'عرض الوظائف',

      'careers.label': 'انضم للفريق',
      'careers.title': 'ابنِ إرثك.',
      'careers.desc': 'لا نقدّم وظائف فقط. نقدّم فرصة لتشكيل المشهد الصناعي في المنطقة.',
      'careers.name': 'الاسم الكامل',
      'careers.email': 'البريد الإلكتروني',
      'careers.phone': 'رقم الجوال',
      'careers.dept': 'القسم المستهدف',
      'careers.dept.select': 'اختر القسم',
      'careers.dept1': 'الهندسة (Adaptiv)',
      'careers.dept2': 'المبيعات والتسويق',
      'careers.dept3': 'المالية والاستثمار',
      'careers.dept4': 'العمليات واللوجستيات',
      'careers.dept5': 'مشرف مبيعات',
      'careers.dept6': 'مندوب مبيعات',
      'careers.sector': 'القطاع المستهدف',
      'careers.sector.select': 'اختر القطاع',
      'careers.sector1': 'ADAPTIV للهندسة',
      'careers.sector2': 'السيارات',
      'careers.sector3': 'السلع الاستهلاكية',
      'careers.linkedin': 'رابط LinkedIn',
      'careers.cv': 'رفع السيرة الذاتية',
      'careers.cv.click': 'اضغط لرفع السيرة الذاتية',
      'careers.cv.hint': 'PDF أو DOCX (بحد أقصى 5 ميغابايت)',
      'careers.cv.ready': 'جاهز للإرسال',
      'careers.submit': 'تقديم الطلب',
      'careers.cta.title': 'استكشف منظومتنا.',
      'careers.cta.desc': 'اكتشف القطاعات التي يمكنك بناء مسيرتك فيها.',
      'careers.cta.btn': 'عرض القطاعات',

      'thanks.contact.title': 'تم استلام الرسالة.',
      'thanks.contact.desc': 'تم إرسال استفسارك بأمان. سيراجعه فريقنا الاستراتيجي ويرد عليك قريبًا.',
      'thanks.careers.title': 'تم تقديم الطلب.',
      'thanks.careers.desc': 'تم إرسال ملفك بأمان. سيراجعه فريق استقطاب المواهب ويرد عليك قريبًا.',
      'thanks.home': 'العودة للرئيسية',
      'thanks.redirect': 'يتم التحويل تلقائيًا',

      'meta.home': 'مجموعة دابوق | استثمار وصناعة رائدة | السعودية',
      'meta.sectors': 'القطاعات | مجموعة دابوق',
      'meta.contact': 'تواصل معنا | مجموعة دابوق',
      'meta.careers': 'الوظائف | مجموعة دابوق',
      'meta.thanks.contact': 'تم استلام الرسالة | مجموعة دابوق',
      'meta.thanks.careers': 'تم تقديم الطلب | مجموعة دابوق',
    },
  };

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'ar' || stored === 'en') return stored;
    return 'en';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function t(lang, key) {
    return (dict[lang] && dict[lang][key]) || (dict.en && dict.en[key]) || key;
  }

  function pageMetaKey() {
    const path = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '') || '';
    if (!path) return 'meta.home';
    if (path.includes('thank-you-contact')) return 'meta.thanks.contact';
    if (path.includes('thank-you-careers')) return 'meta.thanks.careers';
    if (path.includes('sectors')) return 'meta.sectors';
    if (path.includes('contact')) return 'meta.contact';
    if (path.includes('careers')) return 'meta.careers';
    return 'meta.home';
  }

  function applyLang(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    html.classList.toggle('lang-ar', lang === 'ar');

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = t(lang, key);
      if (el.dataset.i18nHtml === 'true') {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.placeholder = t(lang, el.getAttribute('data-i18n-placeholder'));
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', t(lang, el.getAttribute('data-i18n-aria')));
    });

    const title = t(lang, pageMetaKey());
    if (title) document.title = title;

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    window.dispatchEvent(new CustomEvent('dabouq:langchange', { detail: { lang } }));
  }

  function initLangSwitch() {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang === 'en' || lang === 'ar') setLang(lang);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initLangSwitch();
    applyLang(getLang());
  });

  window.DabouqI18n = { getLang, setLang, applyLang, t };
})();
