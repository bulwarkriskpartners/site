export interface CaseStudy {
  slug: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  outcomes: {
    label: string;
    value: string;
    unit: string;
    type: 'positive' | 'negative' | 'neutral';
  }[];
  beforeAfterData: {
    metric: string;
    before: number;
    after: number;
    unit: string;
  }[];
  timeline: {
    phase: string;
    days: string;
    description: string;
  }[];
  dataUsed: string[];
  limitations: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  'manufacturing-components': {
    slug: 'manufacturing-components',
    industry: 'Manufacturing',
    title: 'Industrial Components',
    challenge: 'Mid-size manufacturer facing cash-flow volatility from supplier concentration and seasonal demand. Needed quantifiable exposure and board-ready mitigation options.',
    solution: 'Executive Risk Diagnostic identified single-source dependencies, seasonal inventory buildup, and FX exposure on raw materials. We built a scenario library and an action plan with owners and thresholds.',
    outcomes: [
      { label: 'Cash Protected', value: '520', unit: 'k', type: 'positive' },
      { label: 'COGS Trend', value: '-45', unit: 'bps', type: 'positive' },
      { label: 'Cash Runway', value: '+35', unit: 'days', type: 'positive' },
      { label: 'Supplier Risk', value: '-22', unit: '%', type: 'positive' },
    ],
    beforeAfterData: [
      { metric: 'Supplier Concentration', before: 67, after: 45, unit: '%' },
      { metric: 'Cash Runway', before: 45, after: 80, unit: 'days' },
      { metric: 'Inventory Turns', before: 4.2, after: 5.8, unit: 'x' },
    ],
    timeline: [
      { phase: 'Data Intake', days: '0–2', description: 'COGS by SKU, vendor list, AR/AP aging, inventory data' },
      { phase: 'Models & Scenarios', days: '3–7', description: 'Built P50/P95 scenarios, supplier concentration analysis, FX impact model' },
      { phase: 'Board Plan', days: '8–10', description: '12-slide deck, 45-min readout, action plan with owners' },
    ],
    dataUsed: ['COGS by SKU', 'Vendor master list', 'AR/AP aging', 'Inventory on-hand', 'Purchase orders', 'FX exposure by vendor'],
    limitations: 'Analysis based on 12-month historical data. Future results may vary based on market conditions, operational changes, and external factors.',
  },
  'regional-food-distributor': {
    slug: 'regional-food-distributor',
    industry: 'Distribution',
    title: 'Regional Food Distributor',
    challenge: 'Regional distributor facing stock-out risk and inventory inefficiencies. Needed to optimize working capital while maintaining service levels.',
    solution: 'Diagnostic surfaced SKU concentration issues and customer payment delays. Developed inventory optimization model and customer credit risk framework.',
    outcomes: [
      { label: 'Write-offs Avoided', value: '240', unit: 'k', type: 'positive' },
      { label: 'Stock-out Rate', value: '-22', unit: '%', type: 'positive' },
      { label: 'Fill Rate', value: '+15', unit: '%', type: 'positive' },
      { label: 'Cash Runway', value: '+60', unit: 'days', type: 'positive' },
    ],
    beforeAfterData: [
      { metric: 'Inventory Turns', before: 6.2, after: 8.7, unit: 'x' },
      { metric: 'Stock-out Rate', before: 18, after: 14, unit: '%' },
      { metric: 'Cash Runway', before: 52, after: 112, unit: 'days' },
    ],
    timeline: [
      { phase: 'Data Intake', days: '0–2', description: 'Sales by SKU/customer, inventory levels, customer credit data' },
      { phase: 'Models & Scenarios', days: '3–7', description: 'SKU rationalization model, customer concentration analysis, working capital scenarios' },
      { phase: 'Board Plan', days: '8–10', description: 'Optimization roadmap, SKU phase-out plan, credit policy updates' },
    ],
    dataUsed: ['Sales by SKU', 'Customer master', 'Inventory levels', 'AR aging', 'Backorder data', 'Fulfillment metrics'],
    limitations: 'Analysis based on 12-month historical data. Future results may vary based on market conditions, operational changes, and external factors.',
  },
  'premium-apparel': {
    slug: 'premium-apparel',
    industry: 'Retail',
    title: 'Premium Apparel',
    challenge: 'E-commerce apparel brand facing margin pressure from inventory markdowns and demand volatility. Needed to optimize SKU mix and reduce waste.',
    solution: 'Diagnostic revealed slow-moving SKU concentration and seasonal forecasting gaps. Built demand model and markdown optimization framework.',
    outcomes: [
      { label: 'Markdown Reduction', value: '180', unit: 'k', type: 'positive' },
      { label: 'SKU Rationalization', value: '-32', unit: '%', type: 'positive' },
      { label: 'Gross Margin', value: '+4.2', unit: 'pts', type: 'positive' },
      { label: 'Inventory Turns', value: '+2.1', unit: 'x', type: 'positive' },
    ],
    beforeAfterData: [
      { metric: 'Markdown Rate', before: 28, after: 16, unit: '%' },
      { metric: 'Inventory Turns', before: 3.8, after: 5.9, unit: 'x' },
      { metric: 'Gross Margin', before: 42, after: 46.2, unit: '%' },
    ],
    timeline: [
      { phase: 'Data Intake', days: '0–2', description: 'Sales by SKU/channel, inventory, markdowns, returns' },
      { phase: 'Models & Scenarios', days: '3–7', description: 'Demand forecasting model, SKU performance analysis, markdown optimization' },
      { phase: 'Board Plan', days: '8–10', description: 'SKU rationalization roadmap, markdown policy, forecasting process' },
    ],
    dataUsed: ['Sales by SKU', 'Inventory levels', 'Markdown history', 'Return rates', 'Seasonality data', 'Channel performance'],
    limitations: 'Analysis based on 12-month historical data. Future results may vary based on market conditions, operational changes, and external factors.',
  },
};

export function getCaseStudy(slug: string): CaseStudy | null {
  return caseStudies[slug] || null;
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}
