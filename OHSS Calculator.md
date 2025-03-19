---
tags:
  - app/windsurf
  - app/vercel
aliases: 
summary:
---
✨`= this.summary`
🔗: `= this.aliases`

# Prompt
- I want to build a calculator for OHSS admission risk assessment based on my research table(figure 2).
- Please use HTML5 and pure javascript to build this calculator. Make the calculator responsive, vivid, easy-to-use, and user-friendly in single page application(also mobile-friendly).
- the baseline incidence rate for fresh ET is 0.01940. the baseline incidence rate for frozen ET is 0.01114.
- Provide options for user in the end of the page(maybe folded) to customize the calculator, such as baseline incidence rate, risk factors odds ratio, and so on.
- make the options in one variable enclosed by the same round retangle. Don't make loop retangle for each option.
- in the advanced setting, make one setting page for fresh ET, another for Freeze-All cycle calculation. it may look like 
"""
\# Fresh ET {reset button}
\#\# baseline incidence rate: 0.01940
\#\# PCOS history(yes): ...
\#\# Agonist Protocol(Yes): ...
- please make the meter of the calculated risk hover on the top of the page when user scroll down to other variables below to make user to see the change of calculated risk when variable changed. It's also a better visualization in mobile phone.
- add a interface language selection dropdown menu below the page title and description. The language setting affect page title, description of the variables but not the item descriptions in the advanced settings. The default language is English. Other translation options including Traditional Chinese(Taiwan), Spanish, Japanese, France, and German. In Advanced setting, there is a translation customization options for user to set individual translation terms for each language.
- remove the translation setting in the advanced settings
- for the risk visualization meter, please fill the risk bar with color. If the risk is 2%, the bar will fill from 0 to 2%.  If the bar extended to 5 percent or more, it will become red in gradient.
- I want to extend the scope of translated term as following example in all language:
\# Embryo Transfer Strategy
Fresh embryo transfer -> 新鮮週期植入(當周期)
No Embryo Transfer -> 當周期全部冷凍不植入胚胎
\# PCOS病史
Yes -> 有
No -> 無
...

Do not translate advanced settings



# 2025-03-08 Update
1. I want to change the color of the web app. please follow color of the year 2025 PANTONE 17-1230 Mocha Mousse and associated color set.
2. I want to make the calculater to help clinician and patient to decide the embryo transfer policy after ovum pickup. Therefore, I want to rearrange the order of the input question. Please put Embryo Transfer Strategy, Embryo Transfer Number, and Clinical Pregnancy after other questions. Also, rearrange the other questions to make more important factors in front, eg. Age, PCOS hx, oocytes retrieved.
3. The translation of the input variable description "Embryo Transfer Number" isn't translated. please make it the same with others like 'maternalAge' = '母親年齡', 'infertilityCause' = '不孕原因'

please give me a complete plan first(you could give me better solution if feasible)


I want to make the share decision making more prominent. please use some division and explanation words before "Embryo Transfer Strategy" to help clinician and patient after ovum pick-up. Give me complete implementation plan and suggestion first
