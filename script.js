// бугунку число
let html_date=document.getElementById("date")
let objDate=new Date
let date=objDate.getDate()
html_date.innerHTML=date


// бугунку кун(жума)
let html_day=document.getElementById("day")
let day=objDate.getDay()
day=day-1
let arrayDays=["monday","tuesday","wednesday",
    "thursday","Friday","sunday",'saturday'
]
html_day.innerHTML=arrayDays[day]


//  ай 
let html_month=document.getElementById("month")
let month=objDate.getMonth()
let arrayMonth=["January",
"February",	
"March	",
"April"	,
"May",
"June",	
"July	",
"August	",
"September"	,
"October"	,
"November",
"December"]
html_month.innerHTML=arrayMonth[month]

// жыл
let html_year=document.getElementById("year")
let year=objDate.getFullYear()
html_year.innerHTML=year
