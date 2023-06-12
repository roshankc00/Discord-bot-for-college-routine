const cases = (day) => {
  switch (day) {
    case "sun":
      return `
            Sunday's Routine
1st Period - Maths III [L]
SG
10:15 - 11:05
2nd Period - Digital Logic [L]
DRP
11:05 - 11:55
3rd Period - Electronic Circuit Theory [L]
MB
11:55-1:35
Break
1:35-2:25
4th Period - Digital Logic [P] (Group A)
Dr. DRP + KB + DLS
2:25-4:55
4th Period - Object Oriented Programming [P] (Group B)
DSB + Dr.AS + TA
2:25-4:55     
            `;
      break;
    case "mon":
      return `
            Monday's Routine
1st Period - Electronic Devices & Circuits [L]
JKM
10:15 - 11:55
Break
11:55 - 12:45
2nd Period - Electromagnetics [T]
NA
12:45-1:35
3rd Period - Electromagnetics [L]
NA
1:35-2:25
4th Period - Maths III [L]
PRP
2:25-3:15
5th Period - Object Oriented Programming [L]
DSB
3:15-4:05
            `;
      break;
    case "tue":
      return `
            Tuesday's Routine
1st Period - Object Oriented Programming [L]
DSB
10:15 - 11:55
2nd Period - Maths III [L]
GBJ
11:55 - 12:45
Break
12:45-1:35
3rd Period - Maths III [L]
HPG
1:35-2:25
4th Period - Electromagentics [P] (Alternate Week)
NA + PS + REY
2:25-4:55
4th Period - Electronics Devices and Circuits [P] (Alternate Week)
JKM + ALR + SJ
2:25-4:55
            `;
      break;
    case "wed":
      return `
            Wednesday's Routine
1st Period - Electronic Circuit Theory [L]
SG
10:15 - 11:05
2nd Period - Electronic Circuit Theory [T]
SG
11:05 - 11:55
3rd Period - Electronic Devices & Circuits [L]
JKM
11:55-12:45
Break
12:45-1:35
4th Period - - Electronic Devices & Circuits [T]
JKM
1:35-2:25
5th Period - Electronic Circuit Theory [P] (Alternate Week)
RS + GB + A
            `;

      break;
    case "thus":
      return `
            Thursday's Routine
1st Period - Theory of Computation [L]
LNR
11:55-1:35
2nd Period - Maths III [L]
PRP
1:35 - 2:25
3rd Period - Object Oriented Programming [P] (Group A)
DSB + Dr.AS + TA
2:25-4:55
3rd Period - Digital Logic [P] (Group B)
Dr. DRP + KB + DLS
2:25-4:55
            
            `;
      break;
    case "fri":
      return `
            Friday's Routine
1st Period - Digital Logic [L]
Dr. DRP
11:05-1:35
2nd Period - Electromagnetics [L]
NA
12:45 - 2:25
Break
2:25-3:15
3rd Period - Theory of Computation [T]
LNR
3:15-4:05
3rd Period - Theory of Computation [L]
LNR
4:05-4:55
            `;
      break;
    case "sat":
      return "Saturday is holiday enjoy have a nice day";
      break;
  }
};

module.exports = cases;
