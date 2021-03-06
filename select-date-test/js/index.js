function init() {
	const daysSelect = document.querySelector('#days');
	const monthsSelect = document.querySelector('#months');
	const yearsSelect = document.querySelector('#years');
   
	for (let i = 1; i <= 31; i += 1) {
  	const option = setOption(i);
    daysSelect.append(option);
  }
  for (let i = 1; i <= 12; i += 1) {
  	const option = setOption(i);
		monthsSelect.append(option);
  }
	const currentYear = 2018;
  for (let i = currentYear - 120; i <= currentYear; i += 1) {
  	const option = setOption(i);
		yearsSelect.append(option);
  }
};
  const setOption = i => {
	  const option = document.createElement('option');
    option.value = i < 10 ? `0${i}` : i;
    option.innerText = option.value;
    return option;
  };

init();

   const daysSelect = document.querySelector('#days');
   const monthsSelect = document.querySelector('#months');
   const yearSelect = document.querySelector('#years');
   let year;
   let mount;
   let selectedDay

function selectedDate () {
    monthsSelect.addEventListener('change', (e) => {
		mount = e.target.value
		formatedDate(mount)
	})
	yearSelect.addEventListener('change', (e) => {
		year = e.target.value
		formatedDate(year)
	})

}

function formatedDate() {
  if(year && mount) {
    const dayOfyear = moment(year + '-' + mount, "YYYY-MM").daysInMonth();
	if (dayOfyear) {
        selectedDay = daysSelect.value;
		daysSelect.innerHTML = '';
		for (let i = 1; i <= dayOfyear; i += 1) {
  	     const option = setOption(i);  
         daysSelect.append(option)
		 if (option.value === selectedDay || (selectedDay > dayOfyear && +option.value === dayOfyear)) {
            option['selected'] = true
		 }
      }
	}
  }	
}

selectedDate()