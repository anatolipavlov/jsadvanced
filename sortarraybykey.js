const todos = [
	{
		title:'Todo1',
		completed: true,
		priority:'low'
	},
	{
		title:'Todo2',
		completed: false,
		priority:'low'
	},
	{
		title:'Todo3',
		completed: true,
		priority:'high'
	},
	{
		title:'Todo4',
		completed: true,
		priority:'medium'
	},
	{
		title:'Todo5',
		completed: false,
		priority:'high'
	},
	{
		title:'Todo6',
		completed: true,
		priority:'low'
	},
]

function sortArrayByKey (arr, key) {
	let sortedData;
	sortedData = arr.sort(function(a,b) {
			if(a[key] > b[key]) { return 1; }
			if(a[key]< b[key]) { return -1; }
			return 0;
	  	});
	return sortedData;
}

console.log(sortArrayByKey(todos, 'priority'))