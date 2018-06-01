var tab = process.argv;

var sum = 0;
for (let i = 2; i < tab.length; i++)
{
	sum += Number(tab[i]);
}
console.log(sum);
