document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const form = document.getElementById('riskCalculatorForm');
    const riskPercentage = document.getElementById('riskPercentage');
    const riskIndicator = document.getElementById('riskIndicator');
    const riskLevel = document.getElementById('riskLevel');
    const embryoTransferOptions = document.getElementById('embryoTransferOptions');
    const clinicalPregnancyOptions = document.getElementById('clinicalPregnancyOptions');
    const resetFreshBtn = document.getElementById('resetFreshBtn');
    const resetFreezeAllBtn = document.getElementById('resetFreezeAllBtn');
    const resetAllFactorsBtn = document.getElementById('resetAllFactorsBtn');
    const baselineIncidenceFresh = document.getElementById('baselineIncidenceFresh');
    const baselineIncidenceFreezeAll = document.getElementById('baselineIncidenceFreezeAll');
    const embryoTransferRadios = document.getElementsByName('embryoTransfer');
    const languageSelect = document.getElementById('language-select');
    
    // Fixed risk display elements
    const fixedRiskDisplay = document.getElementById('fixedRiskDisplay');
    const fixedRiskPercentage = document.getElementById('fixedRiskPercentage');
    const fixedRiskIndicator = document.getElementById('fixedRiskIndicator');
    const fixedRiskLevel = document.getElementById('fixedRiskLevel');
    
    // Reference to the main risk display for scroll detection
    const riskDisplay = document.querySelector('.risk-display');
    
    // Default baseline incidence rates
    const DEFAULT_BASELINE_INCIDENCE = 0.01940;
    const DEFAULT_BASELINE_INCIDENCE_FREEZEALL = 0.01114;
    
    // Default translations
    const DEFAULT_TRANSLATIONS = {
        'en': {
            'title': 'OHSS Admission Risk Calculator',
            'description': 'This calculator estimates the risk of hospital admission due to Ovarian Hyperstimulation Syndrome (OHSS) based on various clinical factors.',
            'embryoTransfer': 'Embryo Transfer Strategy',
            'pcosHistory': 'PCOS History',
            'protocol': 'Protocol',
            'oocytes': 'Oocytes Retrieved',
            'maternalAge': 'Maternal Age',
            'infertilityCause': 'Cause of Infertility',
            'risk-label': 'Risk of OHSS Admission',
            // Embryo Transfer Strategy options
            'freshEmbryo': 'Fresh Embryo Transfer',
            'noEmbryo': 'No Embryo Transfer (Freeze-All)',
            // PCOS History options
            'yes': 'Yes',
            'no': 'No',
            // Protocol options
            'agonist': 'Agonist Protocol',
            'antagonist': 'Antagonist Protocol',
            // Oocytes Retrieved options
            'less11': 'Less than 11',
            '11to15': '11-15',
            '16to30': '16-30',
            'more30': 'More than 30',
            // Maternal Age options
            'less30': 'Less than 30',
            '30to34': '30-34',
            '35to39': '35-39',
            'more39': 'More than 39',
            // Cause of Infertility options
            'tube': 'Tube',
            'multiple': 'Multiple',
            'otherFemale': 'Other Female',
            'ovary': 'Ovary',
            'male': 'Male',
            'unknown': 'Unknown',
            'endometriosis': 'Endometriosis',
            'uterus': 'Uterus',
            // Embryo Transfer Number options
            'SET': 'Single (SET)',
            'DET': 'Double (DET)',
            'TET': 'Triple (TET)',
            'QETorMore': 'Quadruple or More (QET+)',
            // Clinical Pregnancy options
            'clinicalPregnancy': 'Clinical Pregnancy',
            'yes': 'Yes',
            'no': 'No',
            // Risk levels
            'lowRisk': 'Low Risk: <2%',
            'mediumRisk': 'Medium Risk: 2-5%',
            'highRisk': 'High Risk: >5%'
        },
        'zh-TW': {
            'title': 'OHSS 入院風險計算器',
            'description': '此計算器根據各種臨床因素估計卵巢過度刺激綜合症（OHSS）導致住院的風險。',
            'embryoTransfer': '胚胎移植策略',
            'pcosHistory': '多囊卵巢綜合症病史',
            'protocol': '方案',
            'oocytes': '取出的卵子數量',
            'maternalAge': '母親年齡',
            'infertilityCause': '不孕原因',
            'risk-label': 'OHSS 入院風險',
            // Embryo Transfer Strategy options
            'freshEmbryo': '新鮮週期植入(當周期)',
            'noEmbryo': '當周期全部冷凍不植入胚胎',
            // PCOS History options
            'yes': '有',
            'no': '無',
            // Protocol options
            'agonist': '促性腺激素釋放激動劑方案',
            'antagonist': '促性腺激素釋放拮抗劑方案',
            // Oocytes Retrieved options
            'less11': '少於11個',
            '11to15': '11-15個',
            '16to30': '16-30個',
            'more30': '多於30個',
            // Maternal Age options
            'less30': '小於30歲',
            '30to34': '30-34歲',
            '35to39': '35-39歲',
            'more39': '大於39歲',
            // Cause of Infertility options
            'tube': '輸卵管因素',
            'multiple': '多種因素',
            'otherFemale': '其他女性因素',
            'ovary': '卵巢因素',
            'male': '男性因素',
            'unknown': '不明原因',
            'endometriosis': '子宮內膜異位症',
            'uterus': '子宮因素',
            // Embryo Transfer Number options
            'SET': '單胚胎移植 (SET)',
            'DET': '雙胚胎移植 (DET)',
            'TET': '三胚胎移植 (TET)',
            'QETorMore': '四個或更多胚胎移植 (QET+)',
            // Clinical Pregnancy options
            'clinicalPregnancy': '臨床妊娠',
            'yes': '是',
            'no': '否',
            // Risk levels
            'lowRisk': '低風險: <2%',
            'mediumRisk': '中風險: 2-5%',
            'highRisk': '高風險: >5%'
        },
        'es': {
            'title': 'Calculadora de Riesgo de Ingreso por OHSS',
            'description': 'Esta calculadora estima el riesgo de ingreso hospitalario debido al Síndrome de Hiperestimulación Ovárica (OHSS) basado en varios factores clínicos.',
            'embryoTransfer': 'Estrategia de Transferencia de Embriones',
            'pcosHistory': 'Historia de SOP',
            'protocol': 'Protocolo',
            'oocytes': 'Ovocitos Recuperados',
            'maternalAge': 'Edad Materna',
            'infertilityCause': 'Causa de Infertilidad',
            'risk-label': 'Riesgo de Ingreso por OHSS',
            // Embryo Transfer Strategy options
            'freshEmbryo': 'Transferencia de Embriones Frescos',
            'noEmbryo': 'Sin Transferencia de Embriones (Congelación Total)',
            // PCOS History options
            'yes': 'Sí',
            'no': 'No',
            // Protocol options
            'agonist': 'Protocolo Agonista',
            'antagonist': 'Protocolo Antagonista',
            // Oocytes Retrieved options
            'less11': 'Menos de 11',
            '11to15': '11-15',
            '16to30': '16-30',
            'more30': 'Más de 30',
            // Maternal Age options
            'less30': 'Menos de 30',
            '30to34': '30-34',
            '35to39': '35-39',
            'more39': 'Más de 39',
            // Cause of Infertility options
            'tube': 'Tubo',
            'multiple': 'Múltiple',
            'otherFemale': 'Otra Femenina',
            'ovary': 'Ovario',
            'male': 'Masculina',
            'unknown': 'Desconocida',
            'endometriosis': 'Endometriosis',
            'uterus': 'Útero',
            // Embryo Transfer Number options
            'SET': 'Simple (SET)',
            'DET': 'Doble (DET)',
            'TET': 'Triple (TET)',
            'QETorMore': 'Cuádruple o Más (QET+)',
            // Clinical Pregnancy options
            'clinicalPregnancy': 'Embarazo Clínico',
            'yes': 'Sí',
            'no': 'No',
            // Risk levels
            'lowRisk': 'Riesgo Bajo: <2%',
            'mediumRisk': 'Riesgo Medio: 2-5%',
            'highRisk': 'Riesgo Alto: >5%'
        },
        'ja': {
            'title': 'OHSS 入院リスク計算機',
            'description': 'この計算機は、さまざまな臨床因子に基づいて卵巢過剰刺激症候群（OHSS）による入院リスクを推定します。',
            'embryoTransfer': '胚移植戦略',
            'pcosHistory': 'PCOS 歴',
            'protocol': 'プロトコル',
            'oocytes': '採取された卵子',
            'maternalAge': '母体年齡',
            'infertilityCause': '不妊の原因',
            'risk-label': 'OHSS 入院リスク',
            // Embryo Transfer Strategy options
            'freshEmbryo': '新鮮胚移植',
            'noEmbryo': '胚移植なし（全凍結）',
            // PCOS History options
            'yes': 'はい',
            'no': 'いいえ',
            // Protocol options
            'agonist': 'アゴニストプロトコル',
            'antagonist': 'アンタゴニストプロトコル',
            // Oocytes Retrieved options
            'less11': '11個未満',
            '11to15': '11-15個',
            '16to30': '16-30個',
            'more30': '30個以上',
            // Maternal Age options
            'less30': '30歳未満',
            '30to34': '30-34歳',
            '35to39': '35-39歳',
            'more39': '39歳以上',
            // Cause of Infertility options
            'tube': '卵管因子',
            'multiple': '複合因子',
            'otherFemale': 'その他女性因子',
            'ovary': '卵巣因子',
            'male': '男性因子',
            'unknown': '原因不明',
            'endometriosis': '子宮内膜症',
            'uterus': '子宮因子',
            // Embryo Transfer Number options
            'SET': '単一胚移植（SET）',
            'DET': '二胚移植（DET）',
            'TET': '三胚移植（TET）',
            'QETorMore': '四胚以上移植（QET+）',
            // Clinical Pregnancy options
            'clinicalPregnancy': '臨床的妊娠',
            'yes': 'はい',
            'no': 'いいえ',
            // Risk levels
            'lowRisk': '低リスク: <2%',
            'mediumRisk': '中リスク: 2-5%',
            'highRisk': '高リスク: >5%'
        },
        'fr': {
            'title': 'Calculateur de Risque d\'Admission OHSS',
            'description': 'Ce calculateur estime le risque d\'hospitalisation due au Syndrome d\'Hyperstimulation Ovarienne (OHSS) en fonction de divers facteurs cliniques.',
            'embryoTransfer': 'Stratégie de Transfert d\'Embryons',
            'pcosHistory': 'Antécédents de SOPK',
            'protocol': 'Protocole',
            'oocytes': 'Ovocytes Récupérés',
            'maternalAge': 'Âge Maternel',
            'infertilityCause': 'Cause d\'Infertilité',
            'risk-label': 'Risque d\'Admission OHSS',
            // Embryo Transfer Strategy options
            'freshEmbryo': 'Transfert d\'Embryons Frais',
            'noEmbryo': 'Pas de Transfert d\'Embryons (Congélation Totale)',
            // PCOS History options
            'yes': 'Oui',
            'no': 'Non',
            // Protocol options
            'agonist': 'Protocole Agoniste',
            'antagonist': 'Protocole Antagoniste',
            // Oocytes Retrieved options
            'less11': 'Moins de 11',
            '11to15': '11-15',
            '16to30': '16-30',
            'more30': 'Plus de 30',
            // Maternal Age options
            'less30': 'Moins de 30',
            '30to34': '30-34',
            '35to39': '35-39',
            'more39': 'Plus de 39',
            // Cause of Infertility options
            'tube': 'Tube',
            'multiple': 'Multiple',
            'otherFemale': 'Autre Féminine',
            'ovary': 'Ovaire',
            'male': 'Masculine',
            'unknown': 'Inconnue',
            'endometriosis': 'Endométriose',
            'uterus': 'Utérus',
            // Embryo Transfer Number options
            'SET': 'Simple (SET)',
            'DET': 'Double (DET)',
            'TET': 'Triple (TET)',
            'QETorMore': 'Quadruple ou Plus (QET+)',
            // Clinical Pregnancy options
            'clinicalPregnancy': 'Grossesse Clinique',
            'yes': 'Oui',
            'no': 'Non',
            // Risk levels
            'lowRisk': 'Risque Faible: <2%',
            'mediumRisk': 'Risque Moyen: 2-5%',
            'highRisk': 'Risque Élevé: >5%'
        },
        'de': {
            'title': 'OHSS-Aufnahmerisiko-Rechner',
            'description': 'Dieser Rechner schätzt das Risiko einer Krankenhauseinweisung aufgrund des Ovariellen Hyperstimulationssyndroms (OHSS) basierend auf verschiedenen klinischen Faktoren.',
            'embryoTransfer': 'Embryotransfer-Strategie',
            'pcosHistory': 'PCOS-Vorgeschichte',
            'protocol': 'Protokoll',
            'oocytes': 'Gewonnene Eizellen',
            'maternalAge': 'Mütterliches Alter',
            'infertilityCause': 'Unfruchtbarkeitsursache',
            'risk-label': 'Risiko einer OHSS-Aufnahme',
            // Embryo Transfer Strategy options
            'freshEmbryo': 'Frischer Embryotransfer',
            'noEmbryo': 'Kein Embryotransfer (Freeze-All)',
            // PCOS History options
            'yes': 'Ja',
            'no': 'Nein',
            // Protocol options
            'agonist': 'Agonist-Protokoll',
            'antagonist': 'Antagonist-Protokoll',
            // Oocytes Retrieved options
            'less11': 'Weniger als 11',
            '11to15': '11-15',
            '16to30': '16-30',
            'more30': 'Mehr als 30',
            // Maternal Age options
            'less30': 'Jünger als 30',
            '30to34': '30-34',
            '35to39': '35-39',
            'more39': 'Älter als 39',
            // Cause of Infertility options
            'tube': 'Eileiter',
            'multiple': 'Mehrfach',
            'otherFemale': 'Andere Weibliche',
            'ovary': 'Eierstock',
            'male': 'Männlich',
            'unknown': 'Unbekannt',
            'endometriosis': 'Endometriose',
            'uterus': 'Gebärmutter',
            // Embryo Transfer Number options
            'SET': 'Einzeln (SET)',
            'DET': 'Doppelt (DET)',
            'TET': 'Dreifach (TET)',
            'QETorMore': 'Vierfach oder Mehr (QET+)',
            // Clinical Pregnancy options
            'clinicalPregnancy': 'Klinische Schwangerschaft',
            'yes': 'Ja',
            'no': 'Nein',
            // Risk levels
            'lowRisk': 'Niedriges Risiko: <2%',
            'mediumRisk': 'Mittleres Risiko: 2-5%',
            'highRisk': 'Hohes Risiko: >5%'
        }
    };
    
    // Current translations
    let translations = JSON.parse(JSON.stringify(DEFAULT_TRANSLATIONS));
    
    // Current language
    let currentLanguage = 'en';
    
    // Default risk factor values
    const DEFAULT_RISK_FACTORS = {
        // PCOS History
        pcosHistoryFresh: 2.06,
        pcosHistoryFreezeAll: 1.85,
        
        // Agonist Protocol
        agonistProtocolFresh: 1.04,
        agonistProtocolFreezeAll: 0.97,
        
        // Oocytes Retrieved
        oocytesLess11Fresh: 0.32,
        oocytesLess11FreezeAll: 0.23,
        oocytes16to30Fresh: 1.84,
        oocytes16to30FreezeAll: 1.89,
        oocytesMore30Fresh: 3.07,
        oocytesMore30FreezeAll: 3.13,
        
        // Maternal Age
        ageLess30Fresh: 1.24,
        ageLess30FreezeAll: 1.06,
        age35to39Fresh: 0.64,
        age35to39FreezeAll: 0.71,
        ageMore39Fresh: 0.27,
        ageMore39FreezeAll: 0.42,
        
        // Cause of Infertility
        multipleFresh: 0.94,
        multipleFreezeAll: 0.85,
        otherFemaleFresh: 0.95,
        otherFemaleFreezeAll: 0.63,
        ovaryFresh: 0.70,
        ovaryFreezeAll: 0.69,
        maleFresh: 0.99,
        maleFreezeAll: 0.85,
        unknownFresh: 1.15,
        unknownFreezeAll: 1.30,
        endometriosisFresh: 0.37,
        endometriosisFreezeAll: 0.57,
        uterusFresh: 0.47,
        uterusFreezeAll: 0.38,
        
        // Embryo Transfer Number (Fresh Only)
        embryoTransferDET: 1.39,
        embryoTransferTET: 1.69,
        embryoTransferQETorMore: 1.98,
        
        // Clinical Pregnancy (Fresh Only)
        clinicalPregnancyYes: 2.22
    };
    
    // Initialize event listeners
    function initEventListeners() {
        // Add event listeners to all form inputs
        const inputs = form.querySelectorAll('input[type="radio"]');
        inputs.forEach(input => {
            input.addEventListener('change', calculateRisk);
        });
        
        // Add event listeners to custom risk factor inputs
        const customInputs = document.querySelectorAll('.risk-table input[type="number"]:not([disabled])');
        customInputs.forEach(input => {
            input.addEventListener('change', calculateRisk);
        });
        
        // Add event listeners to baseline incidence inputs
        baselineIncidenceFresh.addEventListener('change', calculateRisk);
        baselineIncidenceFreezeAll.addEventListener('change', calculateRisk);
        
        // Add event listeners to reset buttons
        resetFreshBtn.addEventListener('click', function(e) {
            e.preventDefault();
            resetFreshFactors();
            calculateRisk();
        });
        
        resetFreezeAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            resetFreezeAllFactors();
            calculateRisk();
        });
        
        resetAllFactorsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            resetAllRiskFactors();
        });
        
        // Add event listener for language selection
        if (languageSelect) {
            languageSelect.addEventListener('change', function() {
                currentLanguage = this.value;
                applyTranslations();
                saveLanguagePreference();
            });
        }
        
        // Add event listener for embryo transfer strategy change
        embryoTransferRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                toggleEmbryoTransferOptions();
                calculateRisk();
            });
        });
        
        // Add scroll event listener for fixed risk display
        window.addEventListener('scroll', toggleFixedRiskDisplay);
        
        // Initial setup
        toggleEmbryoTransferOptions();
        initializeTranslations();
        calculateRisk();
    }

    // Initialize translations and load saved language preference
    function initializeTranslations() {
        // Try to load saved language preference
        const savedLanguage = localStorage.getItem('ohssCalculatorLanguage');
        if (savedLanguage && translations[savedLanguage]) {
            currentLanguage = savedLanguage;
            languageSelect.value = currentLanguage;
        }
        
        // Apply the translations for the current language
        applyTranslations();
    }
    
    // Apply translations to the page
    function applyTranslations() {
        const lang = currentLanguage;
        const trans = translations[lang];
        
        // Update page title
        document.title = trans['title'];
        document.querySelector('h1').textContent = trans['title'];
        
        // Update description
        document.querySelector('.description').textContent = trans['description'];
        
        // Update form labels
        document.querySelectorAll('.form-label').forEach(label => {
            // Get the form group type from the class name of the parent
            const formGroup = label.closest('.form-group');
            if (!formGroup) return;
            
            // Find which form field this is
            let fieldType = '';
            if (formGroup.querySelector('[name="embryoTransfer"]')) fieldType = 'embryoTransfer';
            else if (formGroup.querySelector('[name="pcosHistory"]')) fieldType = 'pcosHistory';
            else if (formGroup.querySelector('[name="protocol"]')) fieldType = 'protocol';
            else if (formGroup.querySelector('[name="oocytes"]')) fieldType = 'oocytes';
            else if (formGroup.querySelector('[name="maternalAge"]')) fieldType = 'maternalAge';
            else if (formGroup.querySelector('[name="infertilityCause"]')) fieldType = 'infertilityCause';
            else if (formGroup.querySelector('[name="embryoNumber"]')) fieldType = 'embryoNumber';
            else if (formGroup.querySelector('[name="clinicalPregnancy"]')) fieldType = 'clinicalPregnancy';
            
            if (fieldType && trans[fieldType]) {
                // Get the tooltip span if it exists
                const tooltip = label.querySelector('.tooltip-icon');
                if (tooltip) {
                    // Replace all text nodes before the tooltip
                    let textNode = label.firstChild;
                    while (textNode && textNode !== tooltip) {
                        if (textNode.nodeType === 3) { // Text node
                            textNode.nodeValue = trans[fieldType] + ' ';
                            break;
                        }
                        textNode = textNode.nextSibling;
                    }
                } else {
                    // No tooltip, just set the text content
                    label.textContent = trans[fieldType];
                }
            }
        });
        
        // Update form field options
        document.querySelectorAll('.radio-group label').forEach(label => {
            const input = label.querySelector('input[type="radio"]');
            const span = label.querySelector('span');
            
            if (!input || !span) return;
            
            const name = input.name;
            const value = input.value;
            
            // Map the input name and value to the corresponding translation key
            let translationKey = '';
            
            if (name === 'embryoTransfer') {
                if (value === 'fresh') translationKey = 'freshEmbryo';
                else if (value === 'freezeAll') translationKey = 'noEmbryo';
            } 
            else if (name === 'pcosHistory' || name === 'clinicalPregnancy') {
                translationKey = value; // 'yes' or 'no'
            }
            else if (name === 'protocol') {
                if (value === 'agonist') translationKey = 'agonist';
                else if (value === 'antagonist') translationKey = 'antagonist';
            }
            else if (name === 'oocytes') {
                translationKey = value; // 'less11', '11to15', '16to30', 'more30'
            }
            else if (name === 'maternalAge') {
                translationKey = value; // 'less30', '30to34', '35to39', 'more39'
            }
            else if (name === 'infertilityCause') {
                translationKey = value; // 'tube', 'multiple', 'otherFemale', etc.
            }
            else if (name === 'embryoNumber') {
                translationKey = value; // 'SET', 'DET', 'TET', 'QETorMore'
            }
            
            // Update the text if we have a translation
            if (translationKey && trans[translationKey]) {
                span.textContent = trans[translationKey];
            }
        });
        
        // Update risk labels
        document.querySelectorAll('.risk-label').forEach(el => {
            el.textContent = trans['risk-label'];
        });
        
        // Update risk level explanations
        document.querySelectorAll('.risk-category.low span:last-child').forEach(el => {
            if (trans['lowRisk']) el.textContent = trans['lowRisk'];
        });
        
        document.querySelectorAll('.risk-category.medium span:last-child').forEach(el => {
            if (trans['mediumRisk']) el.textContent = trans['mediumRisk'];
        });
        
        document.querySelectorAll('.risk-category.high span:last-child').forEach(el => {
            if (trans['highRisk']) el.textContent = trans['highRisk'];
        });
        
        // Update html lang attribute
        document.documentElement.lang = lang;
    }
    
    // Save language preference to localStorage
    function saveLanguagePreference() {
        localStorage.setItem('ohssCalculatorLanguage', currentLanguage);
    }
    
    // Toggle embryo transfer and clinical pregnancy options based on transfer strategy
    function toggleEmbryoTransferOptions() {
        const isFreshTransfer = document.querySelector('input[name="embryoTransfer"][value="fresh"]').checked;
        
        embryoTransferOptions.style.display = isFreshTransfer ? 'block' : 'none';
        clinicalPregnancyOptions.style.display = isFreshTransfer ? 'block' : 'none';
    }
    
    // Toggle fixed risk display based on scroll position
    function toggleFixedRiskDisplay() {
        if (!riskDisplay) return;
        
        const riskDisplayTop = riskDisplay.getBoundingClientRect().top;
        const riskDisplayBottom = riskDisplay.getBoundingClientRect().bottom;
        
        // Show the fixed display when the original risk display is not fully visible
        if (riskDisplayTop < 0 || riskDisplayBottom < 0) {
            fixedRiskDisplay.classList.add('visible');
        } else {
            fixedRiskDisplay.classList.remove('visible');
        }
    }
    
    // Reset Fresh Embryo Transfer factors
    function resetFreshFactors() {
        baselineIncidenceFresh.value = DEFAULT_BASELINE_INCIDENCE;
        
        for (const factor in DEFAULT_RISK_FACTORS) {
            if (factor.includes('Fresh') || factor.includes('embryoTransfer') || factor.includes('clinicalPregnancy')) {
                const element = document.getElementById(factor);
                if (element) {
                    element.value = DEFAULT_RISK_FACTORS[factor];
                }
            }
        }
    }
    
    // Reset Freeze-All factors
    function resetFreezeAllFactors() {
        baselineIncidenceFreezeAll.value = DEFAULT_BASELINE_INCIDENCE_FREEZEALL;
        
        for (const factor in DEFAULT_RISK_FACTORS) {
            if (factor.includes('FreezeAll')) {
                const element = document.getElementById(factor);
                if (element) {
                    element.value = DEFAULT_RISK_FACTORS[factor];
                }
            }
        }
    }
    
    // Reset all risk factors to default values
    function resetAllRiskFactors() {
        resetFreshFactors();
        resetFreezeAllFactors();
        calculateRisk();
    }
    
    // Calculate the risk of OHSS admission
    function calculateRisk() {
        let baselineIncidence;
        const isFreshTransfer = document.querySelector('input[name="embryoTransfer"][value="fresh"]').checked;
        if (isFreshTransfer) {
            baselineIncidence = parseFloat(baselineIncidenceFresh.value);
        } else {
            baselineIncidence = parseFloat(baselineIncidenceFreezeAll.value);
        }
        let relativeRisk = 1.0;
        
        // Check if fresh embryo transfer or freeze-all
        const transferType = isFreshTransfer ? 'Fresh' : 'FreezeAll';
        
        // PCOS History
        if (document.querySelector('input[name="pcosHistory"][value="yes"]').checked) {
            const factorId = `pcosHistory${transferType}`;
            relativeRisk *= parseFloat(document.getElementById(factorId).value);
        }
        
        // Agonist Protocol
        if (document.querySelector('input[name="protocol"][value="agonist"]').checked) {
            const factorId = `agonistProtocol${transferType}`;
            relativeRisk *= parseFloat(document.getElementById(factorId).value);
        }
        
        // Oocytes Retrieved
        const oocytesValue = document.querySelector('input[name="oocytes"]:checked').value;
        if (oocytesValue === 'less11') {
            const factorId = `oocytesLess11${transferType}`;
            relativeRisk *= parseFloat(document.getElementById(factorId).value);
        } else if (oocytesValue === '16to30') {
            const factorId = `oocytes16to30${transferType}`;
            relativeRisk *= parseFloat(document.getElementById(factorId).value);
        } else if (oocytesValue === 'more30') {
            const factorId = `oocytesMore30${transferType}`;
            relativeRisk *= parseFloat(document.getElementById(factorId).value);
        }
        
        // Maternal Age
        const maternalAgeValue = document.querySelector('input[name="maternalAge"]:checked').value;
        if (maternalAgeValue === 'less30') {
            const factorId = `ageLess30${transferType}`;
            relativeRisk *= parseFloat(document.getElementById(factorId).value);
        } else if (maternalAgeValue === '35to39') {
            const factorId = `age35to39${transferType}`;
            relativeRisk *= parseFloat(document.getElementById(factorId).value);
        } else if (maternalAgeValue === 'more39') {
            const factorId = `ageMore39${transferType}`;
            relativeRisk *= parseFloat(document.getElementById(factorId).value);
        }
        
        // Cause of Infertility
        const infertilityCauseValue = document.querySelector('input[name="infertilityCause"]:checked').value;
        if (infertilityCauseValue === 'multiple') {
            const factorId = `multiple${transferType}`;
            relativeRisk *= parseFloat(document.getElementById(factorId).value);
        } else if (infertilityCauseValue === 'otherFemale') {
            const factorId = `otherFemale${transferType}`;
            relativeRisk *= parseFloat(document.getElementById(factorId).value);
        } else if (infertilityCauseValue === 'ovary') {
            const factorId = `ovary${transferType}`;
            relativeRisk *= parseFloat(document.getElementById(factorId).value);
        } else if (infertilityCauseValue === 'male') {
            const factorId = `male${transferType}`;
            relativeRisk *= parseFloat(document.getElementById(factorId).value);
        } else if (infertilityCauseValue === 'unknown') {
            const factorId = `unknown${transferType}`;
            relativeRisk *= parseFloat(document.getElementById(factorId).value);
        } else if (infertilityCauseValue === 'endometriosis') {
            const factorId = `endometriosis${transferType}`;
            relativeRisk *= parseFloat(document.getElementById(factorId).value);
        } else if (infertilityCauseValue === 'uterus') {
            const factorId = `uterus${transferType}`;
            relativeRisk *= parseFloat(document.getElementById(factorId).value);
        }
        
        // For Fresh Embryo Transfer only: Embryo Number and Clinical Pregnancy
        if (isFreshTransfer) {
            // Embryo Transfer Number
            const embryoNumberValue = document.querySelector('input[name="embryoNumber"]:checked').value;
            if (embryoNumberValue === 'DET') {
                relativeRisk *= parseFloat(document.getElementById('embryoTransferDET').value);
            } else if (embryoNumberValue === 'TET') {
                relativeRisk *= parseFloat(document.getElementById('embryoTransferTET').value);
            } else if (embryoNumberValue === 'QETorMore') {
                relativeRisk *= parseFloat(document.getElementById('embryoTransferQETorMore').value);
            }
            
            // Clinical Pregnancy
            if (document.querySelector('input[name="clinicalPregnancy"][value="yes"]').checked) {
                relativeRisk *= parseFloat(document.getElementById('clinicalPregnancyYes').value);
            }
        }
        
        // Calculate absolute risk
        const absoluteRisk = baselineIncidence * relativeRisk;
        const riskPercentFormatted = (absoluteRisk * 100).toFixed(2) + '%';
        
        // Update UI
        riskPercentage.textContent = riskPercentFormatted;
        fixedRiskPercentage.textContent = riskPercentFormatted;
        
        // Update risk indicator position
        // Fixed scale from 0% to 10%
        const maxRisk = 0.10;
        
        // Calculate position based on the risk percentage (0-10%)
        // We need to map the risk value (0-10%) to the meter position (0-100%)
        const positionPercentage = Math.min((absoluteRisk / maxRisk) * 100, 100);
        
        // Update the width of the risk indicator instead of positioning it
        riskIndicator.style.width = `${positionPercentage}%`;
        fixedRiskIndicator.style.width = `${positionPercentage}%`;
        
        // Update risk indicator color and risk level text
        updateRiskLevel(absoluteRisk);
    }
    
    // Update risk indicator color and risk level text based on risk level
    function updateRiskLevel(risk) {
        const riskPercent = risk * 100;
        let riskText, riskClass;
        
        if (riskPercent < 2) {
            riskText = 'Low Risk';
            riskClass = 'low-risk';
        } else if (riskPercent < 5) {
            riskText = 'Medium Risk';
            riskClass = 'medium-risk';
        } else {
            riskText = 'High Risk';
            riskClass = 'high-risk';
        }
        
        // Update both indicators with class-based styling
        riskIndicator.classList.remove('low-risk', 'medium-risk', 'high-risk');
        fixedRiskIndicator.classList.remove('low-risk', 'medium-risk', 'high-risk');
        
        riskIndicator.classList.add(riskClass);
        fixedRiskIndicator.classList.add(riskClass);
        
        // Update both risk level texts
        riskLevel.textContent = riskText;
        fixedRiskLevel.textContent = riskText;
    }
    
    // Initialize the app
    initEventListeners();
});
