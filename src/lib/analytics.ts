// Analytics utility functions

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    lintrk?: (...args: any[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, any>) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      ...params,
    });
  }
  
  // LinkedIn Insight Tag
  if (typeof window !== 'undefined' && window.lintrk) {
    window.lintrk('track', { conversion_id: eventName });
  }
  
  // Console log for development
  console.log('Analytics event:', eventName, params);
}

export function captureUTM() {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  const utm = {
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_content: urlParams.get('utm_content') || '',
    utm_term: urlParams.get('utm_term') || '',
  };
  
  // Store in localStorage for session persistence
  if (utm.utm_source) {
    localStorage.setItem('bulwark_utm', JSON.stringify(utm));
  }
  
  // Try to retrieve from localStorage if not in URL
  const stored = localStorage.getItem('bulwark_utm');
  if (stored && !utm.utm_source) {
    return JSON.parse(stored);
  }
  
  return utm;
}

// Specific event trackers
export const analytics = {
  leadQuickSubmit: () => trackEvent('lead_quick_submit', { label: 'quick_lead' }),
  leadAdvancedSubmit: () => trackEvent('lead_advanced_submit', { label: 'advanced_inquiry' }),
  casePdfDownload: (clientType: string) => trackEvent('case_pdf_download', { label: clientType }),
  insightOpen: (slug: string) => trackEvent('insight_open', { label: slug }),
  viewCaseStudies: () => trackEvent('view_case_studies', { label: 'navigation' }),
};
