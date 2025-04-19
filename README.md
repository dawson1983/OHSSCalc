# OHSS Admission Risk Calculator

A comprehensive tool for estimating the risk of hospital admission due to Ovarian Hyperstimulation Syndrome (OHSS) based on various clinical factors.

The `single_page_version.html` contains all necessary HTML, CSS, and JavaScript in a single file for convenient portable use (e.g., via USB drive).

## Overview

The OHSS Admission Risk Calculator is a web-based tool that helps estimate the risk of hospital admission due to OHSS based on multiple clinical factors, including:

- PCOS history
- Stimulation protocol (agonist vs. antagonist)
- Number of oocytes retrieved
- Maternal age
- Cause of infertility
- Embryo transfer number (if applicable)
- Clinical pregnancy status (if applicable)

## Features

- Responsive design that works well on both desktop and mobile devices
- Simple and intuitive user interface with radio button inputs
- Real-time risk calculation that updates immediately when user changes inputs
- Visual risk indicator with color coding and clear risk level display (Low, Medium, High)
- Tooltips providing additional information about risk factors
- Advanced settings to customize baseline incidence rate and risk factors (Odds Ratios)
- Multi-language support (English, Traditional Chinese, Spanish, Japanese, French, German)
- Fixed risk display header that appears when scrolling for easy reference

## Technical Details

This calculator is built using pure HTML5, CSS, and JavaScript without any external libraries or frameworks. The risk calculation is based on Odds Ratios derived from research data.

### Default Baseline Incidence Rates

The calculator uses different default baseline incidence rates depending on the selected embryo transfer strategy:
- **Fresh Embryo Transfer:** 1.94% (0.01940)
- **Freeze-All Strategy:** 1.11% (0.01114)

These defaults represent the baseline risk of OHSS hospital admission for each strategy based on the underlying data. Users can adjust these values in the Advanced Settings.

### Risk Calculation

The calculator uses the following formula to estimate the risk:
```
Absolute Risk = Baseline Incidence × (Product of Applicable Odds Ratios)
```

## Usage

1. Select the embryo transfer strategy (Fresh Embryo Transfer or Freeze-All)
2. Fill out the form by selecting appropriate options for each risk factor
3. The risk percentage and visual indicator will update in real-time
4. Advanced users can customize the baseline incidence rate and risk factors by expanding the Advanced Settings section

## Customization

The calculator allows users to customize:
- Baseline incidence rate
- Adjusted relative risk values for each risk factor

## Disclaimer

This calculator is for educational purposes only and should not be used as a substitute for professional medical advice. Always consult with healthcare providers for medical decisions.

**Please note:** The actual hospital admission rate for OHSS may vary in different countries due to variations in healthcare systems, insurance coverage, and available resources. You can customize the baseline risk in Advanced Settings to better reflect local data.

---

Developed based on research data on Ovarian Hyperstimulation Syndrome (OHSS) risk factors.

<footer class="enhanced-footer">
  <div class="footer-content">
    <div class="disclaimer-section">
      <p>
        This calculator is based on research data and is for educational
        purposes only. Always consult with your healthcare provider for
        medical advice.
      </p>
      <p>
        Default baseline incidence rates: Fresh ET: 1.94%, Freeze-All: 1.11%
      </p>
    </div>
    <div class="credits-section">
      <p class="credits">
        <span class="developer"
          >Developed by Dawson Tasheng Chen, M.D.</span
        >
        <span class="data-source"
          >Data analysis based on the Taiwan Assisted Reproductive
          Technology (ART) Registry and National Health Insurance Research
          Database.</span
        >
      </p>
    </div>
  </div>
</footer>

