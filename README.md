# OHSS Admission Risk Calculator

This is a calculator for estimating the risk of hospital admission due to Ovarian Hyperstimulation Syndrome (OHSS) based on various clinical factors.

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
- Visual risk indicator with color coding
- Tooltips providing additional information about risk factors
- Advanced settings to customize baseline incidence rate and risk factors

## Technical Details

This calculator is built using pure HTML5, CSS, and JavaScript without any external libraries or frameworks. The risk calculation is based on adjusted relative risk (aRR) values from research data.

### Default Baseline Incidence Rate

The default baseline incidence rate is set to 1.78% (0.01781), which represents the baseline risk of OHSS hospital admission.

### Risk Calculation

The calculator uses the following formula to estimate the risk:
```
Absolute Risk = Baseline Incidence × (Product of Applicable Relative Risks)
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

---

Developed based on research data on Ovarian Hyperstimulation Syndrome (OHSS) risk factors.
