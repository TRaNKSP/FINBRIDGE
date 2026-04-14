# FinBridge 2030 — Financial Innovation Platform

## Overview
FinBridge 2030 is a fictional US financial services innovation platform demonstrating 15 AI-powered financial strategies addressing technology growth, gas shortage, rising expenses, and unemployment (2026–2030).

## Files Included

### Website Pages
| File | Description |
|------|-------------|
| `index.html` | Main strategy overview with CAGR, market capture, breakeven analysis |
| `portal.html` | Partner signup portal with API key generation |
| `app.html` | Mobile app showcase (consumer + partner dashboards) |
| `api.html` | Full API reference documentation |

### Assets
| Path | Description |
|------|-------------|
| `css/main.css` | Complete stylesheet (dark theme, responsive) |
| `js/strategies.js` | Strategy data — all 15 strategies with business metrics |
| `js/main.js` | Card rendering, filtering, and modal logic |

### Dummy Data (JSON)
| File | Strategy |
|------|----------|
| `data/finbridge-master-dummy.json` | Master file — all 15 strategies, market projections, BRIDGE Fund |
| `data/micro-credit-dummy.json` | Gig Micro-Credit Line |
| `data/bridge-fund-dummy.json` | BRIDGE Impact Fund with projects and investors |
| `data/savings-dummy.json` | All 5 savings products |
| `data/harvest-advance-dummy.json` | Agricultural Micro-Loan |
| `data/ai-score-dummy.json` | AI Credit Decisioning scores |
| `data/fuel-advance-dummy.json` | Fuel Advance Micro-Loan |

## How to Run
1. Open `index.html` in any modern browser — no server required
2. Navigate between pages using the top navigation
3. Click any strategy card to see the full business case modal
4. Visit `portal.html` to generate a sandbox API key
5. Use JSON files in `data/` to test API response parsing

## API Quick Start
```bash
# Sandbox Base URL
BASE_URL="https://sandbox.finbridge2030.io/v1"

# Auth (use key from portal.html)
AUTH="Authorization: Bearer fb2030_sk_DEMO_KEY_FOR_TESTING_ONLY"

# Test micro-credit application
curl -X POST "$BASE_URL/micro-credit/apply" \
  -H "$AUTH" \
  -H "Content-Type: application/json" \
  -d '{"worker_id":"WKR-89234","platform":"uber","requested_amount":500,"currency":"USD"}'
```

## Strategy Metrics Summary

| # | Strategy | CAGR | 2030 Market | Breakeven |
|---|----------|------|-------------|-----------|
| 01 | Gig Micro-Credit Line | 34% | $12.4B | 1.8 yrs |
| 02 | Instant Trade Credit | 41% | $18.7B | 1.5 yrs |
| 03 | Community Lending Circle | 28% | $6.1B | 2.2 yrs |
| 04 | Fuel Advance Micro-Loan | 47% | $4.8B | 1.2 yrs |
| 05 | Harvest Advance | 31% | $9.3B | 2.5 yrs |
| 06 | Adaptive Round-Up Savings | 38% | $21.5B | 1.6 yrs |
| 07 | Goal-Linked Savings Bond | 29% | $14.2B | 2.1 yrs |
| 08 | Gas Hedge Savings Account | 52% | $8.6B | 1.4 yrs |
| 09 | Skills-Linked Savings | 33% | $7.8B | 2.0 yrs |
| 10 | Family Resilience Vault | 26% | $11.4B | 2.4 yrs |
| 11 | AI Credit Decisioning Engine | 44% | $32.8B | 1.3 yrs |
| 12 | Embedded Mobility Wallet | 39% | $16.2B | 1.9 yrs |
| 13 | Predictive Overdraft Prevention | 36% | $9.1B | 1.1 yrs |
| 14 | BRIDGE Impact Fund | 58% | $47.3B | 2.8 yrs |
| 15 | Personal Financial OS | 61% | $78.4B | 3.1 yrs |

## BRIDGE Fund
- **Total Addressable Market:** $847B
- **Target Fund Size:** $25B
- **Investor Tranches:** Senior (5.5-6.5%), Mezzanine (7-8.5%), Impact Equity (9-12%)
- **Sectors:** Infrastructure (30%), Farming (22%), Energy (20%), Gig Economy (18%), Micro-Loans (10%)
- **Countries Active:** 18+
- **US Benefit:** CRA credit + federal tax deduction + 15% domestic reserve recycled to US communities

## Notes
- All data is fictional and for demonstration purposes only
- Partner API keys generated in `portal.html` are sandbox only
- This platform is a conceptual framework from the perspective of 2045

© 2026 FinBridge 2030 — Fictional demonstration platform
